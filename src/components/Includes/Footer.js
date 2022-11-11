import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    Savvy Accessories<span></span>
                  </h5>
                  <p>
                    Savvy Accessories is a jewelry brand that helps people level
                    up their outfit by providing essential jewelry to complete
                    their outfit and make them feel confident{" "}
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul class="thumbnail-widget">
                    <li>
                      <div class="thumb-content">
                        <a href="#.">&nbsp;Get Started</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">&nbsp;Top Leaders</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Follow up<span></span>
                  </h5>
                  <a href="#">
                    {" "}
                    <i class="fa fa-facebook"> </i>{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <i class="fa fa-twitter"> </i>{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <i class="fa fa-youtube"> </i>{" "}
                  </a>
                </div>
              </div>
              <br />
              <br />

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Contact Us<span></span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>

                  <div class="emailfield">
                    <form>
                      <input type="text" name="email" value="Email" />
                      <input name="uri" type="hidden" value="arabiantheme" />
                      <input name="loc" type="hidden" value="en_US" />
                      <input
                        class="submitbutton ripplelink"
                        type="submit"
                        value="Subscribe"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p>
                    Copyright Design Sherif Hamdy © 2019. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
