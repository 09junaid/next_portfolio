"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { contact } from "@/constants/resumeData";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    emailjs.init("wvWMGvOV84jHO3Ohh");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID; 
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID; 
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    // Prepare template parameters - make sure these match your EmailJS template variables
    const templateParams = {
      from_name: `${formData.firstname} ${formData.lastname}`,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
    };

    console.log("Sending template params:", templateParams); // Debug log

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          // Success toast
          toast.success("Message sent successfully! I'll get back to you soon.", {
            duration: 5000,
            position: "top-center",
            style: {
              background: "#00ff99",
              color: "#1c1c22",
              fontWeight: "600",
              borderRadius: "12px",
              padding: "16px 20px",
            },
            iconTheme: {
              primary: "#1c1c22",
              secondary: "#00ff99",
            },
          });
          
          // Reset form
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          toast.error(`Failed to send message`, {
            duration: 6000,
            position: "top-center",
            style: {
              background: "#ef4444",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "12px",
              padding: "16px 20px",
              textWrap: "wrap",
            },
            iconTheme: {
              primary: "#ffffff",
              secondary: "#ef4444",
            },
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Toaster />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
        }}
        className="section-padding"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* Contact Form */}
            <div className="w-full lg:w-[55%] order-2 lg:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 bg-[#1e1e24] shadow-lg border border-gray-800 rounded-2xl relative"
              >
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
                    Let's work together
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base">
                    Have a project in mind? Fill the form and I'll get back to you
                    as soon as possible.
                  </p>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Firstname"
                    required
                    disabled={isSubmitting}
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                  <Input
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Lastname"
                    required
                    disabled={isSubmitting}
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    disabled={isSubmitting}
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    disabled={isSubmitting}
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Service Selection */}
                <Select onValueChange={handleSelect} disabled={isSubmitting}>
                  <SelectTrigger className="w-full h-10 sm:h-12 text-sm sm:text-base">
                    <SelectValue
                      placeholder={formData.service || "Select a service"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                      <SelectItem value="Backend Development">
                        Backend Development
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* Message Textarea */}
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[120px] sm:h-[150px] md:h-[180px] text-sm sm:text-base resize-none"
                  placeholder="Type your message here."
                  required
                  disabled={isSubmitting}
                />

                {/* Submit Button */}
                <div className="flex justify-start">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-accent to-accent/80 text-white 
               hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed 
               shadow-lg flex items-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <span>Send</span>
                        <FiSend className="text-base sm:text-lg" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none">
              <ul className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full">
                {contact.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 sm:gap-6 bg-[#1e1e24] border border-gray-800 p-3 sm:p-4 rounded-xl hover:bg-[#27272c] transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-[60px] md:h-[60px] lg:w-[72px] lg:h-[72px] bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl sm:text-2xl md:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/60 text-sm sm:text-base">{item.title}</p>
                      <h3 className="text-base sm:text-lg font-semibold truncate">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
