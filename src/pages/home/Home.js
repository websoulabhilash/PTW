import react,{ useEffect } from 'react';
import './Home.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Firsthome from './Firsthome';
import Secondhome  from './Secondhome';
import Thirdhome  from './Thirdhome';
import  Fourhome  from './Fourhome';
import Sevengame from '../services/game/Sevengame';





function Home() {

    useEffect(() => {
        Aos.init({});
    }, []);
    return(
        <>
         <div className='firsthome'>
             <Firsthome />
         </div>
         <div className='secondhome'>
             <Secondhome />
         </div>
         {/* <div className='fourhome'>
         <Sevengame/>
         </div> */}
         <div className='fourhome'>
         <Fourhome text11="How To Automate " text12="QA Testing" text21="Integrated CX" text22="QA: Driving.." text31="Continuous" text32="LOCALIZATION"/>
         </div>
         <div className='thirdhome'>
             <Thirdhome />
         </div>
         
        </>

)
}
export default Home;