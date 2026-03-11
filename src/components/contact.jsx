import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-5 col-md-offset-1">
            <div className="row">
              <div className="section-title">
                <h2>Faça um orçamento já!</h2>
                <p>
                  Clique no botão abaixo para entrar em contato comigo pelo WhatsApp.
                </p>
              </div>
              <div style={{ marginBottom: "50px" }}>
                <a
                  href="https://wa.me/5515998617010"
                  className="btn btn-custom btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp"></i> Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informações de contato</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> E-mail
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/jesercaceres/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jesercaceres" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2026 Cáceres Tech. Design por{" "}
            <a href="https://github.com/jesercaceres" rel="nofollow">
              Jéser Cáceres Marcelino
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
