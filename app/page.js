"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import JsonLd from "@/components/JsonLd";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";
import { absoluteUrl } from "@/utility/site";

// Marks the home page as Atreya's profile so Google ties name and hiring searches to the Person entity.
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: absoluteUrl("/"),
  mainEntity: { "@id": absoluteUrl("/#person") },
};

const page = () => {
  return (
    <NikolasLayout>
      <JsonLd data={profilePageJsonLd} />
      {/* Hero */}
      <Hero />
      {/* /Hero */}
      {/* About */}
      <About />
      {/* /About */}
      {/* Service */}
      <Service />
      {/* /Service */}
      {/* Portfolio */}
      <Portfolio />
      {/* /Portfolio */}
      {/* Testimonials */}
      {/* <TestimonialSlider /> */}
      {/* /Testimonials */}
      {/* Partners */}
      {/* <Partners /> */}
      {/* /Partners */}
      {/* Pricing */}
      {/* <Pricing /> */}
      {/* /Pricing */}
      {/* Blog */}
      <Blog />
      {/* /Blog */}
    </NikolasLayout>
  );
};
export default page;
