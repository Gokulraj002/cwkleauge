import React from "react";
import {
  FaBullhorn,
  FaNetworkWired,
  FaTrademark,
  FaSmile,
  FaHandsHelping,
  FaImage,
  FaMedal,
  FaHashtag,
  FaAd,
  FaHeartbeat,
  FaChartLine,
  FaCamera,
} from "react-icons/fa";

const benefits = [
  { icon: <FaBullhorn />, title: "Massive Exposure & Publicity" },
  { icon: <FaNetworkWired />, title: "Networking & Connections" },
  { icon: <FaTrademark />, title: "Strengthens Your Personal Brand" },
  { icon: <FaSmile />, title: "Fun and Stress Relief" },
  { icon: <FaHandsHelping />, title: "Community Impact" },
  { icon: <FaImage />, title: "Enhances Public Image and Reputation" },
  { icon: <FaMedal />, title: "Builds Confidence and Competitive Spirit" },
  { icon: <FaHashtag />, title: "Opportunity for Social Media Growth" },
  { icon: <FaAd />, title: "Potential for Endorsements or Sponsorships" },
  { icon: <FaHeartbeat />, title: "Promotes Fitness & Team Spirit" },
  { icon: <FaChartLine />, title: "Career Growth" },
  { icon: <FaCamera />, title: "Exclusive Photo Shoot Will Be Done" },
];

const ParticipationBenefits = () => {
  return (
    <section className="py-5" id="benefits">
      <div className="container aos">
        <h2 className="font text-center mx-auto" style={{ maxWidth: "500px" }}>
          <span className="position-relative text-dark">
            Participation Benefits
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
        </h2>
        <div className="row g-4 mt-3 " data-aos="zoom-in-down">
          {benefits.map((benefit, index) => (
            <div className="col-md-6 " key={index}>
              <div className="benefit-item d-flex align-items-center">
                <div className="benefit-icon fs-1 me-3 bg-txt ms-md-5 ps-md-5">
                  {benefit.icon}
                </div>
                <div>
                  <p className="font3 mb-0">{benefit.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipationBenefits;
