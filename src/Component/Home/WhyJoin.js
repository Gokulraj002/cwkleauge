import React from "react";

const WhyJoin = () => {
  return (
    <section className="py-5 bg2 text-white" id="join">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-12 ">
            <h2 className="font bg-txt  mx-auto" style={{ maxWidth: "500px" }}>
              <span className="position-relative bg-txt">
                WHY JOIN THE CWKL?
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
            <p className="font3 mt-4">
              Be part of an innovative sports league CWKL offers a unique twist
              on traditional kabaddi by merging elements, creating a faster,
              high-energy game that appeals to modern audiences. By joining,
              you'll be part of a cutting-edge sports league that's pushing the
              boundaries of conventional kabaddi and bringing fresh excitement
              to fans around the world.
            </p>
            <p className="font3">
              Global exposure and diverse opportunities CWKL is designed to
              attract the audience, giving players, coaches, and sponsors a
              platform to reach fans across multiple states in India. This
              league reach not only raises your profile but also opens doors for
              endorsements, partnerships and networking with influential figures
              in the sports industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
