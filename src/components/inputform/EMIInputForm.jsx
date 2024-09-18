export default function EMIInputForm({ onInputChange, initialData }) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    onInputChange(name, value);
  }
  return (
    <div className="input-group">
      <div id="user-input">
        <h5>Calculate EMI</h5>
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          min="1"
          defaultValue={initialData.loanAmount}
          onChange={handleInputChange}
        />
        <label htmlFor="rateOfInterest">Rate of Interest</label>
        <input
          type="number"
          id="rateOfInterest"
          name="rateOfInterest"
          min="1"
          defaultValue={initialData.rateOfInterest}
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
