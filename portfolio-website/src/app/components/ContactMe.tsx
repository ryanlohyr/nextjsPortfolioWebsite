import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from 'emailjs-com';

const formSchema = z.object({
	email: z.string().email(),
	name: z.string().min(2).max(50),
	subject: z.string().min(2).max(50),
	message: z.string().min(2).max(1000),
});
const notifyS = () => toast("Your email has been sent and I will get back to you asap!");
const notifyF = () => toast("So sorry but there seems to be an error sending this email, perhaps you could email me at ryanloh29@gmail.com");
const ContactMe = () => {

	const [showNotification, setShowNotification] = useState(false);
	const [slideOut, setSlideOut] = useState(false);
	const [notifMsg, setNotifMsg] = useState("");

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			name: "",
			subject: "",
			message: "",
		},
	});


	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		emailjs.send(process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID || "", process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID || "", values, process.env.NEXT_PUBLIC_REACT_APP_USER_ID || "")
          .then(function(response) {
            notifyS()
            console.log('SUCCESS!', response.status, response.text);
			form.reset();
         }, function(error) {
            notifyF()
			const mailtoLink = `mailto:ryanloh29@gmai.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent('Name: ' + values.name + '\n' + 'Message: ' + values.message)}`;
    		window.location.href = mailtoLink;
            console.log('FAILED...', error);
			form.reset();
         });
	}
	return (
		<div id="contact" className="p-12 mb-20 bg-black text-white">
			{showNotification && (
				<div className={`notification ${slideOut ? "slide-out" : ""}`}>
					Your email has been sent and I will get back to you asap!
				</div>
			)}
			<h1 className="dark_headers underline-effect text-white">Get in touch</h1>
			<div className="flex justify-center">
				<Form  {...form}>
					<form id='myform' onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full md:w-3/4 ">
						<p className="text-left">
							I&rsquo;m constantly on the lookout for new opportunities, so if you think I can be of value to you
							, send me a message and lets chat!
						</p>
						<div className="flex">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="w-1/2 mr-4">
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="w-1/2 ml-4">
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subject</FormLabel>
									<FormControl>
										<Input placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="gradient-blue" type="submit">
							Submit
						</Button>
					</form>
				</Form>
			</div>
			<ToastContainer position="bottom-right" autoClose={false}></ToastContainer>
		</div>
	);
};

export default ContactMe;
