// import React, { useEffect } from "react";
import CountUp from "react-countup";
import {
  FaTv,
  FaNewspaper,
  FaUsers,
  FaRadiation,
  FaFacebook,
  FaDungeon,
  FaOutdent,
} from "react-icons/fa";
// import AOS from "aos";

const highlights = [
  { number: 10, title: "TEAMS OF KARNATAKA" },
  { number: 100, title: "KANNADA FILM AND SERIAL ACTRESS" },
  { number: 23, title: "MATCHES ON TOURNAMENT" },
  { number: 50, title: "MILLION LIVE VIEWERS" },
  { number: 5, title: "MILLION DIGITAL VIEWERS" },
  { number: 2025, title: "TOURNAMENT YEAR" },
];

const reachData = [
  {
    icon: <FaOutdent />,
    title: "OUTDOOR",
    description: "Hoardings Standees",
    number: 26.3,
    suffix: "Million",
  },
  {
    icon: <FaTv />,
    title: "BROADCAST",
    description: "Doordarshan Sports",
    number: 50,
    suffix: "Million",
  },
  {
    icon: <FaNewspaper />,
    title: "PRINT & PR",
    description: "National & Regional Dailies, Press Conferences",
    number: 12,
    suffix: "Million",
  },
  {
    icon: <FaRadiation />,
    title: "RADIO AUDIENCE",
    description: "Across Team States",
    number: 10.9,
    suffix: "Million",
  },
  {
    icon: <FaFacebook />,
    title: "SOCIAL MEDIA",
    description: "Impressions Across Verticals",
    number: 5,
    suffix: "Million",
  },
  {
    icon: <FaUsers />,
    title: "SPECTATORS",
    description: "Total In-Venue Audience",
    number: 33000,
    suffix: "",
  },
  {
    icon: <FaDungeon />,
    title: "NON TRADITIONAL",
    description: "Cinema Tailoring",
    number: 3.4,
    suffix: "Million",
  },
];

const HighlightsReach = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  // }, []);

  return (
    <>
      {/* Highlights Section */}
      <section className="py-5 bg2" id="highlights">
        <div className="container">
          <h2
            className="text-center font mx-auto position-relative mb-5 text-white"
            style={{ maxWidth: "500px" }}
            // data-aos="fade-down"
          >
            HIGHLIGHTS
            <span
              className="position-absolute w-50 h-2 bg-primary rounded"
              style={{
                height: "3px",
                bottom: "-10px",
                left: "25%",
                right: "25%",
              }}
            ></span>
          </h2>

          <div className="row g-4 mt-3">
            {highlights.map((highlight, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={index}
                // data-aos="zoom-in"
                // data-aos-delay={index * 100}
              >
                <div className="highlight-card text-center p-4 shadow-sm bg-white rounded h-100 d-flex flex-column justify-content-center align-items-center transition-all hover-shadow">
                  <div className="highlight-number fs-1 fw-bold bg-txt pb-2 mb-3 position-relative">
                    <CountUp
                      start={0}
                      end={highlight.number}
                      duration={8}
                      separator=","
                    />
                    <span
                      className="position-absolute w-25 h-2 bg-primary rounded"
                      style={{ height: "3px", bottom: "0", left: "37.5%" }}
                    ></span>
                  </div>
                  <p className="mt-2 font2 mb-0">{highlight.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <p className="font3 fw-bold py-3 px-4 bg-primary text-white d-inline-block rounded-pill shadow-sm">
              AUCTION TO BE CONDUCTED WITH POINTS FOR PLAYERS
            </p>
          </div>
        </div>
      </section>

      {/* Reach Section */}
      <section className="py-5" id="reach">
        <div className="container">
          <h2
            className="text-center font mx-auto position-relative mb-5"
            style={{ maxWidth: "500px" }}
            // data-aos="fade-down"
          >
            ESTIMATE REACH
            <span
              className="position-absolute w-50 h-2 bg-primary rounded"
              style={{
                height: "3px",
                bottom: "-10px",
                left: "25%",
                right: "25%",
              }}
            ></span>
          </h2>

          <div className="row g-4 justify-content-center">
            {reachData.map((reach, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={index}
                // data-aos="flip-up"
                // data-aos-delay={index * 100}
              >
                <div className="reach-card text-center p-4 shadow-sm bg-white rounded d-flex flex-column align-items-center justify-content-center transition-all hover-shadow">
                  {/* Icon */}
                  <div
                    className="reach-icon d-flex align-items-center justify-content-center fs-1 rounded-circle bg-light bg-txt mb-3"
                    style={{ width: "75px", height: "75px" }}
                  >
                    {reach.icon}
                  </div>

                  {/* Title & Description */}
                  <h5 className="mt-2 font2">{reach.title}</h5>
                  <p className="text-muted font3">{reach.description}</p>

                  {/* Number Animation */}
                  <div className="font text-dark fw-bold mt-2 fs-4">
                    <CountUp
                      start={0}
                      end={reach.number}
                      duration={13}
                      separator=","
                      decimals={reach.number % 1 === 0 ? 0 : 1}
                    />
                    {reach.suffix}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </>
  );
};

export default HighlightsReach;
