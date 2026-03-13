import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.css";

export const Experience = (props) => {
  return (
    <div id="experience" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Trajetória</h2>
        </div>
        <div className="row">
          {props.data ? (
            <VerticalTimeline className="experience-timeline">
              {props.data.map((d, i) => (
                <VerticalTimelineElement
                  key={`${d.title}-${i}`}
                  date={d.date}
                  iconStyle={{ background: "#ffffff", color: "#5ca9fb" }}
                  contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
                >
                  <h3 className="vertical-timeline-element-title">{d.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{d.company}</h4>
                  <p>{d.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};
