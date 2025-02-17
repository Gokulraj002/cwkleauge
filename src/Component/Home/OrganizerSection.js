import React from "react";
import About from "../../images/organizer.png";

const OrganizerSection = () => {
  return (
    <section className="py-5 bg-light" id="organizer">
      <div className="container aos">
        <div className="row align-items-center g-5">
          <div
            className="col-lg-6"
            data-aos="fade-right"
        
          >
            <div className="ps-lg-4">
              {/* Section Header */}
              <div className="mb-4">
                <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2">
                  Organizer
                </span>
                <p className="font3">
                  In the ever-evolving world of entertainment, few individuals
                  possess the rare ability to masterfully navigate multiple
                  facets of the industry.
                </p>
                <h2 className=" font bg-txt mb-3">NAVARASAN </h2>
              </div>

              {/* Main Content */}
              <div className=" font3">
                <p className=" mb-4">
                  stands as a distinguished figure—a visionary director, a
                  prolific producer, and a captivating actor whose work has
                  transcended generations and redefined storytelling on the
                  silver screen.
                </p>

                <div className="mb-4">
                  <p className="mb-3">
                    In the dynamic world of entertainment, where precision,
                    creativity, and grandeur define success,{" "}
                    <strong>Eagle Media Creations</strong> has emerged as a
                    premier force, setting new benchmarks in event management.
                    With over five years of unwavering commitment to excellence,
                    this powerhouse has orchestrated more than 1,500 cinema
                    events, captivating audiences and redefining the art of
                    experiential entertainment.
                  </p>
                  <p>
                    Eagle Entertainment brings a touch of elegance and precision
                    to every occasion, ensuring unforgettable experiences that
                    leave a lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            
          >
            <div className="position-relative">
              <img
                src={About}
                alt="Women's Kabaddi"
                className="w-100 shadow-sm rounded-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;
