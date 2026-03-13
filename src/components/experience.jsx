import React from "react";
import "./experience.css";

export const Experience = (props) => {
  return (
    <div id="experience" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Trajetória</h2>
        </div>
        <div className="row">
          <div className="timeline">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{d.title}</h3>
                      <h4>{d.company}</h4>
                      <span className="timeline-date">{d.date}</span>
                      <p>{d.description}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
