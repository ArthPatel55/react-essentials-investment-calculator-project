import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}){
    // console.log(input);
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = 
    resultsData[0].valueEndOfYear - 
    resultsData[0].interest -
    resultsData[0].annualInvestment;
    // console.log(resultsData);
  return<>
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Year)</th>
                <th>Toatal Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map((yearData)=> {
                const totalinterest =
                yearData.valueEndOfYear - 
                yearData.annualInvestment * 
                yearData.year - 
                initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalinterest;
                return( 
            <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalinterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>);
        })}
        </tbody>
    </table>
  </>
}
