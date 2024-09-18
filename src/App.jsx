import { useState } from "react";
import InvestmentInputForm from "./components/inputform/InvestmentInputForm";
import { calculateInvestmentResults } from "./util/investment";
import DisplayDetails from "./components/DisplayDetails/DisplayDetails";
import Button from "./components/Button";
import CalculateInvestment from "./components/CalculateInvestment";
import CalculateEMI from "./components/CalculateEMI";

function App() {
  return (
    <>
      <header id="header">
        <h1>React Investment & EMI Calculator</h1>
      </header>
      {/* <div className="investments"> */}
      <div className="container">
        <CalculateInvestment />
        <CalculateEMI />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
