import React from 'react'
import KBM from "./assests/kbm.png"
import Kite from "./assests/kite j.png"
import EC2 from "./assests/project1.jpg"
import Port from "./assests/project4.jfif"
import Trans from "./assests/trans.png"
import StageDesign from "./assests/stage copy.jpg"
import CapeComorinAward from "./assests/project3.jpg"
import KK from "./assests/kk.jpeg"
import honey from "./assests/mtm honey 1.jpg"
import honey2 from "./assests/mtm honey 2.jpg"
import kit from "./assests/kit.jpg"
import chips from "./assests/work4.jpg"
import aasai from "./assests/aasai candy.jpg"
import lanyard from "./assests/work13 (2).jpg"
import idtag from "./assests/work13 (1).jpg"
import idcard from "./assests/id.jpg"
import surabhi from "./assests/surabhi.png"
import ecomm from "./assests/ecommerce.png"
import ec22 from "./assests/project2.jpg"
import dsr from "./assests/dsr.png"
import ludo from "./assests/ludo 1st design.jpg"
import kite2 from "./assests/kite j.png"
import kiteflyer from "./assests/KITE BROUCHER.jpg"
import kiteflyer2 from "./assests/kite python.jpg"
import vjlogo from "./assests/vj.jpeg"
import mklogo from "./assests/mk logo replace.jpg"
import sb1 from "./assests/sb1.jpg"
import sb2 from "./assests/sb2.jpg"
import job from "./assests/jobdas.png"
import sachin1 from "./assests/sachin.jpg"
import sachin2 from "./assests/sachin 2.jpg"
import book1 from "./assests/b1.jpg"
import book2 from "./assests/b2.jpg"
import QR from "./assests/QR.png"
import Currency from "./assests/Currency.png"
import manimart from "./assests/manimart.png"
import weather from "./assests/weather.png"
import porkalam from "./assests/por.jpeg"
import porkalam1 from "./assests/por1.jpeg"
import jewell from './assests/jewell.png'
import Navbar from './Navbar'

