import React from "react";
import { actLogout } from "containers/shared/Auth/module/actions";
import { Menu, Dropdown, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./headerLoggedIn.scss";

export default function HeaderLoggedIn() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.AuthReducer);
  // const currentUserUpload = JSON.parse(
  //   localStorage.getItem("fiverrUserUpload")
  // );
  const logOut = () => {
    dispatch(actLogout());
    window.location.replace("/");
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to={`/user/${currentUser?.email}`}>Profile</Link>
      </Menu.Item>

      {currentUser?.role === "ADMIN" ? (
        <Menu.Item key="2">
          <Link to="/admin">Trang Admin</Link>
        </Menu.Item>
      ) : null}

      <Menu.Item key="3">
        <p style={{ color: "green" }} onClick={logOut}>
          Logout
        </p>
      </Menu.Item>
    </Menu>
  );
  const nameAvatar = currentUser?.email
    .split("")
    .splice(0, 1)
    .toString()
    .toUpperCase();
  const renderAvatar = () => {
    // if (currentUser) {
      // return (
      //   <img src={currentUser.avatar} className="avatar-mini" alt="" />
      // );
    // } else 
    if (currentUser?.avatar) {
      return <img className="avatar-mini" src={currentUser.avatar} alt="" />;
    } else {
      return <Button className="name-avatar">{nameAvatar} </Button>;
    }
  };
  return (
    <div>
      <div id="header-fixed-loggedin">
        <div id="header__content-loggedin">
          <div className="header__icon-fixed">
            <Link to="/">
              <img src="/images/Fiverr_Logo_09.2020-fixed.svg" alt="Fiverr" />
            </Link>
          </div>
          <div className="header__nav-fixed">
            <a className="btn-dis-fixed btn-dis-fixed-pro" href="# ">
              Fiverr Pro
            </a>
            <a className="btn-dis-fixed" href="# ">
              Explore
            </a>

            <a className="btn-dis-fixed" href="# ">
              Message
            </a>
            <a href="# ">Lists</a>
            <a href="# ">Orders</a>

            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
              arrow
            >
              {renderAvatar()}
            </Dropdown>
          </div>
        </div>
        <div id="header-search">
          <input type="text" placeholder="Find Services" />
          <i className="icon-input-header fa fa-search" />
          <button>Search</button>
        </div>
      </div>
      <div id="category__content-loggedin">
        <ul>
          <li className="li-cate ">
            <a href="# ">Graphics &amp; Design</a>
            <div className="category__hover cate-active">
              <ul className="hover__item">
                <h6>Logo &amp; Brand Identity</h6>
                <li>
                  <a href="# ">Logo Design</a>
                </li>
                <li>
                  <a href="# ">Brand Style Guides</a>
                </li>
                <li>
                  <a href="# ">Business Cards &amp; Staitionery</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Gaming</h6>
                <li>
                  <a href="# ">Game Art</a>
                </li>
                <li>
                  <a href="# ">Graphics for Streamers</a>
                </li>
                <li>
                  <a href="# ">Twitch Store</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Art &amp; Illustration</h6>
                <li>
                  <a href="# ">Illustration</a>
                </li>
                <li>
                  <a href="# ">
                    Pattern Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Portraits &amp; Caricatures</a>
                </li>
                <li>
                  <a href="# ">Cartoons &amp; Comics</a>
                </li>
                <li>
                  <a href="# ">Tattoo Design</a>
                </li>
                <li>
                  <a href="# ">Storyboards</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Web &amp; App</h6>
                <li>
                  <a href="# ">
                    Website Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    App Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    UX Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    Landing Page Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Social Media Design</a>
                </li>
                <li>
                  <a href="# ">
                    Email Desgin <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    Icon Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">AR Filters &amp; Lenses</a>
                </li>
                <li>
                  <a href="# ">Web Banners</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Packaging &amp; Labels</h6>
                <li>
                  <a href="# ">Book Design</a>
                </li>
                <li>
                  <a href="# ">Album Cover Design</a>
                </li>
                <li>
                  <a href="# ">Postcard Cover Art</a>
                </li>
                <li>
                  <a href="# ">Packaging Design</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Visual Design</h6>
                <li>
                  <a href="# ">Photoshop Editing</a>
                </li>
                <li>
                  <a href="# ">Presentation Design</a>
                </li>
                <li>
                  <a href="# ">Infographic Design</a>
                </li>
                <li>
                  <a href="# ">Vector Tracing</a>
                </li>
                <li>
                  <a href="# ">Resume Design</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Architecture &amp; Building</h6>
                <li>
                  <a href="# ">Architecture &amp; Interior Design</a>
                </li>
                <li>
                  <a href="# "> Landscape Design</a>
                </li>
                <li>
                  <a href="# ">Building Information Modeling</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Fashion &amp; Merchandise</h6>
                <li>
                  <a href="# ">
                    Fashion Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Architecture &amp; Interior Design</a>
                </li>
                <li>
                  <a href="# ">Landscape Design</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Print Design</h6>
                <li>
                  <a href="# ">Flyer Design</a>
                </li>
                <li>
                  <a href="# ">Brochure Design</a>
                </li>
                <li>
                  <a href="# ">
                    Signage Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Poster Design</a>
                </li>
                <li>
                  <a href="# ">Catalog Design</a>
                </li>
                <li>
                  <a href="# ">Menu Design</a>
                </li>
                <li>
                  <a href="# ">Postcard Design</a>
                </li>
                <li>
                  <a href="# ">Invitation Design</a>
                </li>
              </ul>
              <ul className="hover__item">
                <h6>Product &amp; Characters Design</h6>
                <li>
                  <a href="# ">Industrial &amp; Product Design</a>
                </li>
                <li>
                  <a href="# ">Character Modeling</a>
                </li>
                <li>
                  <a href="# ">T-Shirts &amp; Merchandise</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate ">
            <a href="# ">Digital Marketing</a>
            <div className="category__hover ">
              <ul className="hover__item">
                <li>
                  <a href="# ">Marketing Strategy</a>
                </li>
                <li>
                  <a href="# ">Social Media Marketing</a>
                </li>
                <li>
                  <a href="# ">Social Media Advertising</a>
                </li>
                <li>
                  <a href="# ">Search Engine Optimization(SEO)</a>
                </li>
                <li>
                  <a href="# ">Local SEO</a>
                </li>
                <li>
                  <a href="# ">Public Relations</a>
                </li>
                <li>
                  <a href="# ">Content Marketing</a>
                </li>
                <li>
                  <a href="# ">Video Marketing</a>
                </li>
                <li>
                  <a href="# ">Email Marketing</a>
                </li>
                <li>
                  <a href="# ">Web Analytics</a>
                </li>
                <li>
                  <a href="# ">Crowdfunding</a>
                </li>
              </ul>
              <ul className="hover__item">
                <li>
                  <a href="# ">
                    Text Message Marketing <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Search Engine Marketing (SEM)</a>
                </li>
                <li>
                  <a href="# ">
                    Display Advertising <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">E-Commerce Marketing</a>
                </li>
                <li>
                  <a href="# ">Influencer Marketing</a>
                </li>
                <li>
                  <a href="# ">Community Management</a>
                </li>
                <li>
                  <a href="# ">Mobile App Marketing</a>
                </li>
                <li>
                  <a href="# ">Music Promotion</a>
                </li>
                <li>
                  <a href="# ">Book &amp; eBook Marketing</a>
                </li>
                <li>
                  <a href="# ">Affiliate Marketing</a>
                </li>
                <li>
                  <a href="# ">Podcast Marketing</a>
                </li>
                <li>
                  <a href="# ">Web Traffic</a>
                </li>
                <li>
                  <a href="# ">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate ">
            <a href="# ">Writing &amp; Translation</a>
            <div className="category__hover cate-three">
              <ul className="hover__item">
                <li>
                  <a href="# ">Articles &amp; Blog Posts</a>
                </li>
                <li>
                  <a href="# ">Translation</a>
                </li>
                <li>
                  <a href="# ">Proofreading &amp; Editing</a>
                </li>
                <li>
                  <a href="# ">Resume Writing</a>
                </li>
                <li>
                  <a href="# ">Cover Letters</a>
                </li>
                <li>
                  <a href="# ">Linkedin Profiles</a>
                </li>
                <li>
                  <a href="# ">
                    Ad Copy <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Sales Copy</a>
                </li>
                <li>
                  <a href="# ">Social Media Copy</a>
                </li>
                <li>
                  <a href="# ">Email Copy</a>
                </li>
                <li>
                  <a href="# ">Case Studies</a>
                </li>
                <li>
                  <a href="# ">Book &amp; eBook Writing</a>
                </li>
                <li>
                  <a href="# ">
                    Book Editing <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Scriptwriting</a>
                </li>
                <li>
                  <a href="# ">Podcast Writing</a>
                </li>
                <li>
                  <a href="# ">Beta Reading</a>
                </li>
                <li>
                  <a href="# ">Creative Writing</a>
                </li>
                <li>
                  <a href="# ">Brand Voice &amp; Tone</a>
                </li>
                <li>
                  <a href="# ">UX Writing</a>
                </li>
                <li>
                  <a href="# ">Speechwriting</a>
                </li>
                <li>
                  <a href="# ">
                    eLearing Content Development <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">White Papers</a>
                </li>
                <li>
                  <a href="# ">Website Content</a>
                </li>
                <li>
                  <a href="# ">Product Descriptions</a>
                </li>
                <li>
                  <a href="# ">Press Releases</a>
                </li>
                <li>
                  <a href="# ">Business Names &amp; Slogans</a>
                </li>
                <li>
                  <a href="# ">Technical Writing</a>
                </li>
                <li>
                  <a href="# ">Legal Writing</a>
                </li>
                <li>
                  <a href="# ">Grant Writing</a>
                </li>
                <li>
                  <a href="# ">Transcripts</a>
                </li>
                <li>
                  <a href="# ">Research &amp; Summaries</a>
                </li>
                <li>
                  <a href="# ">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate ">
            <a href="# ">Video &amp; Animation</a>
            <div className="category__hover pos-active cate-three">
              <ul className="hover__item">
                <li>
                  <a href>Whiteboard &amp; Animated Explainers</a>
                </li>
                <li>
                  <a href>Video Editing</a>
                </li>
                <li>
                  <a href>Short Video Ads</a>
                </li>
                <li>
                  <a href>Lyric &amp; Music Videos</a>
                </li>
                <li>
                  <a href>Character Animation</a>
                </li>
                <li>
                  <a href>Logo Animation</a>
                </li>
                <li>
                  <a href>Animated GIFs</a>
                </li>
                <li>
                  <a href>App &amp; Website Previews</a>
                </li>
                <li>
                  <a href>Subtitles &amp; Captions</a>
                </li>
                <li>
                  <a href>
                    E-Commerce Product Videos <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href>Spokenperson Videos</a>
                </li>
                <li>
                  <a href>Live Action Explainers</a>
                </li>
                <li>
                  <a href>3D Product Animation</a>
                </li>
                <li>
                  <a href>Visual Effects</a>
                </li>
                <li>
                  <a href>
                    Unboxing Videos <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href>Slideshow Videos</a>
                </li>
                <li>
                  <a href>eLearning Video Production</a>
                </li>
                <li>
                  <a href>Screencasting Videos</a>
                </li>
                <li>
                  <a href>
                    Article to Video <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href>Animation for Kids</a>
                </li>
                <li>
                  <a href>Intros &amp; Outros</a>
                </li>
                <li>
                  <a href>Animation for Streamers</a>
                </li>
                <li>
                  <a href>
                    Lottie &amp; Website Animation <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href>Game Trailers</a>
                </li>
                <li>
                  <a href>Book Trailers</a>
                </li>
                <li>
                  <a href>
                    Drone Videography <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href>Real Estate Photography</a>
                </li>
                <li>
                  <a href>
                    Local Photography <span>BETA</span>
                  </a>
                </li>
                <li>
                  <a href>Others</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate ">
            <a href="# ">Music &amp; Audio</a>
            <div className="category__hover">
              <ul className="hover__item">
                <li>
                  <a href="# ">Voice Over</a>
                </li>
                <li>
                  <a href="# ">Producers &amp; Composers</a>
                </li>
                <li>
                  <a href="# ">Singers &amp; Vocalist</a>
                </li>
                <li>
                  <a href="# ">Mixing &amp; Mastering</a>
                </li>
                <li>
                  <a href="# ">Session Musicians</a>
                </li>
                <li>
                  <a href="# ">Online Music Lessons</a>
                </li>
                <li>
                  <a href="# ">Podcast Editing</a>
                </li>
                <li>
                  <a href="# ">Songwriters</a>
                </li>
                <li>
                  <a href="# ">
                    Beat Making <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Audiobook Production</a>
                </li>
                <li>
                  <a href="# ">Audio Ads Production</a>
                </li>
                <li>
                  <a href="# ">
                    Sound Design <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Jingles &amp; Intros</a>
                </li>
                <li>
                  <a href="# ">Dialogue Editing</a>
                </li>
                <li>
                  <a href="# ">Music Transcription</a>
                </li>
                <li>
                  <a href="# ">Voice Tuning</a>
                </li>
                <li>
                  <a href="# ">DJ Drops &amp; Tags</a>
                </li>
                <li>
                  <a href="# ">DJ Mixing</a>
                </li>
                <li>
                  <a href="# ">Remixing &amp; Mashups</a>
                </li>
                <li>
                  <a href="# ">Synth Presets</a>
                </li>
                <li>
                  <a href="# ">Meditation Music</a>
                </li>
                <li>
                  <a href="# ">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate">
            <a href="# ">Programming &amp; Tech</a>
            <div className="category__hover pos-right">
              <ul className="hover__item">
                <li>
                  <a href="# ">WordPress</a>
                </li>
                <li>
                  <a href="# ">Website Builders &amp; CMS</a>
                </li>
                <li>
                  <a href="# ">Game Development</a>
                </li>
                <li>
                  <a href="# ">
                    Development for Streamers <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Web Programming</a>
                </li>
                <li>
                  <a href="# ">E-Commerce Development</a>
                </li>
                <li>
                  <a href="# ">Mobile Apps</a>
                </li>
                <li>
                  <a href="# ">Desktop Applications</a>
                </li>
                <li>
                  <a href="# ">Supports &amp; IT</a>
                </li>
                <li>
                  <a className="cate-special" href="# ">
                    Get Your Website in a Few Steps <i className="fa fa-pen" />
                  </a>
                </li>
                <li>
                  <a href="# ">Chatbots</a>
                </li>
                <li>
                  <a href="# ">
                    Online Coding Lessons <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Cybersecurity &amp; Data Protection</a>
                </li>
                <li>
                  <a href="# ">Convert Files</a>
                </li>
                <li>
                  <a href="# ">User Testing</a>
                </li>
                <li>
                  <a href="# ">
                    QA &amp; Review <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate">
            <a href="# ">
              Data <span>NEW</span>
            </a>
            <div className="category__hover pos-right">
              <ul className="hover__item">
                <li>
                  <a href="# ">Databases</a>
                </li>
                <li>
                  <a href="# ">Data Processing</a>
                </li>
                <li>
                  <a href="# ">Data Analytics</a>
                </li>
                <li>
                  <a href="# ">Data Visualization</a>
                </li>
                <li>
                  <a href="# ">
                    Data Science <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Data Entry</a>
                </li>
                <li>
                  <a href="# ">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate">
            <a href="# ">Business</a>
            <div className="category__hover pos-right">
              <ul className="hover__item">
                <li>
                  <a href="# ">Virtual Assistant</a>
                </li>
                <li>
                  <a href="# ">
                    Market Research <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    Customer Care <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Project Management</a>
                </li>
                <li>
                  <a href="# ">Business Consulting</a>
                </li>
                <li>
                  <a href="# ">Business Plans</a>
                </li>
                <li>
                  <a href="# ">Presentations</a>
                </li>
                <li>
                  <a href="# ">Lead Generation</a>
                </li>
                <li>
                  <a href="# ">Game Concept Design</a>
                </li>
                <li>
                  <a href="# ">Legal Consulting</a>
                </li>
                <li>
                  <a href="# ">Financial Consulting</a>
                </li>
                <li>
                  <a href="# ">E-Commerce Management</a>
                </li>
                <li>
                  <a href="# ">
                    Supply Chain Management <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">HR Consulting</a>
                </li>
                <li>
                  <a href="# ">Carees Counseling</a>
                </li>
                <li>
                  <a href="# ">Flyer Distribution</a>
                </li>
                <li>
                  <a href="# ">Other</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-cate">
            <a href="# ">Lifestyle</a>
            <div className="category__hover pos-right">
              <ul className="hover__item">
                <li>
                  <a href="# ">Online Tutoring</a>
                </li>
                <li>
                  <a href="# ">Gaming</a>
                </li>
                <li>
                  <a href="# ">Astrology &amp; Psychics</a>
                </li>
                <li>
                  <a href="# ">
                    Modeling &amp; Acting <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Greeting Cards &amp; Videos </a>
                </li>
                <li>
                  <a href="# ">
                    Life Coaching <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Fitness Lessons</a>
                </li>
                <li>
                  <a href="# ">
                    Dance Lessons <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    Personal Stylist <span>NEW</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Cooking Lessons</a>
                </li>
                <li>
                  <a href="# ">Craft Lessons</a>
                </li>
                <li>
                  <a href="# ">Arts &amp; Crafts</a>
                </li>
                <li>
                  <a href="# ">Health, Nutrition &amp; Fitness</a>
                </li>
                <li>
                  <a href="# ">Family &amp; Genealogy</a>
                </li>
                <li>
                  <a href="# ">Your Message On...</a>
                </li>
                <li>
                  <a href="# ">Collectibles</a>
                </li>
                <li>
                  <a href="# ">Traveling</a>
                </li>
                <li>
                  <a href="# ">Other</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
