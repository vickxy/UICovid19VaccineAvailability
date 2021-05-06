import React from "react";
import "../../src/styles.scss";
import CustomForm from "./CustomForm";
import Unsubscribe from "./features/Unsubscribe";
import Subsribers from "./features/Subsribers";

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
      <div className="box2 withLove">Created by Vikesh with <span role="img">🖤</span></div>
    </div>
  );
}
export default App;
