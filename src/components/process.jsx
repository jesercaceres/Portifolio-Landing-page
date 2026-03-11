import React from "react";

export const Process = (props) => {
  return (
    <div id="process" className="text-center" style={{ padding: "100px 0", background: "#ffffff" }}>
      <div className="container">
        <div className="section-title">
          <h2>Como Funciona</h2>
          <p>
            Um processo transparente e ágil, focado em entregar resultados sem dor de cabeça para você.
          </p>
        </div>
        <div className="row">
          {props.data && props.data.Process
            ? props.data.Process.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                  <div className="process-step">
                    <div className="process-step-icon">
                      {i + 1}
                    </div>
                    <h3>{d.title.replace(/^\d+\.\s*/, '')}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>

        {/* FAQ Section */}
        <div className="section-title" style={{ marginTop: "80px" }}>
          <h2>Dúvidas Frequentes</h2>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel-group" id="accordion">
              {props.data && props.data.FAQ
                ? props.data.FAQ.map((f, i) => (
                    <div className="panel panel-default faq-panel" key={`faq-${i}`}>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${i}`} aria-expanded={i === 0 ? "true" : "false"}>
                            <span>{f.question}</span>
                            <i className="fa fa-chevron-down faq-icon"></i>
                          </a>
                        </h4>
                      </div>
                      <div id={`collapse${i}`} className={`panel-collapse collapse ${i === 0 ? "in" : ""}`}>
                        <div className="panel-body">
                          {f.answer}
                        </div>
                      </div>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

