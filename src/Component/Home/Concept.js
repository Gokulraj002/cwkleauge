import React from "react";

const Concept = () => {
  return (
    <>
      {/* what we do */}

      {/* The Concept */}
      <div className="pt-3 pb-4" id="concept">
        <div className="container my-5 aos">
          <h2 className="text-center font mb-3">
            <span className="position-relative">
              THE CONCEPT
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
          <div className="row g-4 mt-3 font3" data-aos="zoom-in">
            <div className="col-lg-3 col-mg-6 col-12">
              <div className="card text-center shadow p-4 border-0">
                <div className="fs-1">🤝</div>
                <h5 className="mt-3 fw-bold">FRANCHISE BASED</h5>
                <p className="text-muted">
                  Multi-franchise Kabaddi tournament format for the Kannada
                  industry celebrities women's only.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-mg-6 col-12">
              <div className="card text-center shadow p-4  border-0">
                <div className="fs-1">🏆</div>
                <h5 className="mt-3 fw-bold">MATCHES PLAYED</h5>
                <p className="text-muted">
                  This is a league come knockout matches to be played with 10
                  franchises.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-mg-6 col-12">
              <div className="card text-center shadow p-4  border-0">
                <div className="fs-1">📡</div>
                <h5 className="mt-3 fw-bold">BROADCAST ON</h5>
                <p className="text-muted">
                  Leading sports entertainment channels & YouTube platforms. &
                  YouTube platforms
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-mg-6 col-12">
              <div className="card text-center shadow p-4  border-0">
                <div className="fs-1">👥</div>
                <h5 className="mt-3 fw-bold">FEATURING</h5>
                <p className="text-muted">
                  Kannada industry celebrities women's only. women's only.
                  women's only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concept;
