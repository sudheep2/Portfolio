import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class Introduction extends Component{
    render(){
        return(
            <div>
            <section id="introduction">
<header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="videos\Mt_Baker.mp4" type="video/mp4" />
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">S.V.S.Sudheep Rao</h1>
        <p class="lead mb-0">paasionate about learning new things in life</p>
        <nav id="colorlib-main-menu-center">
              <ul>
                <p>
                  <br></br>
                <SocialIcon url="https://www.facebook.com/sudheep.dippu/" /> &nbsp; &nbsp;
                <SocialIcon url="https://www.instagram.com/the_lone_contender/" /> &nbsp; &nbsp;
                <SocialIcon url="https://www.linkedin.com/in/sudheep-somisetti-1764531b2/" /> &nbsp; &nbsp;
                <SocialIcon url="https://github.com/sudheep2" />
              
                </p>
              </ul>
            </nav>
      </div>
    </div>
  </div>
</header>
</section>
            </div>
        )
    }

}