import React, { useState, useEffect } from "react";
import Languages from './components/Languages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Profile from './components/Profile';
import NavBar from './components/NavBar';


export default function App() {
  const [profile, setProfile] = useState("");
  const [languages, setLanguages] = useState("");
  const [projects, setProjects] = useState("");
  const [contact, setContact] = useState("");
  const [blog, setBlog] = useState("");

  useEffect(() => {
    setProfile("");
    setLanguages("");
    setProjects("");
    setContact(!contact);
    setBlog("");
  }, [])

  function renderProfile() {
    setProfile(!profile);
    setLanguages("");
    setContact("");
    setProjects("");
    setBlog("");
  }
  function renderLanguages() {
    setProfile("");
    setLanguages(!languages);
    setContact("");
    setProjects("");
    setBlog("");
  }
  function renderProjects() {
    setProfile("");
    setLanguages("");
    setContact("");
    setProjects(!projects);
    setBlog("");
  }
  
  function renderBlog() {
    setProfile("");
    setLanguages("");
    setContact("");
    setProjects("");
    setBlog(!blog);
  }
  function renderContact() {
    setProfile("");
    setLanguages("");
    setContact(!contact);
    setProjects("");
    setBlog("");
  }
  return (
    <div>
        <NavBar />
    <body>
        <div className="render-area">
          {profile && 
          <div>
            <Profile />
          </div>}
          {languages && 
          <div>
            <Languages />
          </div>}
          {projects && 
          <div>
            <Projects />
          </div>}
          {blog && 
          <div>
            <Blog />
          </div>}
          {contact && 
          <div>
          <Contact />
          </div>}
        </div>
      </body>
    </div>
  )
}
