import React , {useEffect }from 'react'
import './Secondgame.css';
import img1 from '../../../assets/images/unity.png';
import img2 from '../../../assets/images/unreal.png';
import img3 from '../../../assets/images/gamemakerstudio.png';
import img4 from '../../../assets/images/html5.png';
import Grid from '@mui/material/Grid';
import Aos from "aos";
import "aos/dist/aos.css";

export const Secondgame = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <>
        <div className='techSection'>
            <Grid container justifyContent="center">
            <div className='platformHead'>
                    <p data-aos="slide-up" data-aos-duration='2000' className='head ' aos-init aos-animate><b>TECHNOLOGIES</b></p>

                </div>

            </Grid>
            <Grid container justifyContent="center" mt={2}>
                
                <div className='Alltechs'>
                    <img src={img1} data-aos="flip-right" className='tech1 ' alt='tech1' height={50} width={130}  aos-init aos-animate ></img>
                    <img src={img2}  data-aos="flip-right"className='tech2' alt='tech2' aos-init aos-animate></img>
                </div>
                <Grid items>
                    <div className='Alltechs'>
                        <img src={img3}  data-aos="flip-right" className='tech3' alt='tech3'aos-init aos-animate></img>
                        <img src={img4}  data-aos="flip-right" className='tech4' alt='tech4' aos-init aos-animate></img>
                    </div>



                </Grid>
                <Grid items>

                </Grid>
            </Grid>
        </div>
            
        </>
    )
}

export default Secondgame;