import React from 'react'
import Grid from '@mui/material/Grid';
import p1 from '../../../assets/images/android.png';
import p2 from '../../../assets/images/ios.png';
import p3 from "../../../assets/images/pc.png";
import p4 from '../../../assets/images/cloud.png';
import p5 from "../../../assets/images/ps4.png";
import p6 from "../../../assets/images/ps5.png";
import p7 from "../../../assets/images/p7.png";
import p8 from "../../../assets/images/p8.png";
import p9 from "../../../assets/images/p9.png";
import p10 from "../../../assets/images/p10.png";
import p11 from "../../../assets/images/p11.png";
import p12 from "../../../assets/images/p12.png";


import './Thirdgame.css';

export const Thirdgame = () => {
    return (
    
        <>
    {/* first platform */}
        <div className='platformSection'>
            <Grid container justifyContent='center' mt={4}>
                <div className='platformHead'>
                    <p className='head'><b>PLATFORM</b></p>
                </div>
           
            </Grid>
            <Grid container justifyContent='center' p={4}>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s1'>

                <div>
                <img src={p1} data-aos="flip-right" data-aos-duration='2000' className='plat1' alt='plat1' aos-init aos-animate></img>
                <p><b>Android</b></p>

                </div>
              
                
               
                
                <div>
                <img src={p2} data-aos="flip-right" data-aos-duration='2000' className='plat2' alt='plat2' aos-init aos-animate></img>
                 <p><b>iOS</b></p>

                </div>
                
                 
                 </div>
                </Grid>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s2'>
                    <div>
                    <img src={p3} data-aos="flip-right" data-aos-duration='2000'  className='plat3' alt='plat3'aos-init aos-animate></img>
                    <p><b>PC</b></p>

                    </div>
                    <div>
                    <img src={p4} data-aos="flip-right" data-aos-duration='2000' className='plat4' alt='plat4'aos-init aos-animate></img>
                      <p><b>Cloud</b></p>
                    </div>
                </div>
              
            
                
                 
                 
                
                 
            

                </Grid>
                <Grid item md={4} xs={12} spacing={0} >
                <div className='pmain-s3'>
                    <div>
                    <img src={p5} data-aos="flip-right" data-aos-duration='2000' className='plat5' alt='plat5'aos-init aos-animate></img>
                     <p><b>PS4</b></p>

                    </div>
                    <div>
                    <img src={p6} data-aos="flip-right" data-aos-duration='2000' className='plat6' alt='plat6'aos-init aos-animate></img>
                    <p><b>PS5</b></p>

                    </div>
                </div>
                
               
                
                
              
                
                

                </Grid>
               
                

             </Grid>
        
        </div>

        {/* second plarform  */}
        <div className='platformSection1'>
            <Grid container justifyContent='center' p={4}>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s1'>

                <div>
                <img src={p7}data-aos="flip-right" data-aos-duration='2000' className='plat1' alt='plat1' aos-init aos-animate></img>
                <p><b>Android</b></p>

                </div>
              
                
               
                
                <div>
                <img src={p8}data-aos="flip-right" data-aos-duration='2000' className='plat2' alt='plat2' aos-init aos-animate></img>
                 <p><b>iOS</b></p>

                </div>
                
                 
                 </div>
                </Grid>
                <Grid item md={4} xs={12} spacing={0}>
                <div className='pmain-s2'>
                    <div>
                    <img src={p9} data-aos="flip-right" data-aos-duration='2000'className='plat3' alt='plat3' aos-init aos-animate></img>
                    <p><b>PC</b></p>

                    </div>
                    <div>
                    <img src={p10} data-aos="flip-right" data-aos-duration='2000'className='plat4' alt='plat4'aos-init aos-animate></img>
                      <p><b>Cloud</b></p>
                    </div>
                </div>
              
            
                
                 
                 
                
                 
            

                </Grid>
                <Grid item md={4} xs={12} spacing={0} >
                <div className='pmain-s3'>
                    <div>
                    <img src={p11} className='plat5' alt='plat5'aos-init aos-animate></img>
                     <p><b>PS4</b></p>

                    </div>
                    <div>
                    <img src={p12} className='plat6' alt='plat6'aos-init aos-animate></img>
                    <p><b>PS5</b></p>

                    </div>
                </div>
                
               
                
                
              
                
                

                </Grid>
               
                

             </Grid>
        
        </div>
            
        </>
    )
}

export default Thirdgame;