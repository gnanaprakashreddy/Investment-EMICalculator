import { useState } from "react";
import EMIInputForm from "./inputform/EMIInputForm";
import { calculateEMIResults } from "../util/investment";
import DisplayEMIDetails from "./DisplayDetails/DisplayEMIDetails";

const DETAILS = {
  loanAmount: 1000,
  rateOfInterest: 6,
  duration: 1,
};

export default function CalculateEMI() {
  const [inputDetails, setInputDetails] = useState(DETAILS);
  const annualData = calculateEMIResults(inputDetails);

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
      <EMIInputForm
        onInputChange={handleInputChange}
        initialData={inputDetails}
      />
      {errorMsg.length <= 0 ? (
        <DisplayEMIDetails data={annualData} />
      ) : (
        <div className="center">{errorMsg} should be greater than 0 </div>
      )}
    </div>
  );
}
