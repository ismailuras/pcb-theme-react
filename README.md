# PCB Tasarımı Landing Page

Proje Next.js, Tailwindcss ve Typescript ile oluşturulmuştur. Bağımlılıkları yüklemek ve projeyi lokalde çalıştırmak için;

pnpm install
pnpm run dev

### ✨ Deploy

Site deploy aşamasında Static Deploy kullanılmıştır. Daha fazla bilgi için;

https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

### !!

Projeyi lokalde çalıştırdığınız zaman hata almamak için next.config.js dosyasındaki "output:export" satırını silmeniz gerekebilir.
Bu satır Next.js projesini statik html/css/js halinde derlemek için kullanılmıştır.

Yine next.config.js dosyasında yer alan "trailingSlash: true" satırı ile ilgili döküman sayfası;
https://nextjs.org/docs/pages/api-reference/next-config-js/exportPathMap#adding-a-trailing-slash
