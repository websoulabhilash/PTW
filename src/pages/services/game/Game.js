import react, { useEffect } from 'react';
import './Game.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Firstgames from './Firstgames';
import  Secondgame  from './Secondgame';
import Thirdgame from './Thirdgame';
import Fourgame from './Fourgame';
import Fivegame from './Fivegame';
import Sevengame  from './Sevengame';
import h1 from '../../../assets/images/2.jpg';
import h2 from '../../../assets/images/36.jpg';
import h3 from '../../../assets/images/56.jpg';
function Game() {

    useEffect(() => {
        Aos.init({});
    }, []);
    return(
        <>
        <div className='firstgame'>
        <Firstgames />
        </div>
        <div className='secondgame'>
        <Secondgame />
        </div>
        <div className='thirdgame'>
        <Thirdgame />
        </div>
       <div className='fourgame'>
           <Fourgame />
       </div>
       <div className="fivegame">
           <Fivegame />
       </div>
       <div className="sevengame">
           <Sevengame simg1={h1} simg2={h2} simg3={h3} text11="Revolutionizing" text12="Customer" text21="So, You want to" text22="port your home" text3="Gateway to China"/>
       </div>
       
        </>

)
}
export default Game