
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas." subheadline="Digitaliza tu negocio rápidamente con soporte 24/7. Somos los únicos que entregamos una web de ventas en un día en Santiago." cta1="Comienza Ahora" />
<How step1Title="Rápida Evaluación" step1Desc="Revisión de tu negocio en minutos." step2Title="Compromiso Total" step2Desc="Entrega web en menos de 24 horas." step3Title="Innovación Constante" step3Desc="Soporte 24/7 para crecer online." />
<Aboutus headline="WebGo: Digitaliza y Crece Rápido" subheadline="Transformamos ventas con gestión web completa y personalizada." beneficiotitulo1="Venta Rápida" beneficio1="Fácil digitalización de ventas actuales." beneficiotitulo2="Tiempo Libre" beneficio2="Gestionamos tu web, tú creces." />
<Services heading="Digitaliza y Aumenta Tus Ventas" description="Rapidez e innovación para vender online sin esfuerzo." services={[{"name":"Desarrollo Web Rápido","icon":"bolt","description":"Lanzamos tu web en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Optimización","icon":"chart-line","description":"Atrae más tráfico con SEO efectivo."},{"name":"Gestión de Contenidos","icon":"edit","description":"Mantén tu web actualizada sin esfuerzo."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita las ventas con pagos online."},{"name":"Analítica Web","icon":"analytics","description":"Conoce tus clientes con datos precisos."}]} />
<BeforeAndAfter subheadline="Transformamos visiones en realidad con calidad insuperable y resultados comprobados." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas si solo vendo por recomendación?","respuesta":"WebGo transforma tu negocio al crear un sitio web innovador que amplía tu alcance más allá de las recomendaciones. Nos encargamos de todo, desde el diseño hasta la gestión, para que puedas atraer clientes online sin complicaciones."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué ofrece WebGo para ayudarme?","respuesta":"Con WebGo, no tienes que preocuparte por la gestión web. Nuestro servicio completo se encarga de todo, desde el mantenimiento hasta las actualizaciones, permitiéndote concentrarte en lo que mejor sabes hacer: gestionar tu negocio."},{"pregunta":"¿Qué tan rápido puede WebGo implementar mi sitio web?","respuesta":"En WebGo, valoramos la rapidez. Nuestro equipo se compromete a crear y lanzar tu sitio web en un tiempo récord, asegurando que puedas empezar a vender online sin demoras."},{"pregunta":"¿Por qué debería elegir WebGo si nunca he vendido online?","respuesta":"WebGo es ideal para quienes nunca han vendido online. Ofrecemos un enfoque fácil y accesible para que cualquier dueño de negocio pueda ver resultados rápidamente, sin necesidad de conocimientos técnicos."},{"pregunta":"¿Cuánto cuesta el servicio de WebGo y qué incluye?","respuesta":"El servicio de WebGo cuesta 120 y te ofrece un paquete completo de creación y gestión de sitios web. Esto incluye diseño innovador, mantenimiento continuo y soporte dedicado para garantizar el éxito de tus ventas online."}]} />
<BookAppointment 
                      heading="Digitaliza tus Ventas, Aumenta tus Ingresos" 
                      description="Transforma recomendaciones en ventas online con WebGo. Rapidez, compromiso e innovación por solo $120. Contáctanos ahora."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
