import React from 'react';
import { Link } from 'react-router-dom';

const logo = require("../images/footer_logo.webp");

class Footer extends React.Component {
  render() {
    return (
<footer id="footer" class="fixed-bottom bg-dark text-white">
<div class="main-footer widgets-dark typo-light">
<div class="container">
<div class="row">

  
<div class="col-md-4">
<div class="widget subscribe no-box">
<h5 class="widget-title"><b>GOT Family Trees</b><span></span></h5>
<p>Be Familar with eight families in Game of Thrones and creat your own family tree! </p>
</div>
</div>


<div class="col-md-4">
<div class="widget no-box">
<h5 class="widget-title"><b>Contact Us</b><span></span></h5>
<p><a href="mailto:info@domain.com" title="glorythemes">info@GOTFamilyTrees.com</a></p>
<ul class="social-footer2">
</ul>
</div>
</div>

<div class="col-md-4">
<a className="navbar-brand" href="#"><img src ={logo}/></a>
</div>

</div>
</div>
  
{/* <div class="footer-copyright">
<div class="container">
<div class="row">
<div class="col-md-12 text-center">
<p>Copyright GOT Family Trees © 2022. All rights reserved.</p>
</div>
</div>
</div>
</div> */}
</div>
</footer>
    );
  }
}

export default Footer