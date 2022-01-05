import react from 'react';
import cls from './Lab.module.css';
import './Lab.css'
import video from './LabImages/ptwlab.mp4';
import art from './LabImages/artproduction.png';
import game from './LabImages/productdevelopment.png';
import data1 from './LabImages/datacollection.png';
import quality from './LabImages/qualityassurance.png';
import player from './LabImages/playersupport.png';
import local from './LabImages/localization.png';
import localqa from './LabImages/localizationqa.png';
import voice from './LabImages/voiceproduction.png';
import border from './LabImages/border.svg';
import bord from './LabImages/bord.svg';
import img01 from './LabImages/00.jpg';
import img1 from './LabImages/1.jpg';
import img2 from './LabImages/2.jpg';
import img3 from './LabImages/3.jpg';
import img4 from './LabImages/4.jpg';
import img5 from './LabImages/5.jpg';
import img6 from './LabImages/6.jpg';
import img7 from './LabImages/7.jpg';
import img8 from './LabImages/8.jpg';
import img9 from './LabImages/9.jpg';
import img10 from './LabImages/10.jpg';
import img11 from './LabImages/11.jpg';
import img12 from './LabImages/12.jpg';
import img13 from './LabImages/13.jpg';
import img14 from './LabImages/14.jpg';
import img15 from './LabImages/15.jpg';
import img16 from './LabImages/16.jpg';
import img17 from './LabImages/17.jpg';
import img18 from './LabImages/18.jpg';
import img19 from './LabImages/19.jpg';
import img20 from './LabImages/20.jpg';
import img21 from './LabImages/21.jpg';
import img22 from './LabImages/22.jpg';
import img23 from './LabImages/23.jpg';
import img24 from './LabImages/24.jpg';
import img25 from './LabImages/25.jpg';
import img26 from './LabImages/26.jpg';
import img27 from './LabImages/27.jpg';
import img28 from './LabImages/28.jpg';
import img29 from './LabImages/29.jpg';
import img32 from './LabImages/32.jpg';
import img33 from './LabImages/33.jpg';
import img34 from './LabImages/34.jpg';
import img35 from './LabImages/35.jpg';
import img36 from './LabImages/36.jpg';
import img37 from './LabImages/37.jpg';
import img38 from './LabImages/38.jpg';
import bod from './LabImages/article.png';



