import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { registerSchema } from "./formValidation";
import SelectInput from "../common/SelectInput";
import FormInput from "../common/FormInput";
import { ageGroupList, stateList, vaccinePrefList } from "../../constants/common";
import { apiBaseUrl } from "../../constants/env";
import Button from "../common/Button";

const formInitialValues = {
  name: "",
  age: "",
  notifyOn: "email",
  email: "",
  telegram: "",
  vaccinePref: "",
  mode: "1",
  state: "",
  district: "",
  pincode: ""
};

const CustomForm = () => {
  const [initialValues, setInitialValues] = useState({...formInitialValues});
  const [districtList, setDistrictList] = useState([]);

  const handleSelectChange = (setFieldValue, key, selectedOption, ) => {
    setInitialValues({
      ...initialValues,
      [key]: selectedOption
    });
    setFieldValue(key, selectedOption);
  };

  const getDistrictList = async (stateId) => {
    if(stateId){
      const rawResponse = await fetch(`${apiBaseUrl}/districts`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ state_id: stateId })
        }
      );
      const content = await rawResponse.json();
      if(content?.status === 200){
        let districts = content?.data?.districts;
        districts = districts.map(d => {
          let districtID = d.district_id;
          let a = { value: districtID.toString(), label: d.district_name}
          return a;
        });
        setDistrictList(districts)
      }
      else{
        window.alert('Something Went Wrong!')
      }
    }
  };

  useEffect(() => {
    getDistrictList(initialValues?.state?.value);
  }, [initialValues.state]);

  return (
    <div>
      <div className="box1 form-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (values, actions) => {
            const payload = {};
            payload.name = values.name;
            payload.notifyOn = values.notifyOn;
            payload.email = payload.notifyOn === "email" ? values.email : values.telegram;
            payload.age = values.age?.value;
            payload.vaccinePref = values.vaccinePref?.value || "";
            payload.mode = parseInt(values.mode);
            if(payload.mode===1){
              payload.pincode = values.pincode;
            } else if(payload.mode === 2){
              payload.dist_id = values.district?.value;
            }

            const rawResponse = await fetch(`${apiBaseUrl}/userinfo`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({...payload})
            });
            const response = await rawResponse.json();
            if(response?.status === 200){
              window.alert(response.data);
              actions.resetForm({});
              setInitialValues({...formInitialValues})
            }
            else{
              window.alert('Something Went Wrong!')
            }
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>

              <label htmlFor="name">Name</label>
              <FormInput id="name" name="name" placeholder="Enter your name" />

              <div id="my-radio-group">Notify me on</div>
              <div role="group" aria-labelledby="notifyOn">
                <label>
                  <Field type="radio" name="notifyOn" value="email" />
                  {' '}Email
                </label>{' '}
                <label>
                  <Field type="radio" name="notifyOn" value="telegram" />
                  {' '}Telegram
                </label>
              </div>
              <ErrorMessage
                name="notifyOn"
                component="div"
                className="error-message"
              />

              { props.values.notifyOn === "email" && 
                <>
                  <label htmlFor="email">Email</label>
                  <FormInput
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    type="email"
                  />
                </>
              }
              { props.values.notifyOn === "telegram" && 
                <>
                  <label htmlFor="email">
                    Telegram Chat ID
                    <span className="info"><a href="https://yadav-vikesh27.medium.com/how-to-get-telegram-chat-id-and-subscribe-vaccine-availability-a9adcead093e" target="_blank">
                      {' '}How to get Telegram Chat ID?
                    </a></span>
                  </label>
                  <FormInput
                    id="telegraml"
                    name="telegram"
                    placeholder="Enter your Telegram Chat ID"
                  />
                </>
              }

              <label htmlFor="age">Age Group</label>
              <SelectInput
                placeholder="Select Age Group"
                value={initialValues?.age}
                onChange={(selectedOption) =>{
                  handleSelectChange(props.setFieldValue, "age", selectedOption);
                }}
                options={ageGroupList}
                error={props.errors.age}
              />

              <label htmlFor="vaccine">Vaccine Preference</label>
              <SelectInput
                placeholder="Select your vaccine"
                value={initialValues?.vaccinePref}
                onChange={(selectedOption) =>{
                  handleSelectChange(props.setFieldValue, "vaccinePref", selectedOption);
                }}
                options={vaccinePrefList}
              />

              <div id="my-radio-group">Mode</div>
              <div role="group" aria-labelledby="mode">
                <label>
                  <Field type="radio" name="mode" value="1" />
                  {' '}Pincode
                </label>{' '}
                <label>
                  <Field type="radio" name="mode" value="2" />
                  {' '}District
                </label>
              </div>
              <ErrorMessage
                name="mode"
                component="div"
                className="error-message"
              />

              { props.values.mode === "1" && 
                <>
                  <label htmlFor="pincode">Pincode</label>
                  <FormInput
                    id="pincode"
                    name="pincode"
                    placeholder="Enter your pincode"
                  />
                </> 
              }
              { props.values.mode === "2" &&
                <>
                  <label htmlFor="state">State</label>
                  <SelectInput
                    placeholder="Select State"
                    value={initialValues?.state}
                    onChange={(selectedOption) => {
                      handleSelectChange(props.setFieldValue, "state", selectedOption);
                    }}
                    options={stateList}
                    error={props.errors.state}
                  />
                  <label htmlFor="District">District</label>
                  <SelectInput
                    placeholder="Select District"
                    value={initialValues?.district}
                    onChange={(selectedOption) =>
                      handleSelectChange(props.setFieldValue, "district", selectedOption)
                    }
                    options={districtList}
                    error={props.errors.district}
                  />
                </> 
              }
              <br/>
              <Button content="Notify me"/>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CustomForm;
