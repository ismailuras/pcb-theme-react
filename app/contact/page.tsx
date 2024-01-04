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
    </>
  );
};

export default ContactPage;
