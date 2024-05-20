import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { Form } from "react-bootstrap";

const CountryCurrencyCode = props => {
  const [countryCurrencyCodes, setCountryCurrencyCodes] = useState([]);
  const [selectedCountryCurrency, setSelectedCountryCurrency] = useState({
    label: "INR",
    value: "INR",
  });

  useEffect(() => {
    let tempData = Country.getAllCountries().map(({ currency }) => ({
      label: currency,
      value: currency,
    }));
    setCountryCurrencyCodes(tempData);

    let selectedCountryCurrency = {
      label: "INR",
      value: "INR",
    };
    let { selected } = props;
    if (selected) {
      let tempSelected = tempData.find(({ value }) => value === selected);
      if (tempSelected) {
        selectedCountryCurrency = tempSelected;
      }
    }
    setSelectedCountryCurrency(selectedCountryCurrency);

    return () => {};
  }, [props.selected]);

  return (
    <>
      <Select
        {...props}
        id="currencyCode"
        placeholder={props.placeholder || ""}
        options={countryCurrencyCodes}
        value={selectedCountryCurrency}
        name={props.name}
        onChange={props.onChange}
      />
      {props.label ? (
        <Form.Label className="float-label">Country*</Form.Label>
      ) : (
        <></>
      )}
    </>
  );
};

const CountryMobileCode = props => {
  const [countryMobileCodes, setCountryMobileCodes] = useState([]);
  const [selectedCountryMobileCode, setSelectedCountryMobileCode] = useState({
    label: "India +91",
    value: "+91:IN",
  });

  useEffect(() => {
    let tempData = [];
    Country.getAllCountries().forEach(
      ({ phonecode: value, name: label, isoCode }) => {
        if (value?.length && !value.startsWith("+")) {
          value = "+" + value;
        }

        if (value.length) {
          if (value.indexOf("and") !== -1) {
            let childValue = value.split(" and ");
            tempData.push({
              label: label + " " + childValue[0],
              value: childValue[0],
              //  + ":" + isoCode,
            });
            tempData.push({
              label: label + " +" + childValue[1],
              value: "+" + childValue[1],
              //  + ":" + isoCode,
            });
          } else {
            tempData.push({
              label: label + " " + value,
              value: value,
              // + ":" + isoCode,
            });
          }
        }
      }
    );
    setCountryMobileCodes(tempData);

    let selectedCountryMobileCode = {
      label: "India +91",
      value: "+91:IN",
    };
    let { selected } = props;
    if (selected) {
      let tempSelected = tempData.find(({ value }) => value === selected);
      if (tempSelected) {
        selectedCountryMobileCode = tempSelected;
      }
    }
    setSelectedCountryMobileCode(selectedCountryMobileCode);

    return () => {};
  }, [props.selected]);

  return (
    <>
      <Select
        {...props}
        id="countryCode"
        placeholder={props.placeholder || ""}
        options={countryMobileCodes}
        value={props?.value}
        name={props.name}
        onChange={props.onChange}
      />
      {props.label ? (
        <Form.Label className="float-label">Country Code*</Form.Label>
      ) : (
        <></>
      )}
    </>
  );
};

const CountryData = props => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    value: null,
    label: "Select Country",
  });

  useEffect(() => {
    let tempData = Country.getAllCountries().map(({ name, isoCode }) => ({
      label: name,
      value: isoCode,
    }));
    setCountries(tempData);

    let selectedCountry = { value: null, label: "Select Country" };
    let { selected } = props;
    if (selected) {
      let tempSelected = tempData.find(({ value }) => value === selected);
      if (tempSelected) {
        selectedCountry = tempSelected;
      }
    }
    setSelectedCountry(selectedCountry);

    return () => {};
  }, [props.selected]);

  return (
    <>
      <Select
        id="select"
        {...props}
        placeholder={props.placeholder || "Select"}
        options={countries}
        name={props.name}
        onChange={props.onChange}
        value={selectedCountry}
        ref={props.ref}
      />
      {props.label ? (
        <Form.Label className="float-label">Country*</Form.Label>
      ) : (
        <></>
      )}
    </>
  );
};

