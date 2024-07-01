"use client";
import { sendGTMEvent } from "@next/third-parties/google";
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
import { Textarea } from "../ui/textarea";
import ThankYouPage from "./thank-you-screen";
import { reportConversion } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z.string().min(1, { message: "Phone number is required" }),
  notes: z.string(),
});

type FormValues = z.infer<typeof schema>;

export function NormalForm({ type }: { type: string }) {
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
      const formData = { ...data, type: type };
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
      sendGTMEvent({ event: "conversion", value: type });
      reportConversion();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
    }
  };

  return (
    <div>
      <div className="sm:max-w-md ">
        {isSubmitSuccessful ? (
          <ThankYouPage />
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="number">Details</Label>
              <Textarea
                disabled={isSubmitting}
                id="notes"
                placeholder="Enter your Quote Details"
                {...register("notes")}
              />
              {errors.number && (
                <span className="text-red-500">{errors.number.message}</span>
              )}
            </div>
            <div className="sm:justify-start flex gap-2 flex-row">
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting " : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
