"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { Textarea } from "../ui/textarea";

// Define Zod schema
const schema = z.object({
  movingFrom: z.object({
    address: z.string(),
    postcode: z.string(),
    city: z.string(),
  }),
  movingTo: z.string(),
  moveDate: z.string(),
  moveDescription: z.string(),
  name: z.string(),
  telephone: z.string(),
  email: z.string().email(),
  movePayer: z.string(),
});

// Define type for form data based on Zod schema
type FormValues = z.infer<typeof schema>;

export default function RelocationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async(data: FormValues, e:any) => {
    e.preventDefault(); // Prevent form submission from reloading the page
   try {
     // Make a POST request to Google Apps Script web app endpoint
     const response = await fetch(
       "https://script.google.com/macros/s/AKfycby65TGMOVUcsDg9iLd9Kh8GAjWlTwDE2YNu6J5LVm0mnaK-cpBFmiXgSN59c6MeM5FibA/exec",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
       }
     );

     if (response.ok) {
       console.log("Form data sent successfully");
       // Handle success (e.g., show success message, clear form, etc.)
     } else {
       console.error("Error sending form data:", response.statusText);
       // Handle error (e.g., display error message)
     }
   } catch (error:any) {
     console.error("Error sending form data:", error.message);
     // Handle error (e.g., display error message)
   }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(onSubmit)(e)}
      className="space-y-6"
    >
      <div>
        <h2>Select countries</h2>
        <div className="flex mt-2 flex-row gap-2">
          <div className="w-full">
            <label htmlFor="movingFrom">I am Moving from</label>
            <Input
              id="movingFrom"
              type="text"
              className="w-full"
              placeholder="Address Postcode / Zip City"
              {...register("movingFrom.address", {
                required: "Address is required",
              })}
            />
            {errors.movingFrom?.address && (
              <span className="text-red-500">
                {errors.movingFrom.address.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="movingTo">I am Moving to</label>
            <Input
              id="movingTo"
              type="text"
              className="w-full"
              placeholder="Destination City"
              {...register("movingTo", {
                required: "Destination city is required",
              })}
            />
            {errors.movingTo && (
              <span className="text-red-500">{errors.movingTo.message}</span>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2>Where are you moving from?</h2>
        <div className="mt-2">
          <Input
            id="address"
            type="text"
            placeholder="Address"
            {...register("movingFrom.address", {
              required: "Address is required",
            })}
          />
          {errors.movingFrom?.address && (
            <span className="text-red-500">
              {errors.movingFrom.address.message}
            </span>
          )}
        </div>
        <div className="flex flex-row w-full justify-between my-2 space-x-2">
          <Input
            id="postcode"
            type="text"
            className="w-full"
            placeholder="Postcode / Zip"
            {...register("movingFrom.postcode", {
              required: "Postcode / Zip is required",
            })}
          />
          {errors.movingFrom?.postcode && (
            <span className="text-red-500">
              {errors.movingFrom.postcode.message}
            </span>
          )}

          <Input
            id="city"
            type="text"
            className="w-full"
            placeholder="City"
            {...register("movingFrom.city", { required: "City is required" })}
          />
          {errors.movingFrom?.city && (
            <span className="text-red-500">
              {errors.movingFrom.city.message}
            </span>
          )}
        </div>
      </div>
      <div>
        <h2>Where are you moving to?</h2>
        <div className="mt-2">
          <Input
            id="destinationCity"
            type="text"
            placeholder="Destination City"
            {...register("movingTo", {
              required: "Destination city is required",
            })}
          />
          {errors.movingTo && (
            <span className="text-red-500">{errors.movingTo.message}</span>
          )}
        </div>
      </div>
      <div>
        <h2>Details of the move</h2>
        <div className="flex flex-col my-2 space-y-2">
          <div>
            <Input
              id="moveDate"
              type="date"
              {...register("moveDate", { required: "Move date is required" })}
            />
            {errors.moveDate && (
              <span className="text-red-500">{errors.moveDate.message}</span>
            )}
          </div>
         
          <div>
            <Textarea
              id="moveDescription"
              className="rounded-none"
              placeholder="Describe your move"
              {...register("moveDescription", {
                required: "Move description is required",
              })}
            />
            {errors.moveDescription && (
              <span className="text-red-500">
                {errors.moveDescription.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2>Your contact details</h2>
        <div className="flex flex-col space-y-2">
          <div>
            <Input
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
              id="telephone"
              type="tel"
              placeholder="Telephone"
              {...register("telephone", { required: "Telephone is required" })}
            />
            {errors.telephone && (
              <span className="text-red-500">{errors.telephone.message}</span>
            )}
          </div>
          <div>
            <Input
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
      <Button type="submit">Submit</Button>
    </form>
  );
}
