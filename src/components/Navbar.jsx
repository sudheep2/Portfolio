import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Navbar extends Component{
    render(){
        return(
     <div>
	    <nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light fixed-top" id="ftco-navbar">
		    <div class="container_custom ">
		    	<a class="navbar-brand" href="index.html">&lt;&nbsp;/Sudheep&gt;</a>
		    	<div class="social-media order-lg-last">
		    		<p class="mb-0 d-flex">
		    			<a href="https://www.facebook.com/sudheep.dippu/" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
		    			<a href="https://www.linkedin.com/in/sudheep-somisetti-1764531b2/" class="d-flex align-items-center justify-content-center"><span class="fa fa-linkedin"><i class="sr-only">Linkedin</i></span></a>
		    			<a href="https://www.instagram.com/the_lone_contender/" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
		    			<a href="https://github.com/sudheep2" class="d-flex align-items-center justify-content-center"><span class="fa fa-github"><i class="sr-only">Github</i></span></a>
		    		</p>
	        </div>
		      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="fa fa-bars"></span> Menu
		      </button>
		      <div class="collapse navbar-collapse " id="ftco-nav">
		        <ul class="navbar-nav ml-auto mr-md-3">
		        	<li class="nav-item active"><AnchorLink offset='0' href="#introduction" class="nav-link">introduction</AnchorLink></li>
		        	<li class="nav-item"><AnchorLink offset='0' href="#about" class="nav-link">About</AnchorLink></li>
		        	<li class="nav-item"><AnchorLink offset='0' href="#recent" class="nav-link">Recent projects</AnchorLink></li>
		          <li class="nav-item"><AnchorLink offset='0' href="#skills" class="nav-link">Skills</AnchorLink></li>
		        </ul>
		      </div>
		    </div>
		 </nav>

      </div>
        )
    }
}
