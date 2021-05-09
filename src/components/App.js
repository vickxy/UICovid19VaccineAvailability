import React from "react";
import "../../src/styles.scss";
import CustomForm from "./CustomForm";
import Unsubscribe from "./features/Unsubscribe";
import Subsribers from "./features/Subsribers";

const  App = () => {
  return (
    <div className="container-fluid col-md-6">
      <div className="heading">
        <h1>Vaccine Availability</h1>
        <br/>
        <h5>
          Submit following details, and we'll notify you, as soon as COVID-19 vaccine
          is available in your area for next 7 days.
        </h5>
      </div>
      <Subsribers />
      <CustomForm />
      <Unsubscribe />
      <div className="box2 withLove">
        Created by <a href="https://github.com/vickxy" target="_blank" >Vikesh</a> with 🖤</div>
    </div>
  );
}
export default App;
