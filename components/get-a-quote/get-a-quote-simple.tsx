"use client";
import React, { useState } from "react";
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
  email: z.string().email({ message: "Invalid email address" }),
  number: z.string().min(1, { message: "Phone number is required" }),
});

type FormValues = z.infer<typeof schema>;

export function HeroForm() {
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
      const formData = { ...data, name: "", type: "landing-page" };
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
    } 
  };

  return !isSubmitSuccessful ? (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="justify-center items-center gap-x-3 w-1/2 mx-auto flex gap-2 flex-col"
    >
      <Input
        id="phoneNumber"
        type="number"
        disabled={isSubmitting}
        placeholder="Phone Number"
        className="bg-white text-primary "
        {...register("number")}
      />
      {errors.number && (
        <span className="text-red-500">{errors.number.message}</span>
      )}
      <Input
        id="email"
        disabled={isSubmitting}
        type="text"
        placeholder="E-Mail"
        className="bg-white text-primary "
        {...register("email")}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}

      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting " : "Submit"}
      </Button>
    </form>
  ) : (
    <Button className="w-fit">Thank you for contacting us !</Button>
  );
}
