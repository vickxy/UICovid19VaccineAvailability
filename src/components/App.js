import React from "react";
import "../../src/styles.scss";
import CustomForm from "./CustomForm";
import Unsubscribe from "./features/Unsubscribe";
import Subsribers from "./features/Subsribers";
import bmcButton from "../assets/bmc-button.png";

const  App = () => {
  return (
    <div className="container-fluid col-md-6">
      <div className="heading">
        <h2>Vaccine Availability</h2>
        <br/>
        <h6>
          Submit following details, and we'll notify you, as soon as COVID-19 vaccine
          is available in your area for next 7 days.
        </h6>
      </div>
      <Subsribers />
      <CustomForm />
      <Unsubscribe />
      <div className="box2 text-center">
        Created by <a href="https://github.com/vickxy" target="_blank" >Vikesh</a> with 🖤
      </div>
      <div className="box2 text-center">
        <a href="https://www.buymeacoffee.com/vikesh" target="_blank" >
          <img src={bmcButton} alt="Buy me a Coffee" width="140" height="40" />
        </a>
      </div>

    </div>
  );
}
export default App;
