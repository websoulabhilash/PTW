import React from 'react'
import Grid from '@mui/material/Grid';
import fg from '../../../assets/images/fourgame.png';
import './Fourgame.css';

export const Fourgame = () => {
    return (
        <>
        <div className='fourgame-main'>
            <Grid container>
                <Grid item md={6}>
                    <div className='fourgame-sub1'>
                    <img src={fg} alt='fourgame-img' className='fourgame-img' height={200}></img>
                    </div>
                  

                </Grid>
                <Grid item md={5}>
                <div className='fourgame-sub2'>
                    <p data-aos="slide-up" className="title" aos-init aos-animate><b>Game development</b></p>
                    <div className='fourgame-sub2-main'>
                    <div data-aos="slide-up" className='GameDevText' aos-init aos-animate>
                        <p>Go beyond game development and marketing to connect audiences with immersive worlds and storytelling. Only a gamer can understand the technicalities and complexities of games, and all our developers are gamers first.</p>
                       <p>Our team of expert Unity developers ensure that your game utilizes the latest features, technologies, and standards. We are continually evolving game standards and development technologies. </p>
                        <p>Specializing in all-Native, HTML5, and Hybrid technologies for mobile game development, our focus is on optimization and delivering seamless user experiences.</p>
                        </div>
                    </div>
                    </div>

                </Grid>
            </Grid>


        </div>
            
        </>
    )
}

export default Fourgame;