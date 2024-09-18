import { formatter } from "../../util/investment";

export default function DisplayDetails({ dataItems, initialInvestment }) {
  let totalInterest = 0;
  let investedCapital = initialInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataItems.map((item, index) => {
          const { year, interest, valueEndOfYear, annualInvestment } = item;
          totalInterest += interest;
          investedCapital += annualInvestment;
          return (
            <tr key={index}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
