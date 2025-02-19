import React from 'react';
import './Projects.css'; 
const projects = [
  {
    id: 1,
    title: 'My GitHub',
    description: 'If you want to know about me or any projects or my internships, just go to my GitHub account and check it out...',
    link: 'https://github.com/manu1242',
    icon: <i className="fab fa-github"></i>, 
  },
  {
    id: 2,
    title: 'To-Do-List',
    description: 'A to-do list is a powerful tool for organizing tasks and prioritizing actions. It helps you stay focused, track progress, and ensure nothing important slips through the cracks. Whether handwritten or digital, a well-structured to-do list keeps you productive and efficient throughout your day check it out..',
    link: 'https://manutodolist.netlify.app/',
    icon: <i className="fas fa-list"></i>,
  },
  {
    id: 3,
    title: 'WeatherApp',
    description: 'The Weather App is a dynamic web application designed to provide real-time weather information for any location worldwide. Built using React, JavaScript, HTML, CSS, this app allows users to search for cities and retrieve current weather data, including temperature, humidity, wind speed, and weather conditions. Check it out!',
    link: 'https://cloneweather.netlify.app/',
    icon: <i className="fas fa-cloud-sun"></i>,
},
{
    id: 4,
    title: 'YouTube Video Downloader',
    description: 'The YouTube Video Downloader is a powerful web application that allows users to download videos from YouTube effortlessly. Developed using Python, Django, HTML, CSS, JavaScript, this app provides an intuitive interface for users to input video URLs and select their desired video quality before downloading. Check it out!',
    link: 'https://project-three-url.com',
    icon: <i className="fas fa-download"></i>, 
},
{
    id: 5,
    title: 'Travel Explorer.',
    description: 'Travel Explorer shows the famous places in India and to know about the places in journey.[Currently Developing Stage]',
    icon:<i className="fas fa-compass"></i> 
},
{
  id: 6,
  title: 'Billing-Site',
  description: 'A billing site built using the MERN stack is a web application that allows users to manage their invoices, track payments, and view billing details, all powered by a robust backend system utilizing MongoDB for data storage, Express.js for API endpoints, React.js for the interactive user interface, and Node.js as the server-side runtime. Check it out!',
  link: 'https://store-project-ui.vercel.app',
  icon: <i className="fas fa-sitemap"></i>, 
},

];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {project.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;