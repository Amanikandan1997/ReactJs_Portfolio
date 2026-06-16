import React from 'react'
import kite from './assests/lll.png'
import ccm from './assests/ccm.png'

import ramcons from './assests/ramcons.png'
function Course() {
  return (
    <>
     <main className="main">
      <section className="filters container">
        {/*=============== FILTERS TABS ===============*/}
        <ul className="filters__content">
          <button className="filters__button filter-tab-active" data-target="#skills">
            Education
          </button>
          
        </ul>
        <div className="filters__sections">
          
         
          {/*=============== SKILLS ===============*/}
          <div className="skills__content grid filters__active" data-content id="skills">
            <div className="skills__area">
              <h3 className="skills__title">School</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">Maths-Bio  <br/>
                      Govt Boys Higher Secondary School Marthandam</h3>
                      <span className="skills__level">HSC 2012-2014</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">G.H.S.Unnamalaikadai</h3>
                      <span className="skills__level">SSLC 2011-2012</span>
                    </div>
                  </div>
                  </div> 
                  
              </div>
            </div>
            <div className="skills__area">
              <h3 className="skills__title">College</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">BCA<br/>Madras University</h3>
                      <span className="skills__level">Jan-2021-DEC-2023</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">Diplomo Mechanical Engineering<br/>Sree Krishna Polytechnic College</h3>
                      <span className="skills__level">JUN-2014-APR-2016</span>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
                    <ul className="filters__content">
          <button className="filters__button filter-tab-active" data-target="#skills">
            Experience
          </button>
          
        </ul>
           <h3 className="skills__title"></h3>
            <div className="skills__area1">
              
              <div className="skills__box1">
                <div className="skills__group1">
                  <div className="skills__data1">
                    <img src={kite} alt='kiteCareer' width="40" height="30"/>
                    <div>
                      <h3 className="skills__name1">Frontend Developer — KiteCareer 
</h3>
                  <span className="skills__level1">JUN-2022-JUL-2024</span>
                    </div>
                  </div>
                  
                  </div>
              </div>
            </div>
              <div className="skills__area1">
            
              <div className="skills__box1">
                <div className="skills__group1">
                  <div className="skills__data1">
                    <img src={ramcons} alt='ramcons ' width="40" height="30"/>
                    <div>
                      <h3 className="skills__name1">IT Executive — Ramcons 
</h3>
                  <span className="skills__level1">FEB-2025-JUN-2025</span>
                    </div>
                  </div>
                  
                  </div>
              </div>
            </div>
              <div className="skills__area1">
              
              <div className="skills__box1">
                <div className="skills__group1">
                  <div className="skills__data1">
                    <img src={ccm}alt='CapeComorin Media Pvt Ltd' width="40" height="30"/>
                    <div>
                      <h3 className="skills__name1">Software Developer &  Designer —  CapeComorin Media Pvt Ltd
</h3>
                  <span className="skills__level1">JUN-2025-Present</span>
                    </div>
                  </div>
                  
                  </div>
              </div>
            </div>
          </div>
        </div> </section>
       </main>
    </>
  )
}

export default Course