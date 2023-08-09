import  { useState} from "react";
import { Link } from "react-router-dom";

export function MenuHeader() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemMouseEnter = (item) => {
    setSelectedItem(item);
  };


  return (
    <header className="flex px-10 fixed top-0 w-full text-black">
      <div className="flex flex-grow text-base basis-0">
        <svg  className="w-28 h-14  tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"  fill="currentColor"  ></path>  </svg>
      </div>

      <nav className="hidden lg:flex flex flex-col font-['Gotham Light'] text-[15px] font-semibold gap-4px w-full justify-center">
        <ul class="flex  [&>li>a]:mx-4 my-4  [&>li>a]:inline-block [&>li>a]:p-1 [&>li>]:relative pt-[4px] justify-center">
          <li className="hover:bg-gray-300 hover:bg-opacity-30 hover:shadow-xs hover:backdrop-blur-xs transition-all duration-300 ease-in-out rounded">
             <a href='./' onMouseEnter={() => handleItemMouseEnter("Vehículo")}>
              Vehículos
            </a>
          </li>

          <li className="hover:bg-gray-300 hover:bg-opacity-30 hover:shadow-md hover:backdrop-blur-xs transition-all duration-300 ease-in-out rounded">
            <a href='./' onMouseEnter={() => handleItemMouseEnter("Energía")}>
              Energía
            </a>
          </li>

          <li className="hover:bg-gray-300 hover:bg-opacity-30 hover:shadow-md hover:backdrop-blur-xs transition-all duration-300 ease-in-out rounded"  >
            <a href='./' onMouseEnter={() => handleItemMouseEnter("Carga")}>
              Carga
            </a>
          </li>


          <li className="hover:bg-gray-300 hover:bg-opacity-30 hover:shadow-md hover:backdrop-blur-xs transition-all duration-300 ease-in-out rounded" >
            <a href='./' onMouseEnter={() => handleItemMouseEnter("Descubrir")}>
              Descubrir
            </a>
          </li>

          <li className="hover:bg-gray-300 hover:bg-opacity-30 hover:shadow-md hover:backdrop-blur-xs transition-all duration-300 ease-in-out rounded" >
            <a href='./' onMouseEnter={() => handleItemMouseEnter("Tienda")}>
              Tienda
            </a>
          </li>
        </ul>

      

        {selectedItem && (
          <div className="modal mr-12 g-8 flex text-center justify-center">
             
            {selectedItem === "Vehículo" && (
             <article className="flex pt-[5rem] gap-8 ">

                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__fadeIn">
                <Link to='./'> <img  className="w-[230px] " src="../../../assets/fotos/MegaModel-3.webp"alt="img" ></img></Link>
                    <h6 className="">Model 3</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2 ">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Pedir</p></Link>
                    </footer>
                </section>
                    
                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                <Link to='./'> <img  className="w-[230px] " src="../../../assets/fotos/MegaModel-S.webp"alt="img" ></img></Link>
                    <h6 className="">Model S</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Pedir</p></Link>
                    </footer>
                </section>

                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                <Link to='./'> <img  className="w-[230px] " src="../../../assets/fotos/MegaModel-X.webp"alt="img" ></img></Link>
                    <h6 className="">Model X</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Pedir</p></Link>
                    </footer>
                </section>
                    
                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                <Link to='./'> <img  className="w-[230px] " src="../../../assets/fotos/Model-Y.webp"alt="img" ></img></Link>
                    <h6 className="">Model Y</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Pedir</p></Link>
                    </footer>
                </section>

                <div className="vertica-line w-[1px]  bg-gray-200 " ></div>

                <ul class="flex flex-col mr-12 list-none p-0">
                  <li class="mb-2"><a href="./" class="hover:underline underline-offset-4">Cybertruck</a></li>
                  <li class="mb-2"><a href="./" class="hover:underline underline-offset-4">Roadster</a></li>
                  <li class="mb-2"><a href="./" class="hover:underline underline-offset-4">Inventario</a></li>
                  <li class="mb-2"><a href="./" class="hover:underline underline-offset-4">Coche de empresa</a></li>
                  <li class="mb-2"><a href="./" class="hover:underline underline-offset-4">Prueba conducción</a></li>
                  <li class="mb-2"><a href="./" class="hover:underline underline-offset-4">Tasación</a> </li>
              </ul>

            </article>
              
            )}

                



            {selectedItem === "Energía" && (
              <article className="flex pt-[5rem] gap-8 ">
                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__fadeIn">
                    <img  className="w-[230px] " src="../../../assets/fotos/EnergyGlobal.webp"alt="img" ></img>
                    <h6 className="">Powerwall</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2 ">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                    </footer>
                </section>
                    
                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                    <img  className="w-[230px] " src="../../../assets/fotos/Megapack.webp"alt="img" ></img>
                    <h6 className="">Megapack</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                    </footer>
                </section>

                <div className="vertica-line w-[1px]  bg-gray-200 " ></div>
                
                <ul className="flex flex-col  mr-12 [&>p]:mb-2 gap-3 ml-8"> 
                  <li className="hover:underline underline-offset-4"><a href="./">Utilities</a></li> 
                  <li className="hover:underline underline-offset-4"><a href="./">Comercial</a></li>
                </ul>
            </article>
            )}



            {selectedItem === "Carga" && (
              <article className="flex pt-[5rem] gap-8 ">
                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                    <img  className="w-[230px] " src="../../../assets/fotos/Home-Charging-Global.webp"alt="img" ></img>
                    <h6 className="">Carga en casa</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                    </footer>
                </section>



                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                    <img  className="w-[230px] " src="../../../assets/fotos/Charging-Global.webp"alt="img" ></img>
                    <h6 className="">Carga</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                    </footer>
                </section>


                <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                    <img  className="w-[230px] " src="../../../assets/fotos/Charging-Supercharging.webp"alt="img" ></img>
                    <h6 className="">Supercarga</h6>
                    <footer className="flex justify-center text-center font-light gap-2 text-[14px] underline underline-offset-2 ">
                      <Link to='./'><p className="underline hover:text-black underline hover:decoration-2">Saber más</p></Link>
                    </footer>
                </section>

                <div className="vertica-line w-[1px]  bg-gray-200 " ></div>
                
                <ul className="flex flex-col text-left mr-12 gap-3 ml-8"> 
                   <li className="hover:underline underline-offset-4"><a href='./'>Planificador de ruta</a></li>
                   <li className="hover:underline underline-offset-4"><a href='./'>Votación de Supercargador</a></li>
                   <li className="hover:underline underline-offset-4"><a href='./'>Carga en Destino</a></li>
                   <li className="hover:underline underline-offset-4"><a href='./'>Conviértase en anfitrión de la instalación</a></li>
                  </ul>
              </article>
        

       

            )}
            {selectedItem === "Descubrir" && (
            <article className="pt-[6rem] flex space-x-32">
                <nav className="gap-4">
                  <h1 className="text-left font-light">Recurso</h1>
                  <ul class="flex flex-col gap-2 text-left pt-6">
                      <li className="text-left hover:underline underline-offset-4 decoration-2"><a href='./'>Prueba de conducción</a></li>
                      <li className="text-left hover:underline underline-offset-4 decoration-2"><a href='./'>Historias de clientes</a></li>
                      <li className="text-left hover:underline underline-offset-4 decoration-2"><a href='./'>Eventos</a></li>
                  </ul>
                </nav>
                    
                <nav className="gap-4">
                  <h1 className="text-left font-light">Servicios de ubicación</h1>
                  <ul class="flex flex-col gap-2 text-left pt-6">
                      <li className="hover:underline underline-offset-4 decoration-2"><a href='./'>Dónde estamos</a></li>
                      <li className="hover:underline underline-offset-4 decoration-2"><a href='./'>Planificador de ruta</a></li>
                      <li className="hover:underline underline-offset-4 decoration-2"><a href='./'>Encuentre un instalador certificado</a></li>
                  </ul>
                </nav>

                <nav className="gap-4">
                  <h1 className="text-left font-light">Persona Jurídica</h1>
                  <ul class="flex flex-col gap-2 text-left pt-6">
                      <li className="text-left hover:underline underline-offset-4 decoration-2"><a href='./'>Acerca de</a></li>
                      <li className="text-left hover:underline underline-offset-4 decoration-2"><a href='./'>Empleo</a></li>
                      <li className="text-left hover:underline underline-offset-4 decoration-2"><a href='./'>Relaciones con los inversores</a></li>
                  </ul>
                </nav>

              </article>
            )}


            {selectedItem === "Tienda" && (
           <article className="flex pt-[5rem] gap-8 ">

              <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__fadeIn">
                  <img  className="w-[230px] " src="../../../assets/fotos/Home-Charging-Global.webp"alt="img" ></img>
                  <Link to='./'><h6 className=" hover:underline underline-offset-4 decoration-2">Carga</h6></Link> 
              </section>


              <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                  <img  className="w-[230px] " src="../../../assets/fotos/Accessories.webp"alt="img" ></img>
                  <Link to='./'><h6 className="hover:underline underline-offset-4 decoration-2">Accesorios para el vehículo</h6></Link> 
              </section>


              <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                  <img  className="w-[230px] " src="../../../assets/fotos/Apparel.webp"alt="img" ></img>
                  <Link to='./'><h6 className=" hover:underline underline-offset-4 decoration-2">Ropa</h6></Link> 
              </section>
              
              <section className="[&>section>img>p]:flex flex-col [&>section>img]:pt-[5rem] animate__animated animate__fadeIn">
                  <img  className="w-[230px] " src="../../../assets/fotos/Lifestyle.png"alt="img" ></img>
                <Link to='./'><h6 className="hover:underline underline-offset-4 decoration-2">Estilo de vida</h6></Link> 
              </section>
              
           </article>

            )}
          </div>
        )}
      </nav>


      <nav className="hidden lg:flex flex flex-grow justify-end basis-0 ">
        <ul className=" flex text-sm [&>li]:inline-block  [&>li]:px-2 [&>li]:py-4">
        <Link to='./'>
        <li className="px-2 py-2 hover:transform hover:scale-110 transitions all ease-in-out  duration-300">
             <svg className=" w-6 "viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" >
                 <path fill="currentColor" d="M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm.053-3.533a7.8 7.8 0 0 1 .92-.767 6.97 6.97 0 0 0 .746-.61 2.31 2.31 0 0 0 .468-.635c.126-.253.188-.548.188-.883 0-.374-.082-.723-.246-1.048-.158-.324-.415-.588-.771-.792-.356-.203-.81-.305-1.362-.305-.575 0-1.045.116-1.411.347a1.991 1.991 0 0 0-.788.89c-.06.134-.11.272-.148.413-.111.414-.445.767-.874.767-.428 0-.784-.35-.71-.772.07-.407.2-.79.386-1.15.301-.583.758-1.048 1.37-1.394C10.435 6.176 11.185 6 12.07 6c.93 0 1.687.181 2.273.544.59.358 1.014.803 1.271 1.337.257.533.386 1.07.386 1.608 0 .545-.085 1.012-.254 1.403-.17.385-.375.698-.616.94-.235.242-.55.514-.943.817-.312.247-.561.46-.747.635-.18.176-.33.385-.451.627-.05.099-.087.2-.113.302-.108.424-.422.787-.86.787-.437 0-.806-.356-.76-.79a2.948 2.948 0 0 1 .797-1.743Z"></path>
             </svg>
          </li> 
        </Link>

        <Link to='./'>
        <li className="px-2 py-2 hover:transform hover:scale-110 transitions all ease-in-out  duration-300">
            <svg className="tds-icon tds-icon-globe w-6  tds-icon tds-icon-globe" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg" >
              <path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"></path>
            </svg>
          </li>
       </Link>

       <Link to='./'>
       <li className="px-2 py-2 hover:transform hover:scale-110 transitions all ease-in-out  duration-300">
            <svg className=" w-6" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  >
               <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24 2.42 0 4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748zm11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.456 8.456 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5a8.456 8.456 0 0 1-2.173 5.657zM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
            </svg>
          </li>
      </Link>
        </ul>
      </nav>

    </header>
  );
}
