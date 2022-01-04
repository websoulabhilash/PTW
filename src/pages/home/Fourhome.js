import React from 'react'
import './Fourhome.css';
import Grid from '@mui/material/Grid';
import bor from '../../assets/images/frame.svg'

import c1 from '../../assets/images/g1.jpg';
import c2 from '../../assets/images/g2.jpg';
import c3 from '../../assets/images/g3.jpg';



export const Fourhome = (props) => {
    return (
        <>

<div className='sevengame-mainkk'>
            <Grid Container>
                <div data-aos="slide-up" className='sevengame-headkk' aos-init aos-animate>
                    <h1><b>HELPFUL LINKS</b></h1>
                </div>
            </Grid>
            <Grid container spacing={2} >
                <Grid item>
                    <div data-aos="zoom-in" className='seven-img1kk' aos-init aos-animate>
                        <img src={c1} className='sev-imgkk'></img>
                        <span className='sev-textkk'><b>{props.text11} <br></br>{props.text12}</b></span>
                        

                    </div>
                    <div data-aos="zoom-in" className='squarekk'>
                           <img src={bor} className='squkk'></img>
                        </div>

                </Grid>
                <Grid item>
                <div data-aos="zoom-in" className='seven-img2kk' aos-init aos-animate>
                <img src={c2} className='sev-imgkk'></img>
                <span  className='sev-textkk'><b>{props.text21}<br></br>{props.text22}</b></span>
                        </div>
                        <div className='squarekk' aos-init aos-animate>
                           <img data-aos="zoom-in" src={bor} className='squkk'></img>
                        </div>
                    
                </Grid>
                <Grid item>
                <div data-aos="zoom-in" className='seven-img3kk' aos-init aos-animate>
                <img src={c3} className='sev-imgkk'></img>
                <span  className='sev-textkk'><b>{props.text31}<br></br>{props.text32}</b></span>
               
                        
                        </div>
                <div data-aos="zoom-in" className='squarekk' aos-init aos-animate>
                           <img src={bor}className='squkk'></img>
                        </div> 
                </Grid>
            </Grid>

        </div>
        <div className="seven-buttonkk">
            <a href='#' data-aos="fade-right" className='read-buttonkk' aos-init aos-animate>READ MORE <i class="fa fa-angle-double-right" style={{fontSize:"20px",color:"#FF0A04"}}></i> </a>
        </div>
        <div data-aos="fade-right" className='square1kk' aos-init aos-animate>
                           <img src={bor}className='squ1kk'></img>
                        </div> 
        <div className='sevengame-mobilemainkk'>
            <Grid container justifyContent='center'>
            <div className='sevengame-headkk'>
                    <h1><b>HELPFUL LINKS</b></h1>
                </div>

            </Grid>
            <Grid container >
            <div className='mobile-subkk'>
            
            <div className='mobile-sub-s1kk'>
            <div className='mobile-sub-headkk'>
            <img src={c1} className='sev-mob-img1kk'></img>
            <p className='sev-mobile-textkk'><b>{props.text11} <br></br>{props.text12} </b></p>
            </div>
            <div className='mobile-squarekk'>
                           <img src={bor} className='mobile-squkk'></img>
                        </div>
            </div>
            <div className='mobile-sub-s1kk'>
            <div className='mobile-sub-headkk'>
            <img src={c3} className='sev-mob-img1kk'></img>
            <p className='sev-mobile-textkk'><b>{props.text21}<br></br>{props.text22}</b></p>
            </div>
            <div className='mobile-squarekk'>
                           <img src={bor} className='mobile-squkk'></img>
                        </div>
            </div>
            <div className='mobile-sub-s1kk'>
            <div className='mobile-sub-headkk'>
            <img src={c2} className='sev-mob-img1kk'></img>
            <p className='sev-mobile-textkk'><b>{props.text31}<br></br>{props.text32}</b></p>
            </div>
            <div className='mobile-squarekk'>
                           <img src={bor} className='mobile-squkk'></img>
                        </div>
            </div>
           

        
        

           
            </div>
            </Grid>


        </div>
        <div className="seven-mobile-buttonkk">
            <a href='#' className='read-mobile-buttonkk' >READ MORE <i class="fa fa-angle-double-right" style={{fontSize:"20px",color:"#FF0A04"}}></i> </a>
        </div>
        <div className='mobile-square1kk'>
        <img src={bor}className='mobile-squkk1'></img>
        </div> 
            
        </>
            
        
    )
}

export default Fourhome;