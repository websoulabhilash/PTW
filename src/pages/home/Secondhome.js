import React from 'react'
import Grid from '@mui/material/Grid';
import './Secondhome.css';
import sh from '../../assets/images/kickstartimage.png';

export const Secondhome = () => {
    return (
        <>
         <div className='secondhome-main'>
             <Grid container>
                 <Grid item md={6}>
                     <div data-aos="slide-up" className='secondhome-sub1 ' aos-init aos-animate>
                         <img src={sh} className='secondhome-sub1-image'></img>

                     </div>
                 </Grid>
                 <Grid item md={6}>
                     <div className='secondhome-sub2' >
                         <div>
                            <strong><p data-aos-duration='2000' data-aos="slide-up" className='shs1' aos-init aos-animate>JOIN 650+ DEVELOPERS AND PUBLISHERS THAT WORK WITH PTW</p></strong> 
                             

                         </div>
                         <div >
                         <p data-aos="slide-up" data-aos-duration='2000' className='shs2'aos-init aos-animate>We've teamed up with some of the best to craft incredible gaming experiences. We work in every genre and on every platform.</p>
                         </div>
                         <div>
                             <div data-aos="slide-up" data-aos-duration='2000'className='secondhome-sub-sub' aos-init aos-animate>
                                 <div>
                                   <p><span><b>35+</b></span><br></br>
                                   Global Studios</p>
                                 </div>
                                 <div>
                                   <p><span><b>8,500+</b></span><br></br>Employee</p>
                                   
                                 </div>
                                 <div>
                                   <p><span><b>26</b></span> <br></br>Years of XP</p>
                                  
                                 </div>
                             </div>
                         </div>
                         <div data-aos-duration='2000' data-aos="slide-up"  aos-init aos-animate>
                             <button className='second-home-button'>LET'S BUILD SOMETHING TOGETHER</button>
                         </div>
                     </div>

                 </Grid>
             </Grid>

          </div>
          <div className='mobile-secondhome'>
              <Grid container>
                  <div className='mobile-secondhome-sub1'>
                    <strong><p className='mobile-shs1'>JOIN 650+ DEVELOPERS AND PUBLISHERS THAT WORK WITH PTW</p></strong> 
                  </div>
                  <div >
                   <p className='mobile-shs2'>We've teamed up with some of the best to craft incredible gaming experiences. We work in every genre and on every platform.</p>
                   </div>
                <Grid item xs={6}>
                <div className='mobile-secondhome-sub1'>
                <img src={sh} className='mobile-secondhome-sub1-image'></img>
                </div>
               

                </Grid>
                <Grid item xs={6}>
                    <div className='mobile-secondhome-sub-sub'>
                        <div>
                        <p><span><b>35+</b></span><br></br>
                                   <b>Global Studios</b></p>
                        </div>
                        <div>
                        <p><span><b>8,500+</b></span><br></br><b>Employee</b></p>
                                   
                        </div>
                        <div>
                        <p><span><b>26</b></span> <br></br><b>Years of XP</b></p>
                                  
                        </div>
                    </div>

                </Grid>

                <div className='mobile-second-btn'>
                <button className='mobile-second-home-button'>LET'S BUILD SOMETHING TOGETHER</button>
                </div>

              </Grid>
          </div>

            
        </>
    )
}

export default Secondhome;