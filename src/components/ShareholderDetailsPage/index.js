import React, { useState } from "react";

import ShareholderForm from "../ShareholderForm";

const shareholders = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@getground.com",
    share: 80,
    isDirector: false,
  },
  {
    id: 2,
    firstName: "Florin",
    lastName: "Buga",
    email: "florin@getground.co.uk",
    share: 20,
    isDirector: true,
  },
];

const ShareholderDetailsPage = () => {
  const { currentStep, goBack, goToNext } = useSteps([
    <EditShareholders shareholders={shareholders} />,
    <EditShares shareholders={shareholders} />,
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

  return { currentStep: steps[step], goBack, goToNext };
};

const EditShareholders = ({ shareholders }) => (
  <>
    {shareholders.map((shareholder) => (
      <ShareholderForm key={shareholder.id} shareholder={shareholder} />
    ))}
  </>
);

const EditShares = () => <div>DivideShares</div>;

const NavButtons = ({ goBack, goToNext }) => (
  <nav className="nav-buttons">
    <button onClick={goBack}>Back</button>
    <button onClick={goToNext}>Next</button>
  </nav>
);

export default ShareholderDetailsPage;
