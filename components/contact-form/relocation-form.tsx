"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { Textarea } from "../ui/textarea";
import ThankYouPage from "./thank-you-screen";
const schema = z.object({
  movingFrom: z.object({
    address: z.string(),
    postcode: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  movingTo: z.object({
    destCity: z.string(),
    country: z.string(),
  }),
  moveDate: z.string(),
  moveDescription: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z.string().min(1, { message: "Phone number is required" }),
  movePayer: z.string(),
});

// Define type for form data based on Zod schema
type FormValues = z.infer<typeof schema>;
export default function RelocationForm() {
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
      const formData = { ...data, type: "relocation" };
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
  return isSubmitSuccessful ? (
    <ThankYouPage />
  ) : (
    <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="space-y-6">
      <div>
        <h2>Where are you moving from?</h2>
        <div className="mt-2">
          <Input
            disabled={isSubmitting}
            id="address"
            type="text"
            placeholder="Address"
            {...register("movingFrom.address", {
              required: "Address is required",
            })}
          />
        </div>
        <div className="flex flex-row w-full justify-between my-2 space-x-2">
          <Input
            disabled={isSubmitting}
            id="postcode"
            type="text"
            className="w-full"
            placeholder="Postcode / Zip"
            {...register("movingFrom.postcode", {
              required: "Postcode / Zip is required",
            })}
          />

          <Input
            disabled={isSubmitting}
            id="city"
            type="text"
            className="w-full"
            placeholder="City"
            {...register("movingFrom.city", { required: "City is required" })}
          />
        </div>
        <Input
          disabled={isSubmitting}
          id="country"
          type="text"
          className="w-full"
          placeholder="Country"
          {...register("movingFrom.country", {
            required: "Country is required",
          })}
        />
      </div>
      <div>
        <h2>Where are you moving to?</h2>
        <div className="flex flex-row w-full justify-between my-2 space-x-2">
          <Input
            disabled={isSubmitting}
            id="country"
            type="text"
            className="w-full"
            placeholder="Country"
            {...register("movingTo.country", {
              required: "Country is required",
            })}
          />

          <Input
            disabled={isSubmitting}
            id="city"
            type="text"
            className="w-full"
            placeholder="Destination City"
            {...register("movingTo.destCity", { required: "City is required" })}
          />
        </div>
      </div>
      <div>
        <h2>Details of the move</h2>
        <div className="flex flex-col my-2 space-y-2">
          <div>
            <Input
              disabled={isSubmitting}
              id="moveDate"
              type="date"
              {...register("moveDate", { required: "Move date is required" })}
            />
          </div>

          <div>
            <Textarea
              disabled={isSubmitting}
              id="moveDescription"
              className="rounded-none"
              placeholder="Describe your move"
              {...register("moveDescription", {
                required: "Move description is required",
              })}
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Your contact details</h2>
        <div className="flex flex-col space-y-2">
          <div>
            <Input
              disabled={isSubmitting}
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div>
            <Input
              disabled={isSubmitting}
              id="number"
              type="number"
              placeholder="Phone Number"
              {...register("number", { required: "Telephone is required" })}
            />
            {errors.number && (
              <span className="text-red-500">{errors.number.message}</span>
            )}
          </div>
          <div>
            <Input
              disabled={isSubmitting}
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2>Who is paying for the move?</h2>
        <div>
          <select
            disabled={isSubmitting}
            className="bg-[#031225]   rounded px-3 py-2 w-full"
            id="movePayer"
            {...register("movePayer", { required: "Move payer is required" })}
          >
            <option value="I am paying">I am paying</option>
            <option value="Company is paying">Company is paying</option>
          </select>

          {errors.movePayer && (
            <span className="text-red-500">{errors.movePayer.message}</span>
          )}
        </div>
      </div>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
