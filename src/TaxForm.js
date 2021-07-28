import React, { useState } from 'react';
import './TaxForm.scss';
import { Link } from 'react-router-dom';

const TaxForm = props => {
  const [formData, setFormData] = useState({
    country: 'Australia',
    year: '2020-2021',
    amount: ''
  });

  const changeHandler = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setFormData({ amount: e.target.value });
    }
  };

  const yearGenerator = () => {
    var currentYear = new Date().getFullYear();
    var amountOfYears = 10;
    var yearList = [];
    for (var i = 0; i < amountOfYears; i++) {
      var year1 = (currentYear - i).toString();
      var year2 = currentYear - (i + 1).toString();
      yearList.push(
        <option value={year1}>
          {year2}-{year1}
        </option>
      );
    }
    return yearList;
  };

  const countryGenerator = () => {
    var countryList = [
      'Australia',
      'China',
      'Bangladesh',
      'Bhutan',
      'SriLanka',
      'India',
      'Nepal'
    ];
    var optionCountryList = [];
    countryList.sort().forEach(el => {
      optionCountryList.push(<option value={el}>{el}</option>);
    });
    return optionCountryList;
  };

  return (
    <div className="main-container">
      <div className={`title-${props.titleObj.id}`}>{props.titleObj.title}</div>
      <div className={`${props.titleInner.id}-container`}>
        <p>
          <span>{props.titleInner.title}</span>
        </p>
      </div>
      <form>
        <fieldset className="field-set" disabled={props.disable}>
          <div className="form-group">
            <label for="country" className="lbl-country">
              Select country of you residence *
            </label>
            <select id="country" className={`sel-country ${props.id}`}>
              {countryGenerator()}
            </select>
          </div>
          <div className="form-group">
            <label for="income-year" className="lbl-income-year">
              Select an income year *
            </label>
            <select id="income-year" className={`sel-income-year ${props.id}`}>
              {yearGenerator()}
            </select>
          </div>
          <div className="form-group">
            <label for="taxable-income" className="sel-taxable-income">
              Enter your total taxable income for the year *
            </label>
            <div className="taxable-income-container">
              <span className={`tax-income ${props.id}`}>
                $
                <input
                  type="text"
                  disabled={false}
                  name="taxable-income"
                  placeholder="Amount"
                  value={formData.amount || props.values}
                  onChange={changeHandler}
                />
                .00
              </span>
            </div>
          </div>
          <div className={`${props.linkName.id}-container`}>
            <Link
              to={{ pathname: `${props.linkName.path}`, state: formData }}
              className={`btn-${props.linkName.id}`}
            >
              {props.linkName.title}
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default TaxForm;
