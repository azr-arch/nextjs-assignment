"use client";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(2, {
        message: "PhoneNumber must be at least 2 characters.",
    }),
    timeFrame: z.string().min(2, {
        message: "TimeFrame must be at least 2 characters.",
    }),
    size: z.string().min(2, {
        message: "Size must be at least 2 characters.",
    }),
    quantity: z.string().min(2, {
        message: "Quantity must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Decription must be at least 2 characters.",
    }),
});

export const QuoteForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phoneNumber: "",
            timeFrame: "",
            size: "",
            quantity: "",
            description: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <div className="max-w-4xl mx-auto py-16">
            <h2 className="uppercase mb-10 heading-1 text-center">Request a form</h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mx-auto flex flex-col items-center justify-center w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-9 w-full">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="timeFrame"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Time Frame</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Choose Time Frame" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="size"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Size</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Choose Size" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Choose Quantity" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Please Describe Your Project</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Choose a project type" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <p className="text-neutral-500 font-subheading my-10 text-center">
                        By submitting this form you agree to our
                        <span className="underline underline-offset-2 mx-1.5">
                            Terms of Service
                        </span>
                        and
                        <span className="underline mx-1.5 underline-offset-2">Privacy Policy</span>.
                    </p>
                    <Button type="submit" variant={"primary"} className="">
                        Lorem Ipsum
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </form>
            </Form>
        </div>
    );
};
