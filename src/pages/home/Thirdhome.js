import React from 'react'
import './Thirdhome.css';
import Grid from '@mui/material/Grid';
import thirdbg from '../../assets/images/bg.png';
import ci from '../../assets/images/careersimage.png';
import map from '../../assets/images/map.svg';

export const Thirdhome = () => {
    return (
        <>
        <div className='Thirdhome-main'>
            <Grid container>
                <Grid item xs={6} md={8}>
                    <div className='third-img'>
                    <img src={thirdbg }></img>
                    </div>
                    <div className='third-main-sub'>
                    <div className='third-sub1'>
                        <p data-aos-duration='2000' data-aos="slide-up" className='ts1'aos-init aos-animate>JOIN OUR</p>
                        <p data-aos-duration='2000' data-aos="slide-up" className='ts2' aos-init aos-animate>SQUAD</p>
                        <p data-aos-duration='2000' data-aos="slide-up" className='ts3'aos-init aos-animate>of master wizards, warriors and <br></br> heros!</p>
                        <p className='mobile-ts3'>of master <br></br>wizards, warriors<br></br> and  heros!</p>
                    </div>
                    <div data-aos="slide-up" data-aos-duration='2000' aos-init aos-animate>
                        <button className='third-button'>CAREERS</button>
                    </div>
                    </div>

                </Grid>
                <Grid item  xs={6} md={4}>
                 <img src={ci} className='ths-img'></img>
                </Grid>
            </Grid>
        </div>
        <div className='thirdhome-main2'>
            <Grid container>
                <Grid item md={4}>
                    <div data-aos="slide-up" className='thirdhome-main2-p' aos-init aos-animate>
                      <p className='camp1'><b>WE ARE THE </b> </p>
                       <p className='camp2'><b>CHAMPIONS</b></p>
                       <p className='camp3'>of the world...</p>
                    </div>
                </Grid>
                <div className='third-map'>
                    <img src={map} className='third-map-image'></img>
                </div>
                <div data-aos="fade-right" className="third-map-button" aos-init aos-animate>
                    <button className="third-map-but">Location</button>
                </div>
            </Grid>
        </div>
            
        </>
    )
}


export default Thirdhome;