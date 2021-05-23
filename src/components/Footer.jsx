import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
<div>
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h1> Get in Touch</h1>
                <p>I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at ,<a href = "mailto: venkatsaisudheep@gmail.com">venkatsaisudheep@gmail.com</a> </p>
            </div>
            <div class="col-md-2">
                <h1 class="text-md-right">Contact me</h1>
                <hr />
            </div>
            <div class="col-md-5">
                <form>
                    <fieldset class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset class="form-group text-xs-right">
                        <button type="button" class="btn bg-light btn-sm">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</footer>
</div>
        )
    }
}