function Lab() {


    return(
        <div className={cls.body}>
            <div className='uk-panel'>
            <video src={video} alt="" autoplay="true" loop muted className={cls.video} />
            </div>
            <div>
            <h1 className={cls.he1}>PTW LAB</h1>
            </div>
    <div className= "uk-section uk-grid">
        <div className="uk-width-1-6@m uk-width@s">
        <img src={art} alt="" className={cls.im} />
        <h5 className={cls.imt}>Art Production</h5>
        </div>
        <div className="uk-width-1-6@m uk-width@s">
            <img src={game} alt="" className={cls.im} />
            <h5 className={cls.imt}>Game Development</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={quality} alt="" className={cls.im} />
            <h5 className={cls.imt}>Quality Assurance</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={player} alt="" className={cls.im} />
            <h5 className={cls.imt}>Player Support</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={local} alt="" className={cls.im} />
            <h5 className={cls.imt}>Localization</h5>
            </div>
            <div className="uk-width-1-6@m uk-width@s">
            <img src={localqa} alt="" className={cls.im} />
            <h5 className={cls.imt}>Localization QA</h5>
            </div>
            <div className="uk-width-1-2@m uk-width@s">
            <img src={voice} alt="" className={cls.im1} />
            <h5 className={cls.imt1}>Voice Production</h5>
            </div>
            <div className="uk-width-1-2@m uk-width@s">
            <img src={data1} alt="" className={cls.im2} />
            <h5 className={cls.imt2}>Data Collection</h5>
            </div>
</div>  
        <div>
            <img src={bod} alt='' className={cls.blkimg} />
        </div>

    <div >
        <br/>
        <img src={border} alt='' className={cls.borde} />
        <img src={img01} alt='' className={cls.bimg}/>
        <h1 className={cls.rbtn}>Continous<br/>Localization</h1>
        <button className={cls.rebtn}>Read More &#62;&#62;&#62; </button>
        </div>

    <div className="uk-section uk-grid" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
        <div className="uk-width-1-2@m uk-width@s" >
            <br/><br/><br/>
                <img src={bord} alt='' class={cls.bor} />
                <img src={img1} alt='' class={cls.bo} />
                <h3 className={cls.btex}>Player Feedback</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
        <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img2} alt='' class={cls.bo} />
                <h3 className={cls.btext}>So, You Want To<br/>Port Your Game</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img3} alt='' class={cls.bo} />
                <h3 className={cls.be}>Bussiness<br/>Transformation During The Panademic</h3>

        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img4} alt='' class={cls.bo} />
                <h3 className={cls.be}>The Role Of<br/>Innovation In Player Support</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img5} alt='' class={cls.bo} />
                <h3 className={cls.be}>Meet The Team:<br/>Timothy White</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img6} alt='' class={cls.bo} />
                <h3 className={cls.be}>What Is Text-To-<br/>Speech?</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img7} alt='' class={cls.bo} />
                <h3 className={cls.be}>Meet The Team:<br/>Machiko Kida</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img8} alt='' class={cls.bo} />
                <h3 className={cls.be}>Meet The Team:<br/>Alexander Stepanchikov</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img9} alt='' class={cls.bo} />
                <h3 className={cls.be}>Inside The Day <br/>To Day Of Localization QA</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img10} alt='' class={cls.bo} />
                <h3 className={cls.be}>Using Machine<br/> Learning In Performance Testing</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img11} alt='' class={cls.bo} />
                <h3 className={cls.be}>Localization<br/> Strategy For Emerging Markets | PTW</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img12} alt='' class={cls.bo} />
                <h3 className={cls.be}>Get To know<br/>Michael And Maxim of 1518</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img13} alt='' class={cls.bo} />
                <h3 className={cls.btex}>Gateway To China</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img14} alt='' class={cls.bo} />
                <h3 className={cls.be}>How The <br/>Perception AndExecution Of Early Access Games Has Changed (2013 - 2020)</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img15} alt='' class={cls.bo} />
                <h3 className={cls.be}>How To<br/> Automate QA Testing</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img16} alt='' class={cls.bo} />
                <h3 className={cls.be}>Every Question<br/>You Need To Ask Before Localizing A Game</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img17} alt='' class={cls.bo} />
                <h3 className={cls.be}>The Non- <br/>Technical Guide To Remarkable Player Support</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img18} alt='' class={cls.bo} />
                <h3 className={cls.be}>How To Build A <br/>Video Game Localization Strategy In 5 Steps</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img19} alt='' class={cls.bo} />
                <h3 className={cls.be}>4 Outsourcing<br/> Lessons From AGames Audio Pro</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img20} alt='' class={cls.bo} />
                <h3 className={cls.be}>Is Player Support<br/>Hurting Your Games?</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img21} alt='' class={cls.bo} />
                <h3 className={cls.be}>Mobile Games -<br/>Small Devices, Big Challenges</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img22} alt='' class={cls.bo} />
                <h3 className={cls.be}>The Elearning<br/>Opportunities Are Noving Fast. Are You Ready?</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img23} alt='' class={cls.bo} />
                <h3 className={cls.be}>A Guide To<br/>Launching Your Titles In Asia</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img24} alt='' class={cls.bo} />
                <h3 className={cls.be}>Testing In A<br/> World Without End: How To Get RPGs Ready For Release</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img25} alt='' class={cls.bo} />
                <h3 className={cls.be}>Integrated CX<br/> And QA: Driving Engagement By Uniting Teams</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img26} alt='' class={cls.bo} />
                <h3 className={cls.be}>How PTW <br/>Helped A Global Business Integrate Their Processes, To Increase Productivity, Boost Overall...</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img27} alt='' class={cls.bo} />
                <h3 className={cls.be}>How PTW's<br/> Quality Assurance Services Helped A Top Elearning Provider Resove Post-Acquisition...</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img28} alt='' class={cls.bo} />
                <h3 className={cls.be}>How PTW<br/>Introduced Automation Testing For An Online Games Company, With Winning Results </h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img29} alt='' class={cls.bo} />
                <h3 className={cls.be}>Creating <br/> Authentic Cries Of War</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img32} alt='' class={cls.bo} />
                <h3 className={cls.be}>5 Reasons To<br/>Consider Localization</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img33} alt='' class={cls.bo} />
                <h3 className={cls.be}>Pole To Win<br/>Embraces Virtual Reality Quality Assurance</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img34} alt='' class={cls.bo} />
                <h3 className={cls.be}>How Virtual<br/> Reality Has Changed The Games Testing Environment</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img35} alt='' class={cls.bo} />
                <h3 className={cls.be}>Speaking Your<br/>Customer's Lamnguage</h3>  
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img36} alt='' class={cls.bo} />
                <h3 className={cls.be}>How PTW <br/>Helped A Leading Client Connect With Their Customers On Social Media</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img37} alt='' class={cls.bo} />
                <h3 className={cls.be}>Revolutionizing<br/>Customer Interactions Through Vitual And Augmented Reality</h3>
        </div>
        <div className="uk-width-1-2@m uk-width@s">
            <br/><br/><br/>
               <img src={bord} alt='' class={cls.bor}/>
                <img src={img38} alt='' class={cls.bo} />
                <h3 className={cls.be}>How Deep<br/>Domain Knowledge Can Build Strong Customer Relationships</h3>
        </div>

    </div>

</div>



    )
}
export default Lab;