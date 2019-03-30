import React, { Component } from "react";
class Footer extends Component {
  state = {};

  render() {
    return (
      <footer className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex">
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
