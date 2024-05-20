import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class ButtonLoader extends Component {
  render() {
    const loading = this.props.loading;
    return (
      <div>
        <Button
          variant={this.props.variant ? this.props.variant : "primary"}
          type={this.props.type ? this.props.type : "submit"}
          disabled={loading || this.props.disabled}
          onClick={this.props.onClick}
          option={this.props.option}
          url={this.props.url}
          style={{ ...this.props.style }}
          deal_name={this.props.deal_name}
          user_id={this.props.user_id}
          user_name={this.props.user_name}
          id="button-submit"
          className={this.props.className}
        >
          {loading && (
            <FontAwesomeIcon icon={faSpinner} className="mr-2 fa-spin" />
          )}
          {loading && this.props.message && (
            <span>{this.props.message}...</span>
          )}
          {loading && !this.props.message && <span>Loading...</span>}
          {!loading && (
            <span id="button-submit-text">
              {this.props.title ? this.props.title : "Submit"}
            </span>
          )}
        </Button>
      </div>
    );
  }
}
