import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer1-container">
          <h3 className="vaya-footer">Vietnamese American Youth Alliance</h3>
          <div className="tet-logo-container">
            <a className="logo" to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAAA2CAMAAABupYznAAAAUVBMVEUAAAAhIB8kIhwjIh0lIhslIxwkIRwkIBwlIRsjIhskIxwlIhwgIBAkIRslIhwgICAlIB0kIRwlIh0lIRwlIRsmIhwlIhsjIhslIRslIhwlIhwOHScyAAAAGnRSTlMAIH+fYL+/P99fQO8Qj28QMK/vz5+Az1DPz98PRcgAAAKCSURBVGje3drbkqIwEIDh7gRCB0g4iIft93/Q1bK2KDUh9MwykPkvBVN8MQXGEg4VxoM842gEeRYFTT3kWZjTuFzXXFjUqBby7bd5AH6bZ5OwcMOFRr430qUcnK87+FeH4ToIFD47/ub0k2j1eHO1HjnQRV+fxxXHupTu+u4qeFX2ebbnaBqfIF6Vnqf0PHK0UbezKFZp8auiruSFCL8i8iMvhinRPJ1yUU283FkswpJZIornWqkosOIaCkyVSITEQlE8QqGoKwOz4sePYQWiGSQRxfMyUW9eGyroEHAyrxUSEbFElO4sEsFHNd2H+EggOrNMlM6KRL16TfM9Uq9dBSLk/y5qUCBad6IWiLxYlM7sKvqzgYj9jqKOtxA17X6iehMR+/1E121EZj9RsY2I24N9RietHmlzSoiahsP53UR9+OW5ypsFkYKeODEEB0psOzQsVPJn1Xy4G0MDdq/7y6lpo6LIveW2mwgML3QZ5m1cTATEgZpviUi/JRHVnKi0CZHmUK1AlE4iArNuzxMXKQ6Fu4jW7veaPisR9CtImJUIcOJUt7xEAIXhRDYuGg52Z5jOLdzDYjjxQuZH79439ZZEVDI5hGd9VVlrKx+c85jIh2dglyfsfLz0dWod2LAo9lus+5ZoqN/qJaL5+4FTxSMXXH7qLhJkJaJ0WixK52QiPL5IC3d8xxc5kchmIPISEUEGokoishmICASiCTIQTQIRYQYiwvWipocMRBZmURqUgUjBahH1kIFIwWqRQTi+iCpYK2oswO4in7pI1cJKEd1PPYAIsKC0Jy0i9xj1EKL4BtbMF7kkotPgLALAgUSP2uqq3GDMiehkBq1sn+c/wf4CMdHRzBWLS4IAAAAASUVORK5CYII="
                alt="Logo"
                className="vaya-footer-logo"
              />
            </a>
            <div className="navinfo">
              <div className="navdate">
                <p className="tet-footer-info">JAN 31 - FEB 2</p>
              </div>
              <div className="navlocation">
                <p className="tet-footer-info">NTC PARK - LIBERTY STATION</p>
              </div>
            </div>
          </div>
          <h3 className="vaya-footer-ny">Chức Mừng Năm Mới / Happy New Year</h3>
          <h3 className="footer-date-responsive">JAN 31 - FEB 2</h3>
          <div className="tet-social-container">
            <a
              className="socials"
              href="https://www.instagram.com/sandiegotetfestival/"
              target="_blank"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAASFBMVEUAAAAkIhsjIB0kIRwkIRwlIhwlIRslIRwlIR0jIBwgICAgIBAlIRslIxwjIBskJBwkIRwlIhwkIBwlIB0lJSAlJRsjIh0lIhwUeVdDAAAAF3RSTlMAXyB/j+/fv99fEBDPv1BAv58/MDAwn2zdWYYAAAFTSURBVDjLzZXLdoQgDEBDAiiCOGqn/P+f1shhQAdYtF3M3fi6J4RHInwgTy9uLM+6uUgVKqgV39RJhibSXl0cQ4cRL3FP90HiDXKnXcbmHPQGVYTmTIok2EVogGwvkFiPJ1MVSc8IyyW0CsFVXXNoA8AQgkqvvo5XdJkv4vQaUgPQcdkhwsOIbNIcDpxBAMEJxItP8y1lr16rawDENyWhIlNIpNzasglxd+gRGN+TcWQVz9uBT5HtyIbdlD3b1JH5IGC5r0NbnlLgHNo2ZUwD55XB/5GnmGVi7qYBw32CDtoycegysOnIk2I7bgq7Gjsy+MDMRKymwH8+SLk+I8pDRfClDChcPHkWSnlrlZVFzCZcywoUL1gHVxQsyNwYWjW+5gZ662eVPlh8lbE+qyzsyrJRnOvlKo0x7o62t37WQeOvmzmDa/03IRuteN/EDb/D5/ED7E8w1/YgfoQAAAAASUVORK5CYII="
                alt="Instagram Logo"
              />
            </a>
            <a
              className="socials"
              href="https://www.youtube.com/channel/UCkz1ggOvU21gOlGvhzyK38g"
              target="_blank"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAARVBMVEUAAAAkIhwkIhwjIxskIRwlIxwlIhskIRwjIRslIhwlIRskIRwlIhslIh0gICAoICAoIBghISElIRwgIBAlIh0lIB0lIhwq7vvTAAAAFnRSTlMAnz9ff7/fv0/vz69gMBAgIB+/EI+P1mE7/gAAAMNJREFUOMvt1MsOgyAQQNEZHBHEty3//6mVRFQoOLYrF96NiTkhoxDg6b51bdMQIaIpl2opZekySKREREnbk/T7iI1lmnarLNs+CvIYN1zzuN6w5dPedtEiSe1xa4OKoUrgccUiwgCNvI6XSGf+nUpgGDCNmwR2PJhF5Vd2iTL5NoX7aAyVx132A/svrPy4PPbDBrWwdmW7R4+15fvpiP53+AWPFWxNnDVw6HV+FdAMQUIRoalccsk9DSISFUU7w9Nt+wA9wkUW50t2+QAAAABJRU5ErkJggg=="
                alt="Youtube Logo"
              />
            </a>
          </div>
        </div>
        <div className="footer2">
          <h3 className="footer-browse">Browse</h3>

          <li className="navbutton">
            <a href="/info">VISITOR INFO</a>
          </li>
          <li className="navbutton">
            <a href="/entertainment">ENTERTAINMENT</a>
          </li>
          <li className="navbutton">
            <a href="/vendors">VENDORS</a>
          </li>
          <li className="navbutton">
            <a href="/schedule">SCHEDULE</a>
          </li>
          <li className="navbutton">
            <a href="/mvsd">MISS VIETNAM SD</a>
          </li>
          <li className="navbutton">
            <a href="/sponsors">SPONSORS</a>
          </li>
          <li className="navbutton">
            <a href="/volunteers">VOLUNTEERS</a>
          </li>
        </div>
        <div className="footer3">
          <h3 className="footer-browse find-us-responsive">Find Us</h3>
          <p className="find-us-footer">NTC PARK - LIBERTY STATION</p>
          <p className="find-us-address">
            2455 Cushing Rd<br></br>San Diego, CA 92106
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
