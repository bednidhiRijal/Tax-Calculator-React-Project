import React from 'react';
import Cards from './Cards';
import './TaxCalculatorForm.scss';
import TaxForm from './TaxForm';
import Taxotron from './Taxotron';

const TaxCalculatorForm = () => {
  return (
    <Cards>
      <div className="row">
        <div className="col">
          <Taxotron
            subHeading="The free and simple online tax calculator"
            heading="Tax-o-tron"
          />
        </div>
        <div className="col">
          <TaxForm
            linkName={{
              title: 'Calculate',
              path: '/TaxCalculatorResult',
              id: 'calculate'
            }}
            titleObj={{ title: 'Calculate your tax', id: 'res' }}
            titleInner={{
              title: 'Fields marked with * are important',
              id: 'indicator'
            }}
            disable=""
          />
        </div>
      </div>
    </Cards>
  );
};

export default TaxCalculatorForm;
