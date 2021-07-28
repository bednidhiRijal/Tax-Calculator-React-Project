import React from 'react';
import Cards from './Cards';
import TaxForm from './TaxForm';
import TaxResultPage from './TaxResultPage';
import './TaxCalculatorForm.scss';

const TaxCalculatorResult = props => {
  const state = (props.location && props.location.state) || '';
  return (
    <div>
      <Cards>
        <div className="row">
          <div className="col">
            <TaxForm
              linkName={{
                title: 'Go back to previous screen',
                path: '/TaxCalculatorForm',
                id: 'cal'
              }}
              titleObj={{ title: 'Calculate your tax', id: 'res' }}
              titleInner={{
                title: '',
                id: 'hide'
              }}
              values={state.amount}
              id="inp-gray"
              disable="disabled"
            />
          </div>
          <div className="col">
            <TaxResultPage data={state} />
          </div>
        </div>
      </Cards>
    </div>
  );
};

export default TaxCalculatorResult;
