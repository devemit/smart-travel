import { NextRequest, NextResponse } from 'next/server';

import { getSession } from '@/actions/authActions';

import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: NextRequest) {
   try {
      const session = await getSession();
      if (!session) {
         return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const body = await req.json();

      const { destination, startDate, endDate, budget, travelers, preferences } = body;

      if (!destination || !startDate || !endDate) {
         return NextResponse.json(
            { error: 'Missing required fields: destination, startDate, endDate' },
            { status: 400 }
         );
      }

      const formattedStartDate = new Date(startDate).toLocaleDateString('en-US', {
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      });

      const formattedEndDate = new Date(endDate).toLocaleDateString('en-US', {
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      });

      const prompt = `Create a detailed travel itinerary for a trip to ${destination} from ${formattedStartDate} to ${formattedEndDate}. 
      Budget: $${budget || 'Not specified'}, Number of travelers: ${travelers || 'Not specified'}, 
      Preferences: ${preferences || 'Not specified'}.
      
      Please include:
      1. Day-by-day itinerary with specific times and activities
      2. Recommended accommodations with price ranges
      3. Transportation options (flights, local transport)
      4. Must-see attractions and their costs
      5. Local cuisine recommendations
      6. Estimated costs for major activities
      7. Travel tips specific to ${destination}
      8. Budget breakdown (accommodation, transportation, food, activities, etc.)
      
      Format the response as a structured JSON with the following sections:
      - itinerary (day-by-day schedule)
      - accommodations (recommended places to stay)
      - transportation (options for getting around)
      - attractions (must-see places)
      - cuisine (local food recommendations)
      - costs (estimated expenses)
      - tips (travel advice)
      - budget (breakdown of expenses)`;

      try {
         const result = streamText({
            model: groq('llama-3.1-8b-instant'),
            prompt,
            system: 'You are a helpful travel assistant that creates detailed travel itineraries.',
         });

         return result.toDataStreamResponse();
      } catch (modelError) {
         console.error('Error with Groq model:', modelError);

         return NextResponse.json(
            {
               error: 'Failed to generate trip plan',
               details: modelError instanceof Error ? modelError.message : 'Unknown model error',
               modelError: true,
            },
            { status: 500 }
         );
      }
   } catch (error) {
      console.error('Error generating trip plan:', error);
      return NextResponse.json(
         {
            error: 'Failed to generate trip plan',
            details: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
         },
         { status: 500 }
      );
   }
}
