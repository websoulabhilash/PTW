import react, { useEffect } from 'react';
import "./Firstgames.css";
import Aos from "aos";
import "aos/dist/aos.css";
import img from "../../../assets/images/productdevelopmentheardericon.png";

function Firstgames() {

    useEffect(() => {
        Aos.init({});
    }, []);


    return (
        <>
        <div className='uk-container-fluid bg-prodDev'>
            <video className="mainBgVideo" autoPlay playsInline muted loop>
                <source src="https://d323sccto6ke4l.cloudfront.net/videos/web/gamedev.mp4" type='video/mp4'></source>
            </video>

        

        <div className="home-text">
            <div className='iconicService'>
                <img style={{ zIndex:"1"}} className='deskImg' src={img} alt='image1'></img>
            

          
         <div data-aos="fade-right" className='servicebg-title' aos-init aos-animate>
             <p className='MainTitleDes'>GAME DEVELOPMENT</p>
             <p className='qa-sub-txt'>
                 <span>ENVISION</span>
                 <span>ENGAGE</span>
                 <span>ENGINEER</span>
             </p>
         </div>
         </div> 
         </div>
         </div>

        </>

    )


}

export default Firstgames;