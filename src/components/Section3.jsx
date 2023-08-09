import  { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


export  function Section3() {
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
          
            document.body.classList.add('section3-visible');
          } else {
           
            document.body.classList.remove('section3-visible');
          }
        },
        { threshold: 0.50} 
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
  
   <section ref={sectionRef} className="flex flex-col justify-center relative bg-black h-screen w-full opacity-100 section2">
   
      <div className="h-full w-full absolute ">
        <img className="w-full object-center object-cover h-screen"  src="../../../assets/fotos/TeslaRojo.webp"  alt="img" />
      </div>

      <div className=" z-30 relative text-black h-full flex flex-col pt-[8em]">
        <header>
          <Link to='./'>  <h2 className="flex justify-center text-[42px] font-semibold"> Model 3 </h2></Link>
          <Link to='./'>  <p className="text-center underline underline-offset-4 underline underline hover:decoration-2"> Concertar una prueba de conducción</p></Link>
        </header>

        <footer className=" flex flex-col pt-[38em] flex-grow justify-center  items-center gap-4 ">
          <div className='flex flex-row gap-4'>
              <button className="  bg-neutral-700 text-white font-semibold py-1.5 px-12  rounded hover:bg-neutral-400   font-semibold transition duration-300"> Explorar inventario </button>
              <button className=" bg-slate-200   text-neutral-700 font-semibold py-1.5 px-12 rounded hover:bg-black hover:text-white font-semibold transition duration-300"> Pedido personalizado </button>
          </div>
          <Link to='./'>   <p className="pt-4 text-sm underline underline-offset-4 underline hover:decoration-2">Disponible con Move III</p></Link>
        </footer>
      </div>

  </section>

  )
}
