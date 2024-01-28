import React, { useState } from "react";
import Router from "next/router";
import { CreateEventInput } from "@/types/types"; // Adjust the import path based on your project structure

const Draft: React.FC = () => {
  const [formData, setFormData] = useState<CreateEventInput>({
    name: "",
    price: 0,
    date: new Date(),
    time: "",
    location: "",
    description: "",
    availableSeats: 0,
    isFree: false,
    ticketTypes: null,
    organizer: {
      connect: {
        id: 0, // Replace with the actual organizer's ID
      },
    },
    category: "", // Include the category property
    image: null,
  });

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const body = {
        name: formData.name,
        price: formData.price,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        description: formData.description,
        availableSeats: formData.availableSeats,
        isFree: formData.isFree,
        ticketTypes: formData.ticketTypes,
        organizer: formData.organizer,
        category: formData.category, // Include the category in the request body
        image: formData.image,
      };

      await fetch(`http://localhost:3306/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      await Router.push("/get-all-events");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create Event Draft</h1>
        <form onSubmit={submitData}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Event Name</label>
            <input autoFocus type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Location</label>
            <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea cols={50} rows={8} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <input type="text" value={formData.ticketTypes ?? ""} onChange={(e) => setFormData({ ...formData, ticketTypes: e.target.value || null })} className="mt-1 p-2 border rounded w-full" />
          </div>
          {/* Add other fields as needed */}
          <button type="submit" disabled={!formData.name || !formData.location || !formData.description} className="bg-blue-500 text-white p-2 rounded">
            Create Event
          </button>
          <a className="block text-blue-500 mt-2" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
    </div>
  );
};

export default Draft;
