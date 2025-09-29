// 'use client'

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// interface ContactFormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

//   // WhatsApp phone number (replace with actual number)
//   const whatsappNumber = "+254712345678"; // Kenyan format example

// const onSubmit = async (data: ContactFormData) => {
//   setIsSubmitting(true);

//   try {
//     const response = await fetch('/api/send-email', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const responseData = await response.json();

//     if (response.ok) {
//       setIsSubmitted(true);
//       reset();
//       setTimeout(() => setIsSubmitted(false), 5000);
//     } else {
//       console.error('Server error:', responseData);
//       throw new Error(responseData.message || 'Failed to send message');
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     alert('There was an error sending your message. Please try again.');
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   // Function to open WhatsApp with pre-filled message
//   const openWhatsApp = () => {
//     const message = "Hello, I would like to get more information about DeKUTAA.";
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };

//   return (
//     <div className="bg-white dark:bg-secondary/10 rounded-lg shadow-md p-6 md:p-8">
//       <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

//       {isSubmitted ? (
//         <div className="bg-success/10 text-success p-4 rounded-md mb-4">
//           <h3 className="font-bold mb-2">Thank you for your message!</h3>
//           <p>We've received your inquiry and will get back to you as soon as possible.</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium mb-1">
//               Name <span className="text-error">*</span>
//             </label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Your name"
//               className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
//                 errors.name
//                   ? 'border-error focus:border-error focus:ring-error/50'
//                   : 'border-secondary focus:border-primary focus:ring-primary/50'
//               }`}
//               {...register('name', { required: 'Name is required' })}
//             />
//             {errors.name && (
//               <p className="text-error text-sm mt-1">{errors.name.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email <span className="text-error">*</span>
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="your.email@example.com"
//               className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
//                 errors.email
//                   ? 'border-error focus:border-error focus:ring-error/50'
//                   : 'border-secondary focus:border-primary focus:ring-primary/50'
//               }`}
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: 'Invalid email address'
//                 }
//               })}
//             />
//             {errors.email && (
//               <p className="text-error text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium mb-1">
//               Subject <span className="text-error">*</span>
//             </label>
//             <input
//               id="subject"
//               type="text"
//               placeholder="Subject of your inquiry"
//               className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
//                 errors.subject
//                   ? 'border-error focus:border-error focus:ring-error/50'
//                   : 'border-secondary focus:border-primary focus:ring-primary/50'
//               }`}
//               {...register('subject', { required: 'Subject is required' })}
//             />
//             {errors.subject && (
//               <p className="text-error text-sm mt-1">{errors.subject.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium mb-1">
//               Message <span className="text-error">*</span>
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               placeholder="How can we help you?"
//               className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
//                 errors.message
//                   ? 'border-error focus:border-error focus:ring-error/50'
//                   : 'border-secondary focus:border-primary focus:ring-primary/50'
//               }`}
//               {...register('message', {
//                 required: 'Message is required',
//                 minLength: {
//                   value: 10,
//                   message: 'Message must be at least 10 characters'
//                 }
//               })}
//             ></textarea>
//             {errors.message && (
//               <p className="text-error text-sm mt-1">{errors.message.message}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full btn btn-primary"
//           >
//             {isSubmitting ? 'Sending...' : 'Send Message'}
//           </button>

//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or contact via</span>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={openWhatsApp}
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
//           >
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
//             </svg>
//             Message us on WhatsApp
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ContactForm;



import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      setIsSubmitted(true);
      reset();

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-secondary/10 rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

      {isSubmitted ? (
        <div className="bg-success/10 text-success p-4 rounded-md mb-4">
          <h3 className="font-bold mb-2">Thank you for your message!</h3>
          <p>We've received your inquiry and will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-error">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
                errors.name
                  ? 'border-error focus:border-error focus:ring-error/50'
                  : 'border-secondary focus:border-primary focus:ring-primary/50'
              }`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-error">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
                errors.email
                  ? 'border-error focus:border-error focus:ring-error/50'
                  : 'border-secondary focus:border-primary focus:ring-primary/50'
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject <span className="text-error">*</span>
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject of your inquiry"
              className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
                errors.subject
                  ? 'border-error focus:border-error focus:ring-error/50'
                  : 'border-secondary focus:border-primary focus:ring-primary/50'
              }`}
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && (
              <p className="text-error text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can we help you?"
              className={`w-full p-3 rounded-md border focus:ring-1 focus:outline-none transition-colors ${
                errors.message
                  ? 'border-error focus:border-error focus:ring-error/50'
                  : 'border-secondary focus:border-primary focus:ring-primary/50'
              }`}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters'
                }
              })}
            ></textarea>
            {errors.message && (
              <p className="text-error text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn-primary"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;