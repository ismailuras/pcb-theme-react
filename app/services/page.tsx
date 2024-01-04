import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "PCB Tasarım Hizmetlerimiz Sayfası",
};

function Services() {
  return (
    <>
      <Breadcrumb
        pageName="Hizmetlerimiz"
        description="Teknolojinin kalbinde, yenilik ve güvenilirlikle öne çıkan bir partner arıyorsanız, doğru yerdesiniz. Biz, PCB tasarımı ve üretimi konusunda öncüyüz ve projelerinizi gerçeğe dönüştürmek için buradayız."
      />
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight dark:text-white">
                  AR-GE
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="mb-5">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      Araştırma & Geliştirme
                    </span>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Hoş geldiniz! PCB (Printed Circuit Board) alanında öncü olan
                    firmamız, sadece bugünü değil, yarını da şekillendirmek için
                    sürekli olarak çaba harcayan bir ARGE ekibiyle gurur duyar.
                    İnovasyon, teknolojinin nabzını tutmamıza ve müşterilerimize
                    sürdürülebilir, ileri teknoloji ürünleri sunmamıza olanak
                    tanır. İşte firmamızın ARGE faaliyetlerinden biraz daha
                    yakından tanıtımı
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] dark:opacity-70">
                      <Image
                        src="/images/services/arge.jpg"
                        alt="PCB Ar-ge Süreci"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Firmamız, PCB endüstrisinin öncü teknolojik gelişmelerini
                    takip etmekle kalmayıp aynı zamanda bu teknolojilere yatırım
                    yaparak sektörde lider konumunu korumaktadır. ARGE
                    bölümümüz, en son teknolojiyi takip ederek, müşterilerimize
                    en modern ve verimli PCB çözümlerini sunmamıza olanak
                    sağlar. Müşteri memnuniyeti odaklı bir anlayışla, ARGE
                    ekibimiz sürekli olarak özelleştirilmiş PCB çözümleri
                    geliştirmektedir. Her bir proje için benzersiz
                    gereksinimlere uygun olarak tasarlanan çözümlerimiz,
                    müşterilerimize en iyi performansı sağlama konusunda
                    yardımcı olur.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Teknolojiye yatırım
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Özelleştirilmiş çözümler
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Çevresel Sürdürülebilirlik
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Endüstri ortaklıkları
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight dark:text-white">
                  PCB Üretim
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="mb-5">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      PCB Üretim Aşamaları
                    </span>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Firma olarak, PCB (Printed Circuit Board) üretimindeki
                    uzmanlığımızı, titizlikle tasarlanmış ve üretilmiş her bir
                    ürünümüzle ortaya koymaktan gurur duyuyoruz. Kalite ve
                    hassasiyetle işlediğimiz PCB üretim sürecimizi sizlere daha
                    yakından tanıtmak isteriz.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] dark:opacity-70">
                      <Image
                        src="/images/services/pcb-manufacture.jpg"
                        alt="PCB Üretim Aşamaları"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Her projemizde başlangıç noktamız, müşteri ihtiyaçlarını
                    anlamak ve en uygun çözümü tasarlamaktır. Deneyimli
                    mühendislerimiz, yaratıcı tasarımları ve güçlü mühendislik
                    becerilerini birleştirerek, müşteri beklentilerini aşan PCB
                    tasarımları oluşturur.
                  </p>
                  <ul className="mb-10 list-inside list-disc space-y-5 text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <b className="dark:text-white">Malzeme Seçimi</b>: Kalite,
                      malzeme seçiminde başlar. PCB üretim sürecimizde, yüksek
                      kaliteli ve dayanıklı malzemeler kullanarak ürünlerimizin
                      performansını artırıyoruz. Her aşamada, endüstri
                      standartlarına uygunluğu ve çevresel sürdürülebilirliği
                      göz önünde bulunduruyoruz.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <b className="dark:text-white">Üretim ve Montaj</b> :
                      Modern üretim tesisimizde, son teknoloji ekipmanlar ve
                      otomasyon sistemleriyle donatılmış bir ortamda PCB üretim
                      sürecine geçiyoruz. Hassas montaj ve lehimleme işlemleri,
                      ürünlerimizin dayanıklılığını ve güvenilirliğini sağlar.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <b className="dark:text-white">Kalite Kontrol</b> : Her
                      aşamada titizlikle uyguladığımız kalite kontrol süreçleri,
                      ürünlerimizin en yüksek standartlara uygunluğunu garanti
                      eder. Her bir PCB, detaylı testlerden geçirilir ve
                      müşteriye gönderilmeden önce kalite onayından geçer.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      <b className="dark:text-white">
                        Hızlı ve Güvenilir Teslimat
                      </b>
                      : Müşteri memnuniyeti odaklı yaklaşımımız, hızlı ve
                      güvenilir teslimatı beraberinde getirir. İhtiyacınıza
                      uygun özel çözümlerimizi zamanında teslim etmek, bizim
                      için bir önceliktir.r.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight dark:text-white">
                  ARGE
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="mb-5">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      Araştırma & Geliştirme
                    </span>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Hoş geldiniz! PCB (Printed Circuit Board) alanında öncü olan
                    firmamız, sadece bugünü değil, yarını da şekillendirmek için
                    sürekli olarak çaba harcayan bir ARGE ekibiyle gurur duyar.
                    İnovasyon, teknolojinin nabzını tutmamıza ve müşterilerimize
                    sürdürülebilir, ileri teknoloji ürünleri sunmamıza olanak
                    tanır. İşte firmamızın ARGE faaliyetlerinden biraz daha
                    yakından tanıtımı
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Firmamız, PCB endüstrisinin öncü teknolojik gelişmelerini
                    takip etmekle kalmayıp aynı zamanda bu teknolojilere yatırım
                    yaparak sektörde lider konumunu korumaktadır. ARGE
                    bölümümüz, en son teknolojiyi takip ederek, müşterilerimize
                    en modern ve verimli PCB çözümlerini sunmamıza olanak
                    sağlar. Müşteri memnuniyeti odaklı bir anlayışla, ARGE
                    ekibimiz sürekli olarak özelleştirilmiş PCB çözümleri
                    geliştirmektedir. Her bir proje için benzersiz
                    gereksinimlere uygun olarak tasarlanan çözümlerimiz,
                    müşterilerimize en iyi performansı sağlama konusunda
                    yardımcı olur.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Teknolojiye yatırım
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Özelleştirilmiş çözümler
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Çevresel Sürdürülebilirlik
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Endüstri ortaklıkları
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Services;
