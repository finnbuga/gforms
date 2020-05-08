import React, { useState } from "react";

const ShareholderDetailsPage = () => {
  const steps = [<AddShareholder />, <DivideShares />];

  const [step, setStep] = useState(0);

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

  return (
    <main class="container">
      <h1>Shareholder Details</h1>
      {steps[step]}
      <NavButtons {...{ goBack, goToNext }} />
    </main>
  );
};

const AddShareholder = () => <div>AddShareholder</div>;

const DivideShares = () => <div>DivideShares</div>;

const NavButtons = ({ goBack, goToNext }) => (
  <nav className="nav-buttons">
    <button onClick={goBack}>Back</button>
    <button onClick={goToNext}>Next</button>
  </nav>
);

export default ShareholderDetailsPage;
