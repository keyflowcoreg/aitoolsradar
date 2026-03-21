import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the AIToolsRadar team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
        Contact Us
      </h1>
      <p className="text-zinc-400 mb-10">
        Have a question, suggestion, or want to list your AI tool? Send us a message.
      </p>
      <ContactForm />
    </div>
  );
}
