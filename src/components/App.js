import React from "react";
import "../../src/styles.scss";
import CustomForm from "./CustomForm";

const  App = () => {
  return (
    <div className="App">
      <div className="heading">
        <h1>Vaccine Availability</h1>
        <h5>
          Submit following details, and we'll notify you, as soon as vaccine
          is available in your area for next 7 days.
        </h5>
      </div>
      <CustomForm />
    </div>
  );
}
export default App;
