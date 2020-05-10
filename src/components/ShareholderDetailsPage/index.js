import React, { useState } from "react";

import EditShareholders from "../EditShareholders";

const ShareholderDetailsPage = () => {
  const { currentStep, goBack, goToNext } = useSteps([
    <EditShareholders />,
    <EditShares />,
  ]);

  return (
    <main className="container">
      <h1>Shareholder Details</h1>
      {currentStep}
      <NavButtons {...{ goBack, goToNext }} />
    </main>
  );
};

const useSteps = (steps) => {
  const [step, setStep] = useState(1);

  const goBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const goToNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return { currentStep: steps[step], goBack, goToNext };
};

const EditShares = () => (
  <div className="info">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

const NavButtons = ({ goBack, goToNext }) => (
  <nav className="nav-buttons">
    <button onClick={goBack}>Back</button>
    <button onClick={goToNext}>Next</button>
  </nav>
);

export default ShareholderDetailsPage;
