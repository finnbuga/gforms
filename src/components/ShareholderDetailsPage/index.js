import React, { useState } from "react";

const ShareholderDetailsPage = () => {
  const [step, setStep] = useState(1);

  return (
    <main class="container">
      <h1>Shareholder Details</h1>
      {step === 1 && <AddShareholder />}
      {step === 2 && <DivideShares />}
      <ControlButtons />
    </main>
  );
};

const AddShareholder = () => <div>AddShareholder</div>;
const DivideShares = () => <div>DivideShares</div>;
const ControlButtons = () => <div>ControlButtons</div>;

export default ShareholderDetailsPage;
