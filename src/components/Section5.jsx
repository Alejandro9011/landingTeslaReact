import  { useRef, useEffect } from 'react';

export  function Section5() {
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
      
            document.body.classList.add('section5-visible');
          } else {
          
            document.body.classList.remove('section5-visible');
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
      <img className="w-full object-center object-cover h-screen" src="../../../assets/fotos/House_SolarPanel.webp" alt="img" />
    </div>

    <div className=" z-30 relative text-black h-full flex flex-col pt-[8em]">
      <header>
        <h2 className="flex justify-center text-center text-[42px]  font-semibold"> Solar y Powerwall</h2>
        <p className=" flex justify-center py-2"> Energía para todos</p>
      </header>

      <footer className=" flex  pt-[35em] flex-grow justify-center  text-center items-center gap-4 ">
        <button className="  flex  text-center items-center justify-center  w-[16rem] bg-neutral-900 border-1  text-white font-semibold py-2 px-12  rounded hover:bg-white  hover:text-black font-semibold transition duration-300"> Saber más </button>
      </footer>
    </div>

  </section>



  )
}