import Partners from "@/components/Partners";
import Service from "@/components/Service";
import TestimonialSlider from "@/components/TestimonialSlider";
import WorkingProcess from "@/components/WorkingProcess";
import NikolasLayout from "@/layouts/NikolasLayout";
import { pageMetadata } from "@/utility/site";

export const metadata = pageMetadata({
  title: "Skills",
  description:
    "Front end (React), back end (Node.js, NestJS), mobile (React Native) and DevOps (AWS, Kubernetes, Terraform, GitHub Actions) skills of Atreya Rao.",
  path: "/skills",
});
const page = () => {
  return (
    <NikolasLayout>
      <h1 className="sr_only">Skills: Front End, Back End, Mobile and DevOps</h1>
      {" "}
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="underline">Specialized </span>
              <span className="stroke_text">in website </span>and{" "}
              <span className="stroke_text">design </span>
              <span className="underline">system</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* Service */}
      <Service sectionNumber="" />
      {/* /Service */}
      {/* Testimonials */}
      {/* <TestimonialSlider sectionNumber="" /> */}
      {/* /Testimonials */}
      {/* Partners */}
      {/* <Partners sectionNumber="" /> */}
      {/* /Partners */}
      {/* Process */}
      <WorkingProcess />
      {/* /Process */}
    </NikolasLayout>
  );
};
export default page;
