'use server';

import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

import { getSession } from './authActions';
import { formatTripTextPlan, processStreamingChunk } from '@/helpers/formatPropmt';

export type TripFormData = {
   destination: string;
   startDate: string;
   endDate: string;
   budget: number;
   travelers: number;
   preferences: string;
};

export const generateTripPlan = async (formData: TripFormData) => {
   try {
      const session = await getSession();
      if (!session) {
         return { error: 'You must be logged in to generate a trip plan' };
      }

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

      const result = streamText({
         model: groq('llama-3.1-8b-instant'),
         prompt,
         system: 'You are a helpful travel assistant that creates detailed travel itineraries.',
      });

      let tripPlan = '';
      const response = result.toDataStreamResponse();

      const text = await response.text();

      const chunks = text.split('\n');
      for (const chunk of chunks) {
         const processedChunk = processStreamingChunk(chunk);
         if (processedChunk) {
            tripPlan += processedChunk;
         }
      }

      tripPlan = tripPlan
         .replace(/\*\*"([^"]+)"\*\*/g, '**$1**') // Fix bold text with quotes
         .replace(/"([^"]+)"/g, '$1') // Remove remaining quotes around words
         .replace(/(\w+)"(\w+)/g, '$1$2'); // Remove quotes between words

      const formattedTripPlan = formatTripTextPlan(tripPlan);

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
