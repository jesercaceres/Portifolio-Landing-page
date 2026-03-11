import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="intro-text">
                {props.data ? props.data.title : "Loading"}
              </div>
              <div className="subtitle">
                {props.data ? props.data.paragraph : "Loading"}
              </div>
              <div className="btnDiv" style={{ position: 'relative', marginTop: '30px' }}>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};