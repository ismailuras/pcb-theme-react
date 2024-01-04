import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal/Hakkımızda",
  description: "PCB Tasarım Hakkımızda Sayfası",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hakkımızda"
        description="Teknolojinin kalbinde, yenilik ve güvenilirlikle öne çıkan bir partner arıyorsanız, doğru yerdesiniz. Biz, PCB tasarımı ve üretimi konusunda öncüyüz ve projelerinizi gerçeğe dönüştürmek için buradayız."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
