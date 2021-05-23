import React, { Component } from 'react';
import './App.css';
import Aboutme from './components/Aboutme'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import {repos,skills} from './components/js/config.js'
import Project from './components/Project'
import Skills from './components/Skills';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
      <div id="container-wrap">
         <Navbar />
      <div id="colorlib-main">
        <Introduction></Introduction>
        <Aboutme />
        {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos} 
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
        <Footer />
          </div>
      </div>
    </div>
    );
  }
}
export default App;