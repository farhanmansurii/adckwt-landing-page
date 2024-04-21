"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z.string().min(1, { message: "Phone number is required" }),
});

type FormValues = z.infer<typeof schema>;

export function GetAQuote({ text }: { text: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = { ...data, type: "landing-page" };
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
    }
  };

  return (
    <Dialog>
      <DialogTrigger onClick={() => reset()} asChild>
        <Button>
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md ">
        <DialogHeader className="py-4 text-left">
          <DialogTitle>Request a Quote</DialogTitle>
          {!isSubmitSuccessful && (
            <DialogDescription>
              Fill in the form below to get a personalized quote.
            </DialogDescription>
          )}
        </DialogHeader>
        {isSubmitSuccessful ? (
          <div>
            <div className=" py-6 ">
              Thank you for your request. We will get back to you shortly.
            </div>

            <DialogFooter className="sm:justify-start flex gap-2 flex-row">
              <DialogClose onClick={() => reset()} asChild>
                <Button
                  type="button"
                  className="border-primary rounded-none text-primary"
                  variant="outline"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                disabled={isSubmitting}
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                disabled={isSubmitting}
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="number">Phone Number</Label>
              <Input
                disabled={isSubmitting}
                id="number"
                type="text"
                placeholder="Enter your phone number"
                {...register("number")}
              />
              {errors.number && (
                <span className="text-red-500">{errors.number.message}</span>
              )}
            </div>
            <DialogFooter className="sm:justify-start flex gap-2 flex-row">
              <DialogClose onClick={() => reset()} asChild>
                <Button
                  type="button"
                  className="border-primary rounded-none text-primary"
                  variant="outline"
                >
                  Close
                </Button>
              </DialogClose>
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting " : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
