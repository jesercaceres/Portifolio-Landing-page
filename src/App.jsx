import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Process } from "./components/process";
import { Experience } from "./components/experience";
import { Audience } from "./components/Audience";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="app-container">
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Process data={landingPageData.ProcessData} />
      <Experience data={landingPageData.Experience} />
      <Audience data={landingPageData.Audience} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;