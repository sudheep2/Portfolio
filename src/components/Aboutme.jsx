import React, { Component } from 'react';

export default class Aboutme extends Component{
    render(){
        return(
            <div>
            <section className="colorlib-about" id="about">
        <main class="container">
            <article class="postcard red">
            <a class="postcard__img_link" href="#">
                <img class="postcard__img" src="images\about.jpg" alt="Image Title" />	
             </a>
    <div class="postcard__text">
        <h1 class="postcard__title red"><a href="#">About me</a></h1>
        <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>Fir, Jan 19th 2001
            </time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">Creative and astute learner, seeking opportunity to prove my mettle with proven team collaboration and management qualities. Aiming to use my knowledge to achieve results</div>
        <ul class="postcard__tagbox">
            <li class="tag__item play red">
                <a href="https://drive.google.com/file/d/1_CYbkeOz58ujUysqKqABPTJp46qMS4Qi/view?usp=sharing">My Resume</a>
            </li>
        </ul>
    </div>
</article>
</main>
</section>
            </div>
        )
    }
}