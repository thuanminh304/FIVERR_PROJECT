import React from 'react';

const Footer = () => {
    return (
        <div>
             <footer className=" mt-5 border-top">
    <div className="footer__container container px-0 ">
      <div className="footer__content row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-5">
        <div className="footer__box col ">
          <h6>Categories</h6>
          <div className="footer__item">
            <ul>
              <a href="#">
                <li>Graphics & Design</li>
              </a>
              <a href="#">
                <li>Digital Marketing</li>
              </a>
              <a href="#">
                <li>Writing & Translation</li>
              </a>
              <a href="#">
                <li>Video & Animation</li>
              </a>
              <a href="#">
                <li>Music & Audio</li>
              </a>
              <a href="#">
                <li>Programming & Tech</li>
              </a>
              <a href="#">
                <li>Data</li>
              </a>
              <a href="#">
                <li>Business</li>
              </a>
              <a href="#">
                <li>Lifestyle</li>
              </a>
              <a href="#">
                <li>Sitemap</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer__box col ">
          <h6>About</h6>
          <div className="footer__item">
            <ul>
              <a href="#">
                <li>Careers</li>
              </a>
              <a href="#">
                <li>Press & News</li>
              </a>
              <a href="#">
                <li>Partnerships</li>
              </a>
              <a href="#">
                <li>Privacy Policy</li>
              </a>
              <a href="#">
                <li>Terms of Service</li>
              </a>
              <a href="#">
                <li>Intellectual Property Claims</li>
              </a>
              <a href="#">
                <li>Investor Relations</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer__box col ">
          <h6>Support</h6>
          <div className="footer__item">
            <ul>
              <a href="#">
                <li>Help & Support</li>
              </a>
              <a href="#">
                <li>Trust & Safety</li>
              </a>
              <a href="#">
                <li>Selling on Fiverr</li>
              </a>
              <a href="#">
                <li>Buying on Fiverr</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer__box col ">
          <h6>Community</h6>
          <div className="footer__item">
            <ul>
              <a href="#">
                <li>Events</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Forum</li>
              </a>
              <a href="#">
                <li>Community Standards</li>
              </a>
              <a href="#">
                <li>Podcast</li>
              </a>
              <a href="#">
                <li>Affiliates</li>
              </a>
              <a href="#">
                <li>Invite a Friend</li>
              </a>
              <a href="#">
                <li>Become a Selller</li>
              </a>
              <a href="#">
                <li>Fiverr Elevate</li>
                <p>Exclusive Benefits</p>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer__box col ">
          <h6>More From Fiverr</h6>
          <div className="footer__item">
            <ul>
              <a href="#">
                <li>Fiverr Business</li>
              </a>
              <a href="#">
                <li>Fiverr Pro</li>
              </a>
              <a href="#">
                <li>Fiverr Studios</li>
              </a>
              <a href="#">
                <li>Fiverr Logo Maker</li>
              </a>
              <a href="#">
                <li>Fiverr Guides</li>
              </a>
              <a href="#">
                <li>Get Inspired</li>
              </a>
              <a href="#">
                <li>ClearVoice</li>
                <p>Content Marketing</p>
              </a>
              <a href="#">
                <li>AND CO</li>
                <p>Invoice Software</p>
              </a>
              <a href="#">
                <li>Learn</li>
                <p>Online Courses</p>
              </a>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER MOBILE --> */}
      <div className="footer__mobile">
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                  aria-controls="collapseOne">
                  <h6>Categories</h6>
                  <span className="collapse__icon"><i className="fas fa-chevron-up"></i></span>
                </button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <div className="footer__item">
                  <ul>
                    <a href="#">
                      <li>Graphics & Design</li>
                    </a>
                    <a href="#">
                      <li>Digital Marketing</li>
                    </a>
                    <a href="#">
                      <li>Writing & Translation</li>
                    </a>
                    <a href="#">
                      <li>Video & Animation</li>
                    </a>
                    <a href="#">
                      <li>Music & Audio</li>
                    </a>
                    <a href="#">
                      <li>Programming & Tech</li>
                    </a>
                    <a href="#">
                      <li>Data</li>
                    </a>
                    <a href="#">
                      <li>Business</li>
                    </a>
                    <a href="#">
                      <li>Lifestyle</li>
                    </a>
                    <a href="#">
                      <li>Sitemap</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="false" aria-controls="collapseTwo">
                  <h6>About</h6>
                  <span className="collapse__icon"><i className="fas fa-chevron-up"></i></span>
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                <div className="footer__item">
                  <ul>
                    <a href="#">
                      <li>Careers</li>
                    </a>
                    <a href="#">
                      <li>Press & News</li>
                    </a>
                    <a href="#">
                      <li>Partnerships</li>
                    </a>
                    <a href="#">
                      <li>Privacy Policy</li>
                    </a>
                    <a href="#">
                      <li>Terms of Service</li>
                    </a>
                    <a href="#">
                      <li>Intellectual Property Claims</li>
                    </a>
                    <a href="#">
                      <li>Investor Relations</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree">
                  <h6>Support</h6>
                  <span className="collapse__icon"><i className="fas fa-chevron-up"></i></span>
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <div className="footer__item">
                  <ul>
                    <a href="#">
                      <li>Help & Support</li>
                    </a>
                    <a href="#">
                      <li>Trust & Safety</li>
                    </a>
                    <a href="#">
                      <li>Selling on Fiverr</li>
                    </a>
                    <a href="#">
                      <li>Buying on Fiverr</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"
                  aria-expanded="false" aria-controls="collapseFour">
                  <h6>Community</h6>
                  <span className="collapse__icon"><i className="fas fa-chevron-up"></i></span>
                </button>
              </h5>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body">
                <div className="footer__item">
                  <ul>
                    <a href="#">
                      <li>Events</li>
                    </a>
                    <a href="#">
                      <li>Blog</li>
                    </a>
                    <a href="#">
                      <li>Forum</li>
                    </a>
                    <a href="#">
                      <li>Community Standards</li>
                    </a>
                    <a href="#">
                      <li>Podcast</li>
                    </a>
                    <a href="#">
                      <li>Affiliates</li>
                    </a>
                    <a href="#">
                      <li>Invite a Friend</li>
                    </a>
                    <a href="#">
                      <li>Become a Selller</li>
                    </a>
                    <a href="#">
                      <li>Fiverr Elevate</li>
                      <p>Exclusive Benefits</p>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFive">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"
                  aria-expanded="false" aria-controls="collapseFive">
                  <h6>More From Fiverr</h6>
                  <span className="collapse__icon"><i className="fas fa-chevron-up"></i></span>
                </button>
              </h5>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
              <div className="card-body">
                <div className="footer__item">
                  <ul>
                    <a href="#">
                      <li>Fiverr Business</li>
                    </a>
                    <a href="#">
                      <li>Fiverr Pro</li>
                    </a>
                    <a href="#">
                      <li>Fiverr Studios</li>
                    </a>
                    <a href="#">
                      <li>Fiverr Logo Maker</li>
                    </a>
                    <a href="#">
                      <li>Fiverr Guides</li>
                    </a>
                    <a href="#">
                      <li>Get Inspired</li>
                    </a>
                    <a href="#">
                      <li>ClearVoice</li>
                      <p>Content Marketing</p>
                    </a>
                    <a href="#">
                      <li>AND CO</li>
                      <p>Invoice Software</p>
                    </a>
                    <a href="#">
                      <li>Learn</li>
                      <p>Online Courses</p>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- FOOTER TOP MOBILE --> */}

    <div className="footer__bot container px-0 py-4 border-top">
      <div className="footer__botLeft ">
        <p className="footer__svg">
          <svg width="91" height="27" viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg"
            style="font-size: 16px; line-height: normal; word-spacing: normal;">
            <g fill="#7A7D85" style="font-size: 16px; line-height: normal; word-spacing: normal;">
              <path
                d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"
                style="font-size: 16px; line-height: normal; word-spacing: normal;"></path>
            </g>
            <g fill="#7A7D85" style="font-size: 16px; line-height: normal; word-spacing: normal;">
              <path
                d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"
                style="font-size: 16px; line-height: normal; word-spacing: normal;"></path>
            </g>
          </svg>
        </p>
        <span>© Fiverr International Ltd. 2021</span>
      </div>
      <div className="footer__botRight">
        <ul>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="footer__botRightBtn d-inline-flex">
          <button className="footer__btn rounded-pill" data-toggle="modal" data-target="#exampleModal-1">
            <i className="fa fa-globe"></i>
            <span>English</span>
          </button>
          <button className="footer__btn rounded-pill" data-toggle="modal" data-target="#exampleModal-2">
            <span>$USD</span>
          </button>
          <p><i className="fa fa-male"></i></p>
        </div>
      </div>
    </div>
  </footer>
  <div className="footer__modal">
    <div className="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Choose a language</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="my__select">
              <div className="row">
                <div className="col">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                      href="#list-home" role="tab" aria-controls="home">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>English</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                      href="#list-profile" role="tab" aria-controls="profile">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Deutsch</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                      href="#list-messages" role="tab" aria-controls="messages">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Español</span>
                      </div>
                    </a>

                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Français</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Português</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Italiano</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Nederlands</span>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Choose a currency </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="my__select">
              <div className="row">
                <div className="col">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                      href="#list-home" role="tab" aria-controls="home">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>United States Dollar (USD) - $</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                      href="#list-profile" role="tab" aria-controls="profile">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Euro (EUR) - €</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                      href="#list-messages" role="tab" aria-controls="messages">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>British Pound (GBP) - £</span>
                      </div>
                    </a>

                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Australian Dollar (AUD) - A$ </span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Canadian Dollar (CAD) - C$</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>Israeli Shekel (ILS) - ₪</span>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                      href="#list-settings" role="tab" aria-controls="settings">
                      <div className="modal__myText">
                        <i className="fa fa-check"></i><span>New Zealand Dollar (NZD) - NZ$</span>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
    );
}

export default Footer;
