import { useState } from "react";
import InvestmentInputForm from "./inputform/InvestmentInputForm";
import DisplayDetails from "./DisplayDetails/DisplayDetails";
import { calculateInvestmentResults } from "../util/investment";

const DETAILS = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 10,
  duration: 1,
};

export default function CalculateInvestment() {
  const [inputDetails, setInputDetails] = useState(DETAILS);
  const annualData = calculateInvestmentResults(inputDetails);

  function handleInputChange(parameterName, value) {
    setInputDetails((prevInputDetails) => {
      const newDetails = {
        ...prevInputDetails,
        [parameterName]: Number(value),
      };
      return newDetails;
    });
  }

  let errorMsg = "";
  if (inputDetails.duration < 1) {
    errorMsg += "Duration";
  }

  return (
    <div>
      <InvestmentInputForm
        onInputChange={handleInputChange}
        initialData={inputDetails}
      />
      {errorMsg.length <= 0 ? (
        <DisplayDetails
          dataItems={annualData}
          initialInvestment={inputDetails.initialInvestment}
        />
      ) : (
        <div className="center">{errorMsg} should be greater than 0 </div>
      )}
    </div>
  );
}
