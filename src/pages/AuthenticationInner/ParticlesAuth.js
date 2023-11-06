import React from "react";
import withRouter from "../../Components/Common/withRouter";

const ParticlesAuth = ({ children }) => {
  return (
    <React.Fragment>
      <div className="authentication">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="image-part">
              <div className="overlap-group">
                <div className="image">
                  <div className="overlay" />
                </div>
                <div className="great-clean-code">
                  IUOE
                  <br />
                  Smart Management System
                </div>
              </div>
            </div>
            {children}
            <div className="logo-of-the" alt="Logo of the" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ParticlesAuth);