const StateData = props => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState({
    value: null,
    label: "Select State",
  });

  useEffect(() => {
    let tempData = State.getStatesOfCountry(props.countryCode).map(
      ({ name, isoCode }) => ({
        label: name,
        value: isoCode,
      })
    );
    setStates(tempData);

    let selectedState = { value: null, label: "Select State" };
    let { selected } = props;
    if (selected) {
      let tempSelected = tempData.find(({ value }) => value === selected);
      if (tempSelected) {
        selectedState = tempSelected;
      }
    }
    setSelectedState(selectedState);
    return () => {};
  }, [props.selected, props.countryCode]);

  return (
    <>
      <Select
        id="select"
        {...props}
        placeholder={props.placeholder || "Select"}
        options={states}
        name={props.name}
        onChange={props.onChange}
        value={selectedState}
        ref={props.ref}
      />
      {props.label ? (
        <Form.Label className="float-label">State*</Form.Label>
      ) : (
        <></>
      )}
    </>
  );
};

const CityData = props => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({
    value: null,
    label: "Select City",
  });

  useEffect(() => {
    let tempData = City.getCitiesOfState(
      props.countryCode,
      props.stateCode
    ).map(({ name }) => ({
      label: name,
      value: name,
    }));

    if (!tempData.length) {
      tempData = State.getStatesOfCountry(props.countryCode)
        .map(({ name, isoCode }) =>
          isoCode === props.stateCode ? { label: name, value: isoCode } : null
        )
        .filter(data => !!data);
    }

    setCities(tempData);

    let selectedCity = { value: null, label: "Select City" };
    let { selected } = props;
    if (selected) {
      let tempSelected = tempData.find(({ value }) => value === selected);
      if (tempSelected) {
        selectedCity = tempSelected;
      }
    }
    setSelectedCity(selectedCity);

    return () => {};
  }, [props.selected, props.countryCode, props.stateCode]);

  return (
    <>
      <Select
        id="select"
        {...props}
        placeholder={props.placeholder || "Select"}
        options={cities}
        name={props.name}
        onChange={props.onChange}
        value={selectedCity}
        ref={props.ref}
      />
      {props.label ? (
        <Form.Label className="float-label">City*</Form.Label>
      ) : (
        <></>
      )}
    </>
  );
};

const CityDataByCountry = props => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({
    value: null,
    label: "Select City",
  });

  useEffect(() => {
    let tempData = City.getCitiesOfCountry(props.countryCode).map(
      ({ name }) => ({ label: name, value: name })
    );
    setCities(tempData);

    let selectedCity = { value: null, label: "Select City" };
    let { selected } = props;
    if (selected) {
      let tempSelected = tempData.find(({ value }) => value === selected);
      if (tempSelected) {
        selectedCity = tempSelected;
      }
    }
    setSelectedCity(selectedCity);

    return () => {};
  }, [props.selected, props.countryCode]);

  return (
    <>
      <Select
        id="select"
        {...props}
        placeholder={props.placeholder || "Select"}
        options={cities}
        name={props.name}
        onChange={props.onChange}
        value={selectedCity}
        ref={props.ref}
      />
      {props.label ? (
        <Form.Label className="float-label">City*</Form.Label>
      ) : (
        <></>
      )}
    </>
  );
};

CountryCurrencyCode.propTypes = {
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
};
CountryCurrencyCode.defaultProps = {
  label: false,
};

CountryMobileCode.propTypes = {
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
};
CountryMobileCode.defaultProps = {
  label: false,
};

CountryData.propTypes = {
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
};
CountryData.defaultProps = {
  label: false,
};

StateData.propTypes = {
  countryCode: PropTypes.string.isRequired,
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
};
StateData.defaultProps = {
  label: false,
};

CityData.propTypes = {
  countryCode: PropTypes.string.isRequired,
  stateCode: PropTypes.string.isRequired,
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
};
CityData.defaultProps = {
  label: false,
};

CityDataByCountry.propTypes = {
  countryCode: PropTypes.string.isRequired,
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
};
CityDataByCountry.defaultProps = {
  label: false,
};

export {
  CountryCurrencyCode,
  CountryMobileCode,
  CountryData,
  StateData,
  CityData,
  CityDataByCountry,
};
