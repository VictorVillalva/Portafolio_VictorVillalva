'use client'
import { lazy, Suspense } from "react";
import Image from "next/image";
import imagenMia from "@/public/ui/assets/images/FotoMiaxD.jpg";
import PocoDeMi from "@/public/ui/assets/images/UnPocoDeMi.png";
import { habilidades, proyectos } from "@/public/data/data";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Particles } from "@/components/magicui/particles";

// Importación de componentes con lazy loading
const Header = lazy(() => import("@/components/Header"));
const ButtonEmail = lazy(() => import("@/components/Button"));
const Carrusel = lazy(() => import("@/components/Carrusel"));
const Avatar = lazy(() => import("@/components/Avatar"));
const CardHabilidades = lazy(() => import("@/components/CardHabilidades"));
const CardProyectos = lazy(() => import("@/components/CardProyectos"));
const LinkIcon = lazy(() => import("@/components/LinkIcon"));
const Instagram = lazy(() => import("@/public/ui/assets/icons/Instagram"));
const Linkedin = lazy(() => import("@/public/ui/assets/icons/Linkedin"));
const X = lazy(() => import("@/public/ui/assets/icons/X"));
const Dock = lazy(() => import("@/components/Dock"));

// Componente de carga para Suspense
const LoadingFallback = () => <div className="animate-pulse bg-neutrals-900 h-8 w-full rounded"></div>;

