import React from 'react'

function Skills() {
  return (
    <>
     <main className="main">
      <section className="filters container">
        {/*=============== FILTERS TABS ===============*/}
        <ul className="filters__content">
          <button className="filters__button filter-tab-active" data-target="#skills">
            Skills
          </button>
          
        </ul>
        <div className="filters__sections">
          
         
          {/*=============== SKILLS ===============*/}
          <div className="skills__content grid filters__active" data-content id="skills">
            <div className="skills__area">
              <h3 className="skills__title">Frontend Developer</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">Git/Github</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__area">
              <h3 className="skills__title">Design Source</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">Adobe Photoshop</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">Adobe illustartor</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">After Effect</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">Flimora 12</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line" />
                    <div>
                      <h3 className="skills__name">VN editor</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
       </main>
    </>
  )
}

export default Skills