import React from "react";

export const Audience = (props) => {
  return (
    <div id="audience" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Para Quem É Meu Trabalho?</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-6 col-lg-3">
                  <div className="audience-card">
                    <div className="audience-icon">
                      <i className={d.icon}></i>
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