import  Calendar  from './assests/calendar.jpeg'
function Project() {
  return (
    
    <>

     <ul className="filters__content"> <button className="filters__button filter-tab-active" data-target="#skills">
            Projects
          </button></ul>
       
        {/*=============== PROJECTS ===============*/}
        <div className="projects__content grid " data-content id="projects">
            <article className="projects__card">
              {/* Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) */}
              <img src={EC2} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design Work</span>
                  <h3 className="projects__title">Easy2Cooking Logo</h3>
                  <a href="https://www.instagram.com/p/CwFz7mVyiW_/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={Port} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Formal Portfolio website</h3>
                  <a href="https://amanikandan1997.github.io/Manikanadan_Portfolio/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={surabhi} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Surabhi Constructions Reactjs</h3>
                  <a href="http://abhisurabhi.com/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={Trans} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">TransCloud Html Css website</h3>
                  <a href="https://kitecareer.com/transcloudservices/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={ecomm} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">quaent ecommerce website php (Laravel)</h3>
                  <a href="https://kitecareer.com/ecommerce/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={KBM} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">KBM website Using React JS</h3>
                  <a href="https://kalaimarketing.com" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={dsr} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">DSR Construction website Using HTML,CSS,JS,Emailjs</h3>
                  <a href="http://dsrconstruction.net/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={weather} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Marthandam Weather Man-React JS</h3>
                  <a href="https://amanikandan1997.github.io/Manikandan_uki_weatherManapp/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            
            <article className="projects__card">
              <img src={manimart} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">manimart Amazon Clone-React JS</h3>
                  <a href="https://amanikandan1997.github.io/mini-e-commerce/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={QR} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">QR Code Generator React JS</h3>
                  <a href="https://amanikandan1997.github.io/Qr-Code-Generate/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={Currency} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Currency Converter React JS</h3>
                  <a href="https://amanikandan1997.github.io/Currency_Converter_Reactjs/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={jewell} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Jewellery Workshop html css Js website </h3>
                  <a href="https://amanikandan1997.github.io/Jewellery_static/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={job} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">job portal Dashboard website Using ReactJS,mysql,flaskapi</h3>
                  <a href="https://dmafashions.com/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={StageDesign} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Stage Design Mockup</span>
                  <h3 className="projects__title">Stage Design</h3>
                  <a href="https://www.instagram.com/p/Cxd-LGIyn8O/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={CapeComorinAward} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Cape Comorin Awards 2023 Dsign</h3>
                  <a href="https://www.instagram.com/p/Cu9cYePNYX7/?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={KK} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">KanniyaKumari Creative Design</h3>
                  <a href="https://www.instagram.com/p/CxkZvt5r3kS/?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
      <article className="projects__card">
              <img src={sachin1} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Sunfeast Sachin & Chandramuki card re Design</h3>
                  <a href="https://www.instagram.com/p/Cu9cYePNYX7/?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
     <article className="projects__card">
              <img src={sachin2} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Sunfeast Sachin & Chandramuki card re  Design</h3>
                  <a href="https://www.instagram.com/p/Cu9cYePNYX7/?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={book1} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Aadhiyugam Book Cover Design</h3>
                  <a href="https://www.linkedin.com/posts/manikandan-arunachalam-2b0803262_new-book-coverdesign-work-edit-manikandan-activity-7154875581120106496-VACn?utm_source=share&utm_medium=member_desktop" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={book2} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Aadhiyugam Book Cover Design</h3>
                  <a href="https://www.linkedin.com/posts/manikandan-arunachalam-2b0803262_new-book-coverdesign-work-edit-manikandan-activity-7154875581120106496-VACn?utm_source=share&utm_medium=member_desktop" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            
            <article className="projects__card">
              <img src={honey} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Marthandam Honey Product Design</h3>
                  <a href="https://www.instagram.com/p/CyGLhGry1kH/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={honey2} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Marthandam Honey Product Design 2</h3>
                  <a href="https://www.instagram.com/p/CyGLl9ISuZK/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={kit} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Kit Kat Product Design</span>
                  <h3 className="projects__title">Kitkat Tamil</h3>
                  <a href="https://www.instagram.com/p/Cw7qmsZS3k8/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={chips} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">MTM Chips Product Design</span>
                  <h3 className="projects__title">Marthandam Chips</h3>
                  <a href target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={porkalam} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Porkalam Rap Song Poster Design</h3>
                  <a href="https://www.instagram.com/p/C3o-QC2N1Ye/?igsh=d2JpOGE2bHdmMnZ3" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={porkalam1} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Porkalam Lyric Video Editing</h3>
                  <a href="https://youtu.be/C0HzkHOXgRs" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            
            <article className="projects__card">
              <img src={aasai} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">90s AAsai Mittai RE Design</span>
                  <h3 className="projects__title">90s AASAY MITTAIs</h3>
                  <a href target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={lanyard} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">ID Tag Stripe Design</span>
                  <h3 className="projects__title">ID Stripe</h3>
                  <a href="#" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={idtag} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">ID Tag Stripe Design 2</span>
                  <h3 className="projects__title">ID Stripe</h3>
                  <a href="#" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={idcard} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Id Card  Design </span>
                  <h3 className="projects__title">Kite ID Card Design</h3>
                  <a href="#" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={sb1} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">SweetBox Design</span>
                  <h3 className="projects__title">Diwali SweetBox Design</h3>
                  <a href target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={sb2} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">SweetBox Design</span>
                  <h3 className="projects__title">Diwali SweetBox Design</h3>
                  <a href target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            
            <article className="projects__card">
              <img src={ec22} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design Work</span>
                  <h3 className="projects__title">Ec2 Logo Design</h3>
                  <a href="https://www.instagram.com/p/CwFz3qcyQ73/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={ludo} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">LUDO Design</span>
                  <h3 className="projects__title">Flower Design Ludo</h3>
                  <a href="#" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={kite2} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Kite Intro VIdeo</span>
                  <h3 className="projects__title">Kite Intro Video </h3>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7065543191789273088/" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={kiteflyer} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Flyer Design</span>
                  <h3 className="projects__title">Kite Flyer  Design </h3>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7068225034493833216" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={kiteflyer2} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Flyer Design</span>
                  <h3 className="projects__title">Kite Flyer  Design </h3>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7068231645086060544" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={vjlogo} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Logo Animation</span>
                  <h3 className="projects__title">Kaththi Boys intro</h3>
                  <a href="https://www.instagram.com/reel/Ct5_jt0s2Rn/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={Calendar} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">calendar  Mockup 2021</span>
                  <h3 className="projects__title">Kaththi Boys calendar 2021</h3>
                  <a href="https://www.instagram.com/p/CHN8OYmrcZx/?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
            <article className="projects__card">
              <img src={mklogo} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Mani UKI Design Work</span>
                  <h3 className="projects__title">Ec2 Logo Design</h3>
                  <a href="https://www.instagram.com/p/Cw-OHoYyKK9/?igshid=MzRlODBiNWFlZA==" target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        
    </>
  )
}

export default Project
