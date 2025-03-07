import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select } from './ui/select';

export default function TravelSearch() {
   return (
      <div className='container mx-auto px-6 py-12'>
         <div className='bg-white rounded-xl shadow-lg p-6 -mt-24 relative z-20'>
            <h2 className='text-2xl font-bold mb-6'>Where would you like to go?</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
               <div>
                  <Label htmlFor='destination'>Destination</Label>
                  <Input id='destination' placeholder='City, country, or region' className='mt-1' />
               </div>
               <div>
                  <Label htmlFor='date'>Dates</Label>
                  <Input id='date' type='date' className='mt-1' />
               </div>
               <div>
                  <Label htmlFor='travelers'>Travelers</Label>
                  <Select>
                     <option value='1'>1 Traveler</option>
                     <option value='2'>2 Travelers</option>
                     <option value='3'>3 Travelers</option>
                     <option value='4+'>4+ Travelers</option>
                  </Select>
               </div>
               <div className='flex items-end'>
                  <Button className='w-full flex gap-2 items-center'>
                     <Search size={18} />
                     Search
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
