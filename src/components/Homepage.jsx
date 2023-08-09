import {Header} from "./Header";
import {Section} from "./Section";
import {Section2} from "./Section2";
import {Section3} from "./Section3";
import {Section4} from "./Section4";
import {Section5} from "./Section5";
import {Section6} from "./Section6";


export function Homepage() {
  return (
    <>     
   <div> 
    
      <main className="snap-y snap-mandatory h-screen w-full overflow-y-auto">
        <div className="snap-start">
          <Section/>
        </div>

        <div className="snap-start">
          <Section2/>
        </div>

        <div className="snap-start">
          <Section3/>
        </div>

        <div className="snap-start">
          <Section4/>
        </div>

        <div className="snap-start">
          <Section5/>
        </div>

        <div className="snap-start">
          <Section6/>
        </div>

      </main>
    </div>
    <Header/>
    </>
    
  );
}
