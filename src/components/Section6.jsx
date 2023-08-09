import  { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export function Section6() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          
          document.body.classList.add("section6-visible");

          
          const button = sectionRef.current.querySelector("button");
          if (button) {
            button.classList.add("animated");
          }
        } else {
     
          document.body.classList.remove("section6-visible");
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col justify-center relative bg-black h-screen w-full opacity-100 section2" >
      <div className="h-full w-full absolute">
        <img className="w-full object-center object-cover h-screen" src="../../../assets/fotos/Charger.webp"   alt="img"  />
      </div>

      <div className="h-screen w-full absolute top-0 z-20 bg-black bg-opacity-5"></div>

      <div className="z-30 relative text-black h-full flex flex-col pt-[8em]">
        <header>
          <h2 className="flex justify-center text-[42px] font-semibold">Accesorios</h2>
        </header>

        <footer className="flex pt-[40em]">
          <div className="flex flex-col flex-grow justify-center items-center gap-[50px]">
            <button className=" w-[16rem] bg-white border-1 text-black font-semibold py-2 px-12 rounded hover:bg-black hover:text-white font-semibold transition duration-300"> Comprar ahora </button>
            <ul className="flex gap-4 text-[14px] text-slate-200 font-semibold">
              <li><Link to='./'>Tesla©2023</Link></li>
              <li><Link to='./'>Privacidad y legal</Link></li>
              <li><Link to='./'>Contacto</Link></li>
              <li><Link to='./'>Noticias</Link></li>
              <li> <Link>Seguir informado</Link></li>
              <li><Link to='./'>Localizacion de tiendas</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
