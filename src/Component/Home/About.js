import React from "react";
import About from "../../images/about2.png";

const AboutSection = () => {
  return (
    <>
      <section className="py-5 bg-light aos" id="about">
        <div className="container">
          {/* Main Content Row */}
          <div className="row align-items-center g-5 ">
            {/* Left Column - Image */}

            {/* Right Column - Content */}
            <div className="col-lg-6" data-aos="zoom-in-right">
              <div className="ps-lg-4">
                {/* Section Header */}
                <div className="mb-4">
                  <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2">
                    ABOUT US
                  </span>
                  <h2 className=" font  mb-3">
                    CWKL -{" "}
                    <span className="bg-txt">
                      Celebrity Women's Kabaddi League
                    </span>
                  </h2>
                </div>

                {/* Main Content */}
                <div className=" font3">
                  <p className=" mb-4">
                    Welcome to the Celebrity Women's Kabaddi League (CWKL), the
                    premier global tournament dedicated to the exhilarating
                    sport of Kabaddi.
                  </p>

                  <div className="mb-4">
                    <p className="mb-3">
                      At CWKL, we celebrate the spirit of kabaddi in its most
                      dynamic and accessible form, bringing together teams and
                      fans from around the Kannada Industry to experience the
                      thrill of the{" "}
                      <strong>
                        KABADDI TOURNAMENT WITH 100+ WOMEN'S CELEBRITY.
                      </strong>
                    </p>
                    <p>
                      CWKL has the vision to give the best platform to all
                      women's celebrity encourage them to play professional
                      kabaddi bring development in them and showcase their
                      talent to the world. They aim to work hard with these
                      talented celebrities, groom them, and eventually promote
                      this game at the grassroots level. They are passionate
                      about Kabaddi and have visionary investments in sports,
                      entertainment, and grassroots development of celebrities.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="feature-icon bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                          <div
                            className="bg-txt"
                            style={{ width: "24px", height: "24px" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          </div>
                        </div>
                        <span className="fw-medium">
                          Professional Development
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="feature-icon bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                          <div
                            className="bg-txt"
                            style={{ width: "24px", height: "24px" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          </div>
                        </div>
                        <span className="fw-medium">Talent Showcase</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {/* <div className="mt-4">
                  <button className="btn bg btn-sm ">
                    Explore Our Concept
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ms-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in-left">
              <div className="position-relative">
                <img
                  src={About}
                  alt="Women's Kabaddi"
                  className="w-100 rounded-3 shadow-lg"
                />
                <div className="position-absolute bottom-0 start-0 w-100 h-25 bg-gradient-to-t from-dark to-transparent"></div>

                {/* Overlay Badge */}
                <div className="position-absolute top-0 end-0 bg text-white px-4 py-2 rounded-start mt-4">
                  <span className="fw-bold">Season 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5 text-center aos">
        <div className="" data-aos="zoom-in">
          <h2 className=" font mb-3">
            <span className="position-relative">
              WHAT WE DO
              <span
                className="position-absolute w-50 h-2 bg-primary rounded"
                style={{
                  height: "3px",
                  bottom: "-10px",
                  left: "25%",
                  right: "25%",
                }}
              ></span>
            </span>
            {/* <span className="bg-txt">Celebrity Women's Kabaddi League</span> */}
          </h2>
          <p className="font3 mt-2">
            The CWKL is not just a tournament; it's a celebration of the game.
            Featuring teams from diverse regions competing in a series of
            electrifying matches. Our league structure is designed to foster
            intense competition while maintaining the fun and informal nature
            that makes Kabaddi so beloved.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
