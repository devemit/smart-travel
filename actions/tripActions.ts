'use server';

import { getSession } from './authActions';
import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

export type TripFormData = {
   destination: string;
   startDate: string;
   endDate: string;
   budget: number;
   travelers: number;
   preferences: string;
};

// Helper function to process streaming chunks
const processStreamingChunk = (chunk: string): string => {
   // Filter out metadata chunks
   if (chunk.startsWith('f:') || chunk.startsWith('e:') || chunk.startsWith('d:')) {
      return '';
   }

   // Process content chunks (starting with "0:")
   if (chunk.startsWith('0:')) {
      // Extract the actual content
      const content = chunk.substring(2);

      // Remove escape sequences and trailing quotes
      let processedContent = content.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/"$/, '');

      return processedContent;
   }

   return '';
};

// Function to format the trip plan with proper markdown formatting
const formatTripPlan = (text: string): string => {
   // Ensure proper line breaks
   let formattedText = text
      .replace(/\n\s*\n/g, '\n\n') // Normalize multiple newlines
      .replace(/\s+$/gm, ''); // Remove trailing whitespace on each line

   // Format headings
   formattedText = formattedText
      .replace(/\*\*([^*]+)\*\*/g, '**$1**') // Fix bold text
      .replace(/"([^"]+)"/g, '$1'); // Remove quotes around words

   // Format lists
   formattedText = formattedText
      .replace(/^\s*\*\s+/gm, '* ') // Ensure consistent list item formatting
      .replace(/^\s*###\s+/gm, '### '); // Ensure consistent subheading formatting

   return formattedText;
};

export const generateTripPlan = async (formData: TripFormData) => {
   try {
      // Check if user is authenticated
      const session = await getSession();
      if (!session) {
         return { error: 'You must be logged in to generate a trip plan' };
      }

      // Format dates for better readability
      const startDate = new Date(formData.startDate).toLocaleDateString('en-US', {
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      });

      const endDate = new Date(formData.endDate).toLocaleDateString('en-US', {
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      });

      // Create a detailed prompt for the AI
      const prompt = `Create a detailed travel itinerary for a trip to ${
         formData.destination
      } from ${startDate} to ${endDate}. 
    Budget: $${formData.budget} for ${formData.travelers} travelers.
    ${formData.preferences ? `Additional preferences: ${formData.preferences}` : ''}
    
    Please include:
    1. Day-by-day itinerary with activities and timings
    2. Recommended accommodations with price ranges
    3. Transportation options within the destination
    4. Must-visit attractions and landmarks
    5. Local cuisine recommendations
    6. Estimated costs for activities and meals
    7. Travel tips specific to ${formData.destination}
    8. Budget breakdown and money-saving tips
    
    Format the response in a clear, readable structure with sections and bullet points where appropriate.
    
    IMPORTANT: Use markdown formatting with ** for headings, ### for subheadings, and * for list items.`;

      // Call the language model directly with the prompt
      const result = streamText({
         model: groq('llama-3.1-8b-instant'),
         prompt,
         system: 'You are a helpful travel assistant that creates detailed travel itineraries.',
      });

      // Process the streaming response
      let tripPlan = '';
      const response = result.toDataStreamResponse();

      // Read the response as text
      const text = await response.text();

      // Process the text in chunks
      const chunks = text.split('\n');
      for (const chunk of chunks) {
         const processedChunk = processStreamingChunk(chunk);
         if (processedChunk) {
            tripPlan += processedChunk;
         }
      }

      // Clean up any remaining formatting issues
      tripPlan = tripPlan
         .replace(/\*\*"([^"]+)"\*\*/g, '**$1**') // Fix bold text with quotes
         .replace(/"([^"]+)"/g, '$1') // Remove remaining quotes around words
         .replace(/(\w+)"(\w+)/g, '$1$2'); // Remove quotes between words

      // Format the trip plan with proper markdown formatting
      const formattedTripPlan = formatTripPlan(tripPlan);

      return { tripPlan: formattedTripPlan };
   } catch (error) {
      console.error('Error generating trip plan:', error);
      return {
         error:
            error instanceof Error
               ? error.message
               : 'An unexpected error occurred while generating your trip plan',
      };
   }
};
