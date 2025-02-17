import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg2 font2 text-white py-4">
      <div className="container">
        <div className="row ">
          {/* CWKL Description */}
          <div className="col-md-5 mb-3">
            <img src={Logo} alt="Logo" className="w-50" />
            <p>Celebrity Women's Kabaddi League</p>
            <p className="w-50">
              The premier global tournament dedicated to the exhilarating sport
              of Kabaddi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mt-md-5 mt-2">
            <h4 className="mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              {[
                { name: "About Us", link: "#about" },
                { name: "Concept", link: "#concept" },
                { name: "Organizer", link: "#organizer" },
                { name: "Benefits", link: "#benefits" },
                { name: "Highlights", link: "#highlights" },
              ].map((item) => (
                <li key={item.name} className="pb-2">
                  <a
                    href={item.link}
                    className="text-white text-decoration-none"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mt-md-5 mt-2">
            <h4 className="mb-3">Connect With Us</h4>
            <p className="mb-1">MOB: 99453 27739</p>
            <p className="mb-3">
              E-MAIL:{" "}
              <a
                href="mailto:eaglemediacreations6@gmail.com"
                className="text-white text-decoration-none"
              >
                eaglemediacreations6@gmail.com
              </a>
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-4">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-4">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
