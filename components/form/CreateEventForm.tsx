import { CreateEventInput } from "@/types/types";
import { useState } from "react";

interface CreateEventFormProps {
  onSubmit: (formData: CreateEventInput) => void;
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CreateEventInput>({
    name: "",
    price: 0,
    date: new Date(),
    time: "",
    location: "",
    description: "",
    availableSeats: 0,
    isFree: false,
    ticketTypes: "",
    organizerId: 0,
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <label className="block mb-4">
        <span className="text-gray-700">Event Name:</span>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Price:</span>
        <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Date:</span>
        <input type="date" name="date" value={formData.date.toISOString().split("T")[0]} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Time:</span>
        <input type="time" name="time" value={formData.time} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Location:</span>
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Description:</span>
        <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Available Seats:</span>
        <input type="number" name="availableSeats" value={formData.availableSeats} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Is Free:</span>
        <input type="checkbox" name="isFree" checked={formData.isFree} onChange={handleChange} className="mt-1 p-2 border rounded" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Ticket Types:</span>
        <input type="text" name="ticketTypes" value={formData.ticketTypes} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Organizer ID:</span>
        <input type="number" name="organizerId" value={formData.organizerId} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Category:</span>
        <input type="text" name="category" value={formData.category} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
      </label>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Event
      </button>
    </form>
  );
};

export default CreateEventForm;
