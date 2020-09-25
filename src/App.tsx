import React from "react";
import "./App.css";
import { Awards } from "./components/Awards/Awards";
import { Education } from "./components/Education/Education";
import { Languages } from "./components/Languages/Languages";
import { Profile } from "./components/Profile/Profile";
import { Publication } from "./components/Publication/Publication";
import { Skills } from "./components/Skills/Skills";
import { Summary } from "./components/Summary/Summary";
import { VolunteerExperience } from "./components/VolunteerExperience/VolunteerExperience";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";

const App: React.FC = () => {
  return (
    <div className="app">
      <Profile />
      <Summary />
      <Skills />
      <WorkExperience />
      <Languages />
      <Publication />
      <Awards />
      <Education />
      <VolunteerExperience />
    </div>
  );
};

export default App;
