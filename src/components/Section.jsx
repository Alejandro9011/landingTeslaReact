import video from "./../Video/video.webm";
import 'animate.css';

export  function Section() {
  return (
   <section className="flex flex-col justify-center relative  h-screen w-full overflow-y-auto opacity-100">

    <div className="h-screen w-full absolute top-0 z-10">
      <video
        className="w-full h-screen object-cover "
        src={video }
        autoPlay
        muted
        loop
      ></video>
    </div>

    <div className="h-screen w-full absolute top-0 z-20 bg-black bg-opacity-30"></div>

    <div className="z-30 relative text-white h-full flex flex-col pt-[8em]">
      <header>

        <h2 class="flex justify-center text-[42px] font-semibold animated fadeInUp"> Disfrute de Tesla </h2>
        <p className="text-center  animated animated slideInUp delay"> Programe una prueba de conducción hoy mismo  </p>
      </header>

      <footer className="flex flex-col pb-24 flex-grow justify-end items-center">
        <button className=" bg-transparent border-2 border-white backdrop-blur-3xl text-white font-semibold py-1.5 w-60 rounded-sm hover:bg-white hover:text-black font-semibold transition duration-300">
          Prueba de conducción
        </button>
      </footer>
    </div>

</section>

  )
}
