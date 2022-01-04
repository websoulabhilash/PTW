import React from 'react'
import './Fivegame.css';
import Grid from '@mui/material/Grid';
import fiveg1 from '../../../assets/images/fivegame-img1.png';
import fiveg2 from '../../../assets/images/fivegame-img2.png';

export const Fivegame = () => {
    return (
        <>
        <div className='fivegame-main'>
          <Grid container  justifyContent='center'>
              <div className='liveOpsText'>
                  <p data-aos="slide-up" className='liveOpsText-head' aos-init aos-animate><b>LIVE OPS</b></p>
                  <p data-aos="slide-up"className='liveOpsText-sub' aos-init aos-animate>
                 We look at existing systems, discover lost opportunities, and implement changes to refresh and re-engage players with your game.
                </p>
                <p data-aos="slide-up"className='liveOpsText-sub' aos-init aos-animate>We don't just look at extending the life of your game; we help it grow. We zealously find, anticipate, and eliminate player frustration as fast and efficiently as possible. </p>
               <p data-aos="slide-up" className='liveOpsText-sub' aos-init aos-animate>
               Analytics<span class="spacer"></span>| <span class="spacer"></span>Events<span class="spacer"></span>| <span class="spacer"></span>Promotions<span class="spacer"></span>| <span class="spacer"></span> Content <span class="spacer"></span>|  <span class="spacer"></span>Features <span class="spacer"></span>| <span class="spacer"></span>Problem Management
               </p>
               <p data-aos="slide-up" className='liveOpsText-sub'aos-init aos-animate>80% of the work begins after you launch your game, and it’s not always feasible to handle all of that internally. Our Live Ops teams have the know-how, and they’re ready to help.</p>
              </div>
              <div data-aos="zoom-in" className='liveOpsText-image1' aos-init aos-animate>
              <img src={fiveg1} className='liveOpsText-img1'></img>
              </div>
             
              </Grid>  
              <Grid container justifyContent='center'>
                  <div className='portText'>
                      <p data-aos="slide-up"className='portText-head' aos-init aos-animate>PORTING</p>
                      <p data-aos="slide-up" className='portText-sub' aos-init aos-animate>As products evolve and preferences change, our experts can revamp your game for new platforms and new generations of gamers. While porting is a fantastic way to access new markets and re-engage players, porting requires an expertise that developers and publishers may not have in-house.</p>
                  </div>
                  <div className='portText-image2'>
                      <img src={fiveg2} data-aos="zoom-in" className='portText-img2' aos-init aos-animate></img>
                      
                </div>
              </Grid>
            
        </div>
        </>
    )
}

export default Fivegame;