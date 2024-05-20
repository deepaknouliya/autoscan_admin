import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const styles = {
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#E27235" : "",
  }),
};

export class CountryData extends React.Component {
  render() {
    let countries = [];

    let countryData = Country.getAllCountries();
    countryData.sort((a, b) => a.name.localeCompare(b.name));
    countryData.map(country => {
      countries.push({ label: country.name, value: country.isoCode });
      return null;
    });
    if (this.props.showAll) {
      countries = [{ label: "All Countries", value: null }, ...countries];
    }

    const defaultSelectedOption = () => {
      let option = null;
      let selectedOption = countries.filter(
        e => e.value === this.props.selected
      );
      if (selectedOption.length > 0) {
        option = selectedOption[0];
      }
      return option;
    };

    return (
      <>
        <Select
          id="select"
          {...this.props}
          placeholder={
            this.props.placeholder ? this.props.placeholder : "Select"
          }
          options={countries}
          styles={styles}
          name={this.props.name}
          onChange={this.props.onChange}
          value={defaultSelectedOption()}
          ref={this.props?.refs}
        />
        {this.props.Label === "off" ? (
          " "
        ) : (
          <Form.Label className="float-label">Country*</Form.Label>
        )}
      </>
    );
  }
}

export class StateData extends React.Component {
  //pass selected props with value u wanted selected
  render() {
    let states = [];
    let code = this.props.country;

    State.getStatesOfCountry(code).map(state => {
      states.push({ label: state.name, value: state.isoCode });
      return null;
    });

    const defaultSelectedOption = () => {
      let option = null;
      let selectedOption = states.filter(e => e.value === this.props.selected);

      if (selectedOption.length > 0) {
        option = selectedOption[0];
      }
      return option;
    };

    return (
      <>
        <Select
          id="select"
          {...this.props}
          placeholder={
            this.props.placeholder ? this.props.placeholder : "Select"
          }
          options={states}
          styles={styles}
          name={this.props.name}
          onChange={this.props.onChange}
          value={defaultSelectedOption()}
          ref={this.props.refs}
        />

        {this.props.Label === "off" ? (
          " "
        ) : (
          <Form.Label className="float-label">State*</Form.Label>
        )}
      </>
    );
  }
}

export class CityData extends React.Component {
  //pass selected props with value u wanted selected
  render() {
    let cities = [];
    let country = this.props.country;
    let state = this.props.state;

    City.getCitiesOfState(country, state).map(city => {
      cities.push({ label: city.name, value: city.name });
      return null;
    });

    if (cities.length === 0) {
      State.getStatesOfCountry(country).map(states => {
        if (states.isoCode === state) {
          cities.push({ label: states.name, value: states.isoCode });
        }
        return null;
      });
    }

    const defaultSelectedOption = () => {
      let option = null;
      let selectedOption = cities.filter(e => e.value === this.props.selected);

      if (selectedOption.length > 0) {
        option = selectedOption[0];
      }
      return option;
    };

    return (
      <>
        <Select
          id="select"
          {...this.props}
          placeholder={
            this.props.placeholder ? this.props.placeholder : "Select"
          }
          options={cities}
          styles={styles}
          name={this.props.name}
          onChange={this.props.onChange}
          value={defaultSelectedOption()}
          ref={this.props?.refs}
        />
        {this.props.Label === "off" ? (
          " "
        ) : (
          <Form.Label className="float-label">City*</Form.Label>
        )}
      </>
    );
  }
}
