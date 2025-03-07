import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

export default function ContactSection() {
   return (
      <section className='bg-blue-50 py-16'>
         <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
               <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>Get In Touch</h2>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Have questions or feedback? We'd love to hear from you!
               </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
               <div>
                  <form className='space-y-6'>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                           <label
                              htmlFor='name'
                              className='block text-sm font-medium text-gray-700 mb-1'
                           >
                              Your Name
                           </label>
                           <Input id='name' placeholder='John Doe' />
                        </div>
                        <div>
                           <label
                              htmlFor='email'
                              className='block text-sm font-medium text-gray-700 mb-1'
                           >
                              Email Address
                           </label>
                           <Input id='email' type='email' placeholder='john@example.com' />
                        </div>
                     </div>

                     <div>
                        <label
                           htmlFor='subject'
                           className='block text-sm font-medium text-gray-700 mb-1'
                        >
                           Subject
                        </label>
                        <Input id='subject' placeholder='How can we help you?' />
                     </div>

                     <div>
                        <label
                           htmlFor='message'
                           className='block text-sm font-medium text-gray-700 mb-1'
                        >
                           Message
                        </label>
                        <Textarea
                           id='message'
                           placeholder='Your message here...'
                           className='h-32'
                        />
                     </div>

                     <Button className='w-full md:w-auto'>Send Message</Button>
                  </form>
               </div>

               <div className='lg:pl-12'>
                  <div className='bg-white rounded-xl shadow-md p-8 h-full'>
                     <h3 className='text-2xl font-bold mb-6 text-gray-900'>Contact Information</h3>

                     <div className='space-y-6'>
                        <div className='flex items-start'>
                           <MapPinIcon className='h-6 w-6 text-primary mt-1 mr-3' />
                           <div>
                              <h4 className='font-bold text-gray-800'>Our Location</h4>
                              <p className='text-gray-600'>
                                 123 Travel Street
                                 <br />
                                 San Francisco, CA 94103
                                 <br />
                                 United States
                              </p>
                           </div>
                        </div>

                        <div className='flex items-start'>
                           <PhoneIcon className='h-6 w-6 text-primary mt-1 mr-3' />
                           <div>
                              <h4 className='font-bold text-gray-800'>Call Us</h4>
                              <p className='text-gray-600'>
                                 +1 (555) 123-4567
                                 <br />
                                 Mon-Fri, 9am-6pm PST
                              </p>
                           </div>
                        </div>

                        <div className='flex items-start'>
                           <MailIcon className='h-6 w-6 text-primary mt-1 mr-3' />
                           <div>
                              <h4 className='font-bold text-gray-800'>Email Us</h4>
                              <p className='text-gray-600'>
                                 info@smarttravel.com
                                 <br />
                                 support@smarttravel.com
                              </p>
                           </div>
                        </div>

                        <div className='pt-4 mt-4 border-t'>
                           <h4 className='font-bold text-gray-800 mb-2'>Follow Us</h4>
                           <div className='flex space-x-4'>
                              <a href='#' className='text-gray-500 hover:text-primary'>
                                 Twitter
                              </a>
                              <a href='#' className='text-gray-500 hover:text-primary'>
                                 Facebook
                              </a>
                              <a href='#' className='text-gray-500 hover:text-primary'>
                                 Instagram
                              </a>
                              <a href='#' className='text-gray-500 hover:text-primary'>
                                 LinkedIn
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
