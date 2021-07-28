import React from 'react';
import Taxotron from './Taxotron';
import './TextResultPage.scss';

const TaxResultPage = props => {
  var amount = parseInt(props.data.amount);
  var totTax = 0;
  var eachBracketTax = [];
  if (amount >= 0) {
    if (amount <= 18200) {
      totTax = 0;
      eachBracketTax.push(totTax);
    } else {
      totTax = 0;
      eachBracketTax.push(totTax);
      if (amount <= 45000) {
        amount = amount - 18200;
        totTax = totTax + amount * 0.19;
        eachBracketTax.push(amount * 0.19);
      } else {
        totTax = totTax + (45000 - 18200) * 0.19;
        eachBracketTax.push((45000 - 18200) * 0.19);
        if (amount <= 120000) {
          amount = amount - 45000;
          totTax = totTax + amount * 0.325;
          eachBracketTax.push(amount * 0.325);
        } else {
          totTax = totTax + (120000 - 45000) * 0.325;
          eachBracketTax.push((120000 - 45000) * 0.325);
          if (amount <= 180000) {
            amount = amount - 120000;
            totTax = totTax + amount * 0.37;
            eachBracketTax.push(amount * 0.37);
          } else {
            totTax = totTax + 60000 * 0.37;
            eachBracketTax.push(60000 * 0.37);
            if (amount > 180000) {
              amount = amount - 180000;
              totTax = totTax + amount * 0.45;
              eachBracketTax.push(amount * 0.45);
            }
          }
        }
      }
    }
  } else {
    totTax = 0;
  }
  return (
    <Taxotron>
      <div className="res-section">
        <div className="res-title">Your estimated taxable income is:</div>
        <div className="res-area">
          <div>${(Math.round(totTax * 100) / 100).toFixed(2)}</div>
        </div>
        <div className="breakdown">Breakdown</div>
        <div className="breakdown-sec">
          <div className="breakdown-area">
            <div className="tax-bracket">
              Tax Bracket <br /> $0-$18200
            </div>
            <div className="tax-bracket-result">
              $
              {eachBracketTax[0]
                ? (Math.round(eachBracketTax[0] * 100) / 100).toFixed(2)
                : 0}
            </div>
          </div>
          <div className="breakdown-area">
            <div className="tax-bracket">
              Tax Bracket <br /> $18201-$45000
            </div>
            <div className="tax-bracket-result">
              $
              {eachBracketTax[1]
                ? (Math.round(eachBracketTax[1] * 100) / 100).toFixed(2)
                : 0}
            </div>
          </div>
          <div className="breakdown-area">
            <div className="tax-bracket">
              Tax Bracket <br /> $45001-$120000
            </div>
            <div className="tax-bracket-result">
              $
              {eachBracketTax[2] ? Math.round(eachBracketTax[2]).toFixed(2) : 0}
            </div>
          </div>
          <div className="breakdown-area">
            <div className="tax-bracket">
              Tax Bracket <br /> $120001-$180000
            </div>
            <div className="tax-bracket-result">
              $
              {eachBracketTax[3]
                ? (Math.round(eachBracketTax[3] * 100) / 100).toFixed(2)
                : 0}
            </div>
          </div>
          <div className="breakdown-area">
            <div className="tax-bracket">
              Tax Bracket <br /> $180000+
            </div>
            <div className="tax-bracket-result">
              $
              {eachBracketTax[4]
                ? (Math.round(eachBracketTax[4] * 100) / 100).toFixed(2)
                : 0}
            </div>
          </div>
        </div>
      </div>
    </Taxotron>
  );
};
export default TaxResultPage;
