import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "PCB Tasarım İletişim Sayfası",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="İletişim"
        description="Sizlere destek olmaktan mutluluk duyarız. Bizimle iletişime geçmek için aşağıda yer alan formu doldurabilirsiniz."
      />

      <Contact />
      <div className="hidden w-full justify-center pb-8 sm:flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1632306605006!2d29.501105576620674!3d40.780425471383374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb219fb27ddacf%3A0x5e5dbea1b92cca7f!2sBili%C5%9Fim%20Vadisi!5e0!3m2!1str!2str!4v1704621079756!5m2!1str!2str"
          width="73%"
          height="450"
          style={{ border: "border:0;" }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
