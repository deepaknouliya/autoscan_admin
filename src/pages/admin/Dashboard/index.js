import React from 'react';
import { Link } from "react-router-dom";
import Eligibleapplication from "../Dashboard/Eligibleapplications"
import Pendingapplication from "../Dashboard/Pendingapplication"
import Vacancytable from "../Dashboard/Vacancytable"


const Card = ({ imageSrc, title, value, units }) => (
    <div className="tabBox-wrapper">
      <Link href="#">
        <div className="tab-details">
          <div className="d-flex align-items-center">
            <div className="tab-value">{value}</div>
            <div className="tab-ico ms-auto">
              <img src={imageSrc} alt={title} />
            </div>
          </div>
          <h2 className="tab-title">{title}</h2>
          {/*<div className="valueCounter d-flex align-items-center">
            <div className="candidate-value">
              <span>{units}</span>
            </div>
          </div>*/}
        </div>
      </Link>
    </div>
);

