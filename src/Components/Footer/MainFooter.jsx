import React, { Component } from "react";
import { Link } from "react-router-dom";

//styling
import "../Footer/MainFooter.css";

/**
 *
 * assests
 */
import AppleStore from "../../Drawables/apple-store.jpg";
import PlayStore from "../../Drawables/play-store-3.jpg";
import plus_logo from "../../Drawables/payet1.png";

/**
 *
 * material icons
 */
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpDropDownActive: false,
      userDropDownActive: false,
    };
  }
  render() {
    return (
      <footer>
        <div className="ftr-ctr">
          <div className="ftr-upper-flex">
            <div className="ftr-ns1">
              <div className="ftr-logo">
                <img src={plus_logo} alt="" />
                <div className="">
                  Your number one trusted online mall in Uganda
                </div>
              </div>
              <div className="ftr-app">
                <h3>Get Our App On . . . .</h3>
                <div className="ftr-app-stores" style={{ marginTop: "15px" }}>
                  <img
                    src={PlayStore}
                    alt=""
                    height="45"
                    width="150"
                    style={{ marginRight: "5px" }}
                  />
                  <img src={AppleStore} alt="" height="45" width="150" />
                </div>
              </div>
              <div className="ftr-social">
                <div>Follow Payet On Social Media</div>
                <span>
                  <LinkedInIcon />
                </span>
                <span>
                  <TwitterIcon />
                </span>
                <span>
                  <YouTubeIcon />
                </span>
                <span>
                  <FacebookIcon />
                </span>
                <span>
                  <InstagramIcon />
                </span>
              </div>
            </div>
            <div className="ftr-ns2">
              <div className="ftr-hdg">Payet Canteen</div>
              <div className="ftr-link">Payet Flavours</div>
              <div className="ftr-link">How to Order</div>
              <div className="ftr-feedback">
                <form autoComplete="off">
                  <input
                    required
                    type="text"
                    name="_comment"
                    className="comment"
                    placeholder="We Value Your Feedback..."
                  />
                  <br />
                  <input
                    type="text"
                    name="_contact"
                    className="contact"
                    placeholder="Email or Phone Number(Optional)"
                  />
                  <br />
                  <button className="footer-form-button">submit</button>
                  <br />
                  <span>{"Sending Message"}</span>
                </form>
              </div>
            </div>
            <div className="ftr-ns3">
              <div className="ftr-hdg">Payet Services</div>
              <div className="ftr-link">
                <Link
                  to="/help/request"
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  Save with E-wallet
                </Link>
              </div>
              <div className="ftr-link">How to Order</div>
              <div className="ftr-link">Help &amp; FAQs</div>
              <div className="ftr-link">Tickets &amp; Events</div>
              <div className="ftr-link">Festivals &amp; Seasons</div>
            </div>
            <div className="ftr-ns4">
              <div className="ftr-hdg">Explore Payet</div>
              <div className="ftr-link">About payet</div>
              <div className="ftr-link">How to Order</div>
              <div className="ftr-link">Help &amp; FAQs</div>
              <div className="ftr-link">Help &amp; FAQs</div>
              <div className="ftr-link">Help &amp; FAQs</div>
              <div className="ftr-link">Help &amp; FAQs</div>
            </div>
          </div>
          <div className="ftr-lw-flex">
            <div className="ftr-lw-flex-ctr-1">
              <div>Payet Foods</div>
              <div>Payet Kitchen</div>
              <div>Payet Hotels</div>
              <div>Payet Inns</div>
            </div>
            <div className="ftr-lw-flex-ctr-2">
              <div>Payet E-wallet</div>
              <div>Payet tickets</div>
            </div>
          </div>
          <div className="ftr-lw-center">
            <div>{new Date().getFullYear()} &copy; KANLYTE UGANDA LTD</div>
            <div>All Rights Reserved</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default MainFooter;
