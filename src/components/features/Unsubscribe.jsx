import React, { useState } from "react";
import { Formik } from "formik";
import FormInput from "../common/FormInput";
import { apiBaseUrl } from "../../constants/env";

const formIinitialValues = {
  email: "",
};

const Unsubscribe= () => {
  const [initialValues, setInitialValues] = useState({...formIinitialValues});
  return (
    <div>
      <div className="box1 form-wrapper">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            const payload = {};
            payload.email = values.email;
            console.log("foo")
            const rawResponse = await fetch(`${apiBaseUrl}/unsubscribe`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({...payload})
            });
            const response = await rawResponse.json();
            console.log(response);
            if(response?.status === 400){
              window.alert(response.data);
              actions.resetForm({});
            }
            else{
              window.alert('Something Went Wrong!')
            }
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <label htmlFor="email">Email</label>
              <FormInput
                id="email"
                name="email"
                placeholder="Enter your Email"
                type="email"
              />
              <br/>
              <button type="submit" className="btn btn-primary">Unsubscribe from Mail</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Unsubscribe;
