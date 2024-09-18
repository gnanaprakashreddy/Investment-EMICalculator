import { formatter } from "../../util/investment";

export default function DisplayEMIDetails({ data }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Monthly EMI</th>
          <th>Principle Amount</th>
          <th>Total Interest</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{formatter.format(data.monthlyEMI)}</td>
          <td>{formatter.format(data.principleAmount)}</td>
          <td>{formatter.format(data.totalInterest)}</td>
          <td>{formatter.format(data.totalAmount)}</td>
        </tr>
      </tbody>
    </table>
  );
}
