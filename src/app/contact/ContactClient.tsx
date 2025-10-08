'use client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import Typography from '@mui/joy/Typography';
// import Link from '@mui/joy/Link';
// import Toggle from './../components/Toggle';
import HomeButton from '../components/HomeButton';
interface FormValues {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
    let [isOpen, setIsOpen] = useState(false);

    const mutation = useMutation({
        mutationFn: async (data: FormValues) => {
            const response = await axios.post('/api/contact', data);
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.data;
        },
        onSuccess: () => {
            reset(); // Reset form on success
            // closeModal();
        },
        onError: (error) => {
            // Here you can handle the error more gracefully and show specific messages if needed
            console.error("Mutation error:", error);
        },
        retry: 2, // Retry the mutation 2 times in case of failure
    });

    const onSubmit = (data: FormValues) => {
        if (Object.keys(errors).length === 0) { // Check if there are no errors
            mutation.mutate(data); // Trigger the mutation
            openModal(); // Open the modal only if mutation is triggered
        } else {
            console.log('ERROR')
        }
    };

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
                <main className='h-full min-h-screen main grid lg:grid-cols-2 items-center'>
                  <HomeButton/>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='pb-2 lg:pb-0'><h2>You can also find me on:</h2></div>
                        <div className='flex justify-center items-center'>
                            <a href="https://github.com/curiousmockingbird" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={40} />
                            </a>
                            <a href="https://www.linkedin.com/in/haroldmesa93/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={40} />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="mb-4 text-center">Got questions, ideas, or just want to say hi?<br /> Drop me an email at <span className='font-bold text-2xl '>hola@haroldeveloper.tech</span></h4>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-3/4">
                            <div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-lg mb-2">Your Name:</label>
                                <input {...register('name', { required: true })} type="text" id="name" className="p-2 border rounded-md text-black" />
                                {errors.name && <span className='text-red'>This field is required</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-lg mb-2">Your Email:</label>
                                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" id="email" className="p-2 border rounded-md text-black" />
                                {errors.email && <span className='text-red'>This field is required</span>}

                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-lg mb-2">Message:</label>
                                <textarea {...register('message', { required: true })} id="message" className="p-2 border rounded-md h-32 text-black"></textarea>
                                {errors.message && <span className='text-red'>This field is required</span>}
                            </div>
                            {/* Button from Modal */}

                            <button
                                type="submit"
                                className="rounded-md bg-indigo-200 px-4 py-2 text-sm font-medium text-black hover:bg-indigo-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-all duration-700"
                            >
                                Send
                            </button>
                        </form>

                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                {/* Transition and dialog components */}
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-indigo-500 p-6 text-left align-middle shadow-xl transition-all">
                                                <div className="mt-4">
                                                    {mutation.isPending ? (
                                                        <span>Sending...</span>
                                                    ) : mutation.isError ? (
                                                        <>
                                                            <span>An error occurred. Please try again.</span>
                                                            <div className="mt-4">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-500 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-tahiti focus-visible:ring-offset-2"
                                                                    onClick={closeModal}
                                                                >
                                                                    Got it, thanks!
                                                                </button>
                                                            </div>
                                                        </>
                                                    ) : mutation.isSuccess ? (
                                                        <>
                                                            <span>Message sent!</span>
                                                            <div className="mt-4">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-500 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-tahiti focus-visible:ring-offset-2"
                                                                    onClick={closeModal}
                                                                >
                                                                    Got it, thanks!
                                                                </button>
                                                            </div>
                                                        </>
                                                    ) : null}
                                                </div>

                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </main>
    );
}

export default Contact;
