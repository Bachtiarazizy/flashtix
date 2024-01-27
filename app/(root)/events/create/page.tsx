"use client";

import CreateEventForm from "@/components/form/CreateEventForm";
import { CreateEventInput } from "@/types/types";

const YourPage: React.FC = () => {
  const handleSubmit = (formData: CreateEventInput) => {
    console.log("Form submitted with data:", formData);
  };

  return <CreateEventForm onSubmit={handleSubmit} />;
};

export default YourPage;
