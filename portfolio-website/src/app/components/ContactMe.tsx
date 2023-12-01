import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
const formSchema = z.object({
	email: z.string().email(),
	name: z.string().min(2).max(50),
    subject: z.string().min(2).max(50),
});

const ContactMe = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			name: "",
            subject:""
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<div  id="contact" className="p-12 mb-20">
			<h1 className="headers underline-effect">Get in touch</h1>
			<div className="flex justify-center">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full md:w-3/4 ">
						<p className="text-left">
							I&rsquo;m always on the lookout for new opportunities, so if you think I can be valuable to
							you, send me a message and we can talk about it!
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
										{/* <FormDescription>This is your public display name.</FormDescription> */}
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
										{/* <FormDescription>This is your public display name.</FormDescription> */}
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
									{/* <FormDescription>This is your public display name.</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid w-full gap-1.5">
							<Label htmlFor="message">Your message</Label>
							<Textarea placeholder="" id="message" />
						</div>
						<Button className="gradient-blue" type="submit">
							Submit
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default ContactMe;
