import "../../Styles/Common-css/footer.css"

function Footer() {
  return (
    <>
      <footer className="footer-section">
  <div className="container">
    <div className="footer-cta pt-5 pb-5" id="foooter-parent">
      <div className="row">
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt"></i>
            <div className="cta-text">
              <h4>Find us</h4>
              <span>5/512 Ananatpur-AndhraPradesh</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone"></i>
            <div className="cta-text">
              <h4>Call us</h4>
              <span>9703328790</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="far fa-envelope-open"></i>
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>NareshSanjeev07@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-5" >
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="">
                <img
                  src="https://res.cloudinary.com/dv5tozhs3/image/upload/v1732380604/footer-logo_i3otag.png"
                  className="img-fluid"
                  alt="logo"
                  id="E-tech-logo"
                />
              </a>
            </div>
            <div className="footer-text" id="foooter-parent">
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing elit,
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="footer-social-icon" id="foooter-parent">
              <span>Follow us</span>
              <a href="#">
                <i className="fa-brands fa-facebook-f" id="footsocial"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" id="footsocial"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter" id="footsocial"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github" id="footsocial"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30" >
          <div className="footer-widget">
            <div className="footer-widget-heading" >
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Expert Team</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50" >
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>
              Copyright &copy; 2024, All Right Reserved{" "}
              <a href="@githublink">Naresh</a>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}
export default Footer;