// Constantes para secciones repetitivas
const SOCIAL_ICON_SIZE = { width: 20, height: 20 };

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <BlurFade delay={0.5} inView>
          <Header />
        </BlurFade>
      </Suspense>
      
      {/* Hero Section */}
      <section className="flex flex-col w-full items-center justify-center px-4 mt-36 mb-20 lg:px-26">
        <div className="flex flex-col items-center justify-center gap-10 md:px-20 xl:px-36">
          <div className="flex flex-col gap-4">
            <TextAnimate 
              animation="fadeIn" 
              by="character" 
              as="h1" 
              className="w-full text-center font-semibold break-text break-all overflow-hidden text-[32px] tracking-tighter leading-none md:text-[78px] xl:text-[90px] lg:tracking-tighter"
            >
              Diseñando experiencias, desarrollando el futuro
            </TextAnimate>
            <TextAnimate 
              animation="fadeIn" 
              by="word" 
              as="p" 
              className="text-neutrals-500 text-center text-xs lg:text-base"
            >
              Soy Victor Villalva, un desarrollador de software especializado en desarrollo front-end y UX/UI design. 
              Mi enfoque es crear experiencias digitales atractivas, intuitivas y eficientes, 
              combinando el poder del código con un diseño centrado en el usuario 🚀.
            </TextAnimate>
          </div>
          
          <Suspense fallback={<LoadingFallback />}>
            <BlurFade delay={0.5} inView>
              <ButtonEmail 
                text="Hagámoslo"
                email="victor.villalva0326@gmail.com" 
                subject="Consulta desde la invitación" 
                body="Hola, quería contactarte respecto a la invitación..."
              />
            </BlurFade>
          </Suspense>
        </div>
      </section>
      
      {/* Carrusel Section */}
      <Suspense fallback={<LoadingFallback />}>
        <BlurFade delay={0.5} inView>
          <Carrusel />
        </BlurFade>
      </Suspense>
      
      {/* About Me Section */}
      <section 
        className="flex flex-col w-full px-4 gap-20 border-b-2 border-neutrals-1000 mt-[220px] lg:flex-row xl:px-20 2xl:px-96 lg:h-[445px]" 
        id="sobre-mi"
      >
        <div className="aboutMe flex flex-col items-center gap-6 w-full lg:items-start">
          <div className="description flex flex-col gap-4">
            <div className="title w-full flex flex-col items-center lg:items-start ">
              <BoxReveal boxColor={"#006BA6"} duration={0.5}>
                <p className="text-primary-Normal font-extrabold text-2xl text-center w-full lg:text-left tracking-tighter">
                  Un poco de mi
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#006BA6"} duration={0.5}>
                <h2 className="text-neutrals-100 font-semibold text-[28px] text-center lg:text-left xl:text-[40px] tracking-tighter">
                  Me gusta desarrollar soluciones para la gente.
                </h2>
              </BoxReveal>
            </div>
            <BoxReveal boxColor={"#006BA6"} duration={0.5}>
              <p className="text-center lg:text-left">
                ¡Hola! Soy Victor Villalva, egresado de la carrera de <span className="font-bold">Ingeniera de Software</span>. 
                Me encanta transformar ideas en interfaces intuitivas, asegurando que cada detalle cuente para mejorar 
                la interacción del usuario. Ya sea diseñando desde cero o optimizando productos existentes, 
                mi enfoque siempre está en la usabilidad, el rendimiento y la estética.
              </p>
            </BoxReveal>
          </div>
          
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="vv flex flex-row gap-4">
              <Suspense fallback={<LoadingFallback />}>
                <Avatar imageUrl={imagenMia} altText="fotoMiaxD"/>
              </Suspense>
              <div className="info flex flex-col justify-between">
                <div className="vv">
                  <p className="font-medium text-xl">Victor Villalva</p>
                  <span className="text-neutrals-800">Ingeniero de Software</span>
                </div>
                <div className="socialMedia flex flex-row gap-3">
                  <Suspense fallback={<LoadingFallback />}>
                    <a className="x cursor-pointer" href="https://x.com/villalva2003">
                      <X svgProps={SOCIAL_ICON_SIZE}/>
                    </a>
                    <a className="linkedin cursor-pointer" href="https://www.linkedin.com/in/victor-villalva/" >
                      <Linkedin svgProps={SOCIAL_ICON_SIZE}/>
                    </a>  
                    <a className="instagram cursor-pointer" href="https://www.instagram.com/zhorxt" >
                      <Instagram svgProps={SOCIAL_ICON_SIZE}/>
                    </a>
                  </Suspense>
                </div>
              </div>
            </div>
          </BoxReveal>
        </div>
        
        <div className="examples flex flex-row justify-center w-full lg:justify-end lg:items-end">
          <BlurFade delay={0.5} inView>
            <Image 
              src={PocoDeMi}
              alt="Example image"
              width={505} 
              height={408}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHX3ejqwAAAABJRU5ErkJggg=="
              priority={false}
            />
          </BlurFade>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        className="flex flex-col justify-center items-center w-full lg:px-26 mt-40 mb-40 gap-20" 
        id="habilidades"
      >
        <BlurFade delay={0.5} inView>
          <div className="text-center">
            <span className="text-[20px] font-semibold text-neutrals-600">¿Para que soy bueno?</span>
            <h2 className="text-[40px] font-semibold">Mis habilidades</h2>
          </div>
        </BlurFade>
        
        <BlurFade delay={0.5} inView>
          <div className="flex flex-wrap justify-center px-4 xl:w-[1200px] gap-4">
            {habilidades.map((habilidad, index) => (
              <Suspense key={index} fallback={<LoadingFallback />}>
                <CardHabilidades
                  title={habilidad.habilidad}
                  text={habilidad.descripcion}
                />
              </Suspense>
            ))}
          </div>
        </BlurFade>
      </section>
      
      {/* Projects Section */}
      <section className="flex flex-col items-center px-4 lg:px-26 mt-40 mb-40 gap-20" id="trabajos">
        <BlurFade delay={0.5} inView>
          <div className="text-center flex flex-col items-center gap-4">
            <div className="max-w-fit rounded-[12px] bg-primary-Normal text-background px-3 py-1 text-sm">
              <span>Mis proyectos</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Checa mis últimos proyectos</h2>
            <p className="tracking-tighter">
              He trabajado en una gran variedad de proyectos, desde sitios web sencillos hasta aplicaciones web complejas. 
              Estos son algunos de mis favoritos.
            </p>
          </div>
        </BlurFade>
        
        <BlurFade delay={0.5} inView>
          <div className="flex flex-wrap justify-center items-center w-full gap-4 lg:w-[1000px]">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="max-w-[400px]">
                <Suspense fallback={<LoadingFallback />}>
                  <CardProyectos
                    title={proyecto.title}
                    date={proyecto.date}
                    description={proyecto.description}
                    imageUrl={proyecto.imageUrl}
                    imageAlt={proyecto.imageAlt}
                    badges={proyecto.badges}
                  />
                </Suspense>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>
      
      {/* Contact Section */}
      <section className="flex flex-col items-center px-4 lg:px-26 mt-40 mb-40 gap-20 text-center" id="contacto">
        <div className="flex flex-col items-center lg:w-[900px] gap-10">
          <BlurFade delay={0.5} inView>
            <h2 className="font-bold lg:text-[92px] text-5xl tracking-tighter leading-none">
              ¡Estoy listo para trabajar juntos! 🚀
            </h2>
          </BlurFade>
          
          <Suspense fallback={<LoadingFallback />}>
            <BlurFade delay={0.5} inView>
              <ButtonEmail 
                text="Hagámoslo"
                email="victor.villalva0326@gmail.com" 
                subject="Contactar"
              />
            </BlurFade>
          </Suspense>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <BlurFade delay={0.5} inView>
            <p className="text-[15px]">¿Donde puedes seguir mi trabajo?</p>
          </BlurFade>
          
          <BlurFade delay={0.5} inView>
            <div className="socialMedia flex flex-row gap-2">
              <Suspense fallback={<LoadingFallback />}>
                <LinkIcon 
                  href="https://www.instagram.com/zhorxt" 
                  icon={<Instagram svgProps={SOCIAL_ICON_SIZE} />} 
                  altText="Instagram" 
                />
                <LinkIcon 
                  href="https://www.linkedin.com/in/victor-villalva/" 
                  icon={<Linkedin svgProps={SOCIAL_ICON_SIZE} />} 
                  altText="LinkedIn" 
                />
              </Suspense>
            </div>
          </BlurFade>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="flex flex-col items-center mb-24">
        <BlurFade delay={0.5} inView>
          <span className="font-black">© 2025 Victor Villalva</span>
        </BlurFade>
      </footer>
      
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0 h-full"
        quantity={100}
        ease={100}
        color="#FFFFFF"
        refresh
      />
      {/* Dock Navigation */}
      <Dock />
    </>
  );
}

