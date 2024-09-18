export default function InvestmentInputForm({ onInputChange, initialData }) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    onInputChange(name, value);
  }
  return (
    <div className="input-group">
      <div id="user-input">
        <h5>Calculate Investment</h5>
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          type="number"
          id="initialInvestment"
          name="initialInvestment"
          min="1"
          defaultValue={initialData.initialInvestment}
          onChange={handleInputChange}
        />
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          type="number"
          id="annualInvestment"
          name="annualInvestment"
          min="1"
          defaultValue={initialData.annualInvestment}
          onChange={handleInputChange}
        />
        <label htmlFor="expectedReturn">Expected Return</label>
        <input
          type="number"
          id="expectedReturn"
          name="expectedReturn"
          min="1"
          defaultValue={initialData.expectedReturn}
          onChange={handleInputChange}
        />
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          id="duration"
          name="duration"
          defaultValue={initialData.duration}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
