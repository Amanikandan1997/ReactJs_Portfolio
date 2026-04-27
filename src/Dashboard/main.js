import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './content.css';

function Main({ props }) {
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [projectTitle, setProjectTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [projectURL, setProjectURL] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/projects');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddProject = async () => {
    const newProject = {
      image,
      projectTitle,
      subTitle,
      projectURL,
      name,
      position,
      experience,
      skills,
    };

    try {
      // Send a POST request to your JSON server API
      const response = await axios.post('http://localhost:3001/projects', newProject);

      // Update the state with the response data
      setImages([...images, response.data]);
    } catch (error) {
      console.error('Error adding project:', error);
    }

    // Reset the form after adding a project
    setImage('');
    setProjectTitle('');
    setSubTitle('');
    setProjectURL('');
    setName('');
    setPosition('');
    setExperience('');
    setSkills('');
  };

  return (
    <div>
      <h2>Display Images</h2>
      <input type="file" onChange={handleImageChange} />
      <img src={image} alt="" width="200px" height="100px" />
      <br />

      <label>PROJECT TITLE</label>
      <input type="text" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
      <br />

      <label>SUB TITLE</label>
      <input type="text" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
      <br />

      <label>URL</label>
      <input type="text" value={projectURL} onChange={(e) => setProjectURL(e.target.value)} />
      <br />

      <label>NAME</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />

      <label>POSITION</label>
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      <br />

      <label>EXPERIENCE</label>
      <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} />
      <br />

      <label>SKILLS</label>
      <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
      <br />

      <button onClick={handleAddProject}>Add Project</button>
      <br />

      <ul className="filters__content">
        <button className="filters__button filter-tab-active" data-target="#skills">
          Projects
        </button>
      </ul>

      {/*=============== PROJECTS ===============*/}
      {images.map((item, index) => (
        <div className="projects__content grid " data-content id="projects" key={index}>
          <article className="projects__card">
            {/* Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) */}
            <img src={item.image} alt="" className="projects__img" />
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">{item.subTitle}</span>
                <h3 className="projects__title">{item.projectTitle}</h3>
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Position:</strong> {item.position}
                </p>
                <p>
                  <strong>Experience:</strong> {item.experience}
                </p>
                <p>
                  <strong>Skills:</strong> {item.skills}
                </p>
                <a href={item.projectURL} target="_blank" className="projects__button button button__small">
                  <i className="ri-link" />
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Main;
