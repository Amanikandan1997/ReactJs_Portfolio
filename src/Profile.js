import React from 'react'
import "./profile.css"
import DP from "./assests/perfil.png"
import Project from './Project'
import Skills from "./Skills"
import manicv from "./assests/assets/pdf/mani cv.pdf"
function Profile() {
  return (
  
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/*=============== FAVICON ===============*/}
    <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
    {/*=============== REMIX ICONS ===============*/}
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
    {/*=============== CSS ===============*/}
    <link rel="stylesheet" href="assets/css/styles.css" />
    <title>MK - Mini React Portfolio </title>
    {/*=============== HEADER ===============*/}
    <header className="profile container">
      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              {/* Insert your image, according to the example size of the portfolio */}
              <img src={DP} alt="" />
            </div>
          </div>
          <h2 className="profile__name">Manikandan A</h2>
          <h3 className="profile_profession">Software Developer & Graphic Designer</h3>
          <ul className="profile__social">
            <a href="https://instagram.com/manikandan_uki?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="profile__social-link">
              <i className="ri-instagram-fill" />
            </a>
            <a href="https://www.linkedin.com/in/manikandan-arunachalam-2b0803262/" className="profile__social-link">
              <i className="ri-linkedin-box-fill" />
            </a>
            <a href="https://github.com/Amanikandan1997" className="profile__social-link">
              <i className="ri-github-fill" />
            </a>
            <a href="https://www.behance.net/manikandanuki" className="profile__social-link">
            <i class="ri-behance-fill"></i>
            </a>
            <a href="https://www.naukri.com/mnjuser/homepage" className="profile__social-link">
            <i class="ri-briefcase-4-fill"></i>
            </a>
          </ul>
        </div>
        <div className="profile__info grid">
          <div className="profile__info-group">
            <h3 className="profile__info-number">1</h3>
            <p className="profile__info-description">
              Year of <br /> work
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number">30</h3>
            <p className="profile__info-description">
              Completed <br /> projects
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number">17</h3>
            <p className="profile__info-description" satisfied > Customers</p>
          </div>
        </div>
        <div className="profile__buttons">
          {/* Insert your CV */}
          <a download href={manicv} className="button">
            Download CV <i className="ri-download-line" />
          </a>
          <div className="profile__buttons-small">
           
            <a href="https://instagram.com/manikandan_uki?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" className="button button__small button__gray">
              <i className="ri-instagram-fill" />
            </a>
            {/* Insert your brand name or profile */}
            {/* <a href="" target="_blank" class="button button__small button__gray">
                        <i class="ri-messenger-line"></i>
                 </a> */}
                  
          </div>
        </div>
      </div>
    </header>
    {/*=============== MAIN ===============*/}
   <Skills/>
    <Project/> 
        {/*=============== FILTERS TABS ===============*/}
    
   
       
       
   
    {/* <br><br> */}
    {/* <hr> */}
    {/*=============== FOOTER ===============*/}
    <footer className="footer container">
      <span className="footer__copy">
        © <a href="https://github.com/Amanikandan1997">Manikandan Arunachalam @ {new Date().getFullYear()} </a> <br /> All rigths reserved.
      </span>
    </footer>
    {/*=============== SCROLLREVEAL ===============*/}
    // 
    {/*=============== MAIN JS ===============*/}
 </div>
  )
}

export default Profile
