export const formatTripPlan = (text: string): React.ReactNode[] => {
   const lines = text.split('\n');
   const formattedLines: React.ReactNode[] = [];
   let currentList: React.ReactNode[] = [];
   let inList = false;

   for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
         if (inList) {
            formattedLines.push(
               <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
                  {currentList}
               </ul>
            );
            currentList = [];
            inList = false;
         }
         formattedLines.push(<div key={`empty-${i}`} className='h-3'></div>);
         continue;
      }

      if (line.startsWith('**') && line.endsWith('**')) {
         if (inList) {
            formattedLines.push(
               <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
                  {currentList}
               </ul>
            );
            currentList = [];
            inList = false;
         }
         const headingText = line.replace(/\*\*/g, '');
         formattedLines.push(
            <h2
               key={`heading-${i}`}
               className='text-2xl font-bold mt-8 mb-4 text-primary border-b pb-2'
            >
               {headingText}
            </h2>
         );
         continue;
      }

      if (line.startsWith('###')) {
         if (inList) {
            formattedLines.push(
               <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
                  {currentList}
               </ul>
            );
            currentList = [];
            inList = false;
         }
         const subheadingText = line.replace(/###\s*/, '');
         formattedLines.push(
            <h3
               key={`subheading-${i}`}
               className='text-xl font-semibold mt-6 mb-3 text-primary/80 bg-muted/30 p-2 rounded-md'
            >
               {subheadingText}
            </h3>
         );
         continue;
      }

      if (line.startsWith('*')) {
         const listItemText = line.replace(/^\*\s*/, '');
         currentList.push(
            <li key={`list-item-${i}`} className='mb-2 pl-1'>
               {listItemText}
            </li>
         );
         inList = true;
         continue;
      }

      if (inList) {
         formattedLines.push(
            <ul key={`list-${i}`} className='list-disc pl-6 mb-4 space-y-1'>
               {currentList}
            </ul>
         );
         currentList = [];
         inList = false;
      }
      formattedLines.push(
         <p key={`text-${i}`} className='mb-3 leading-relaxed'>
            {line}
         </p>
      );
   }

   if (inList) {
      formattedLines.push(
         <ul key='final-list' className='list-disc pl-6 mb-4 space-y-1'>
            {currentList}
         </ul>
      );
   }

   return formattedLines;
};

// Function to format the trip plan with proper markdown formatting
export const formatTripTextPlan = (text: string): string => {
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

export const processStreamingChunk = (chunk: string): string => {
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

export const cleanTripPlan = (text: string): string => {
   return text.replace(/\n\s*\n/g, '\n\n').replace(/\s+$/gm, '');
};
