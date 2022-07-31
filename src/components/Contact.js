import React, { useState } from "react";
import "../css/Contact.css";
import Navbar from "./Navbar";
import InputLabel from "@mui/material/InputLabel";
import Swal from "sweetalert2";
import { Form, Input, TextArea, Select, Dropdown } from "semantic-ui-react";
import { send } from "emailjs-com";
import Button from "@mui/material/Button";

const SERVICE_ID = "fitness_with_naveen";
const TEMPLATE_ID = "template_htze4af";
const USER_ID = "PDUW7fHXSq_hGkjkq";

const options = [
  { key: "E", text: "Endurance", value: "Endurance" },
  { key: "SS", text: "Strength & Size", value: "Strength & Size" },
  { key: "MP", text: "Muscle & Power", value: "Muscle & Power" },
  { key: "F", text: "Fitness", value: "Fitness" },
  { key: "TWL", text: "Toining & weight loss", value: "Toining & weight loss" },
];

const optionsGender = [
  { key: "m", text: "Male", value: "Male" },
  { key: "f", text: "Female", value: "Female" },
];

const optionsYesNO = [
  { key: "Y", text: "Yes", value: "Yes" },
  { key: "N", text: "No", value: "No" },
];

function Contact() {
  const [toSend, setToSend] = useState({
    user_first_name: "",
    user_last_name: "",
    user_gender: "",
    user_birth: "",
    user_nic: "",
    user_mobile_number: "",
    user_mail: "",
    user_weight: "",
    user_height: "",
    reasonforjoin: "",
    q_one: "",
    q_two: "",
    q_three: "",
    q_four: "",
    q_five: "",
    q_six: "",
    q_seven: "",
    user_message: "",
  });

  const handlegenderChange = (e, data) => {
    toSend.user_gender = data.value;
  };

  const handleReasonJoin = (e, data) => {
    toSend.reasonforjoin = data.value;
  };

  const handleQOne = (e, data) => {
    toSend.q_one = data.value;
  };

  const handleQTwo = (e, data) => {
    toSend.q_two = data.value;
  };

  const handleQThree = (e, data) => {
    toSend.q_three = data.value;
  };

  const handleQFour = (e, data) => {
    toSend.q_four = data.value;
  };

  const handleQFive = (e, data) => {
    toSend.q_five = data.value;
  };

  const handleQSix = (e, data) => {
    toSend.q_six = data.value;
  };

  const handleQSeven = (e, data) => {
    toSend.q_seven = data.value;
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e, result) => {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID).then(
      (result) => {
        console.log("--------", toSend);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contactPage">
      <div className="contact__header">
        <Navbar />
        <h1 id="subhead1">Contact Us</h1>
      </div>
      <div className="rowContact">
        <div className="topheader">
          <h4>
            FEEL FREE TO GET IN TOUCH TO FIND OUT HOW WE CAN HELP YOU SOLVE YOUR
            STRENGTH OR FITNESS GOALS.
          </h4>
        </div>
        <div className="col-2 col1">
          <div className="form">
            <Form onSubmit={handleOnSubmit}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Name
              </InputLabel>
              <div className="namebox">
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  name="user_first_name"
                  placeholder="First Name…"
                  required
                  icon="user circle"
                  iconPosition="left"
                  value={toSend.user_first_name}
                  onChange={handleChange}
                />

                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  name="user_last_name"
                  placeholder="Last Name…"
                  required
                  icon="user circle"
                  iconPosition="left"
                  value={toSend.user_last_name}
                  onChange={handleChange}
                />
              </div>

              <InputLabel shrink htmlFor="bootstrap-input">
                Gender
              </InputLabel>
              <Form.Field
                id="form-input-control-gender"
                control={Select}
                options={optionsGender}
                placeholder="Gender"
                name="user_gender"
                width="five"
                onChange={handlegenderChange}
                required
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Date of Birth
              </InputLabel>
              <Form.Field
                id="form-input-control-dateof-birth"
                control={Input}
                placeholder="dd/mm/yyyy"
                name="user_birth"
                width="five"
                value={toSend.user_birth}
                onChange={handleChange}
                required
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                N.I.C Number
              </InputLabel>
              <Form.Field
                id="form-input-control-nic"
                control={Input}
                placeholder="Enter your NIC Number"
                name="user_nic"
                width="nine"
                value={toSend.user_nic}
                onChange={handleChange}
                required
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Mobile Number
              </InputLabel>
              <Form.Field
                id="form-input-control-mobile-number"
                control={Input}
                name="user_mobile_number"
                placeholder="Mobile Number"
                required
                icon="mobile"
                width="nine"
                iconPosition="left"
                value={toSend.user_mobile_number}
                onChange={handleChange}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                E-Mail
              </InputLabel>
              <Form.Field
                id="form-input-control-e-mail"
                control={Input}
                name="user_mail"
                placeholder="E-Mail"
                required
                icon="mail"
                width="nine"
                iconPosition="left"
                value={toSend.user_mail}
                onChange={handleChange}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Weight (kg)
              </InputLabel>
              <Form.Field
                id="form-input-control-weight"
                control={Input}
                name="user_weight"
                placeholder="Enter your Weight"
                width="nine"
                onChange={handleChange}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Height
              </InputLabel>
              <Form.Field
                id="form-input-control-height"
                control={Input}
                name="user_height"
                placeholder="Enter your Height"
                width="nine"
                onChange={handleChange}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Reasons for joinng
              </InputLabel>
              <Form.Field
                fluid
                control={Select}
                options={options}
                name="reasonforjoin"
                placeholder="Reason for Joining"
                width="nine"
                onChange={handleReasonJoin}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Has your doctor ever said that you have a heart condition{" "}
                <br></br>
                condition and that you should only do physical acticity
                recomended by a doctor?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={Select}
                name="q_one"
                required
                placeholder="Select"
                options={optionsYesNO}
                width="one"
                onChange={handleQOne}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Do you feel pain in your chest when yo do any physical activity?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={Select}
                name="q_two"
                required
                placeholder="Select"
                options={optionsYesNO}
                width="one"
                onChange={handleQTwo}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                In the past month have you had chest pain when you were not
                doing physical activity?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={Select}
                name="q_three"
                required
                placeholder="Select"
                options={optionsYesNO}
                width="one"
                onChange={handleQThree}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Do you loose your balance because of dizziness or do you ever
                loose consciousness?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={Select}
                name="q_four"
                required
                placeholder="Select"
                options={optionsYesNO}
                width="one"
                onChange={handleQFour}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Do you have a bone or joint problem that could be made worse by
                a change in your physical activity?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={Select}
                name="q_five"
                required
                placeholder="Select"
                options={optionsYesNO}
                width="one"
                onChange={handleQFive}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Is your doctor currently prescribing drugs for your blood
                pressure or heart condition?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={Select}
                name="q_six"
                required
                placeholder="Select"
                options={optionsYesNO}
                width="one"
                onChange={handleQSix}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                Is your doctor currently prescribing drugs for your blood
                pressure or heart condition?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={Select}
                name="q_seven"
                required
                placeholder="Select"
                options={optionsYesNO}
                width="one"
                onChange={handleQSeven}
              />

              <InputLabel shrink htmlFor="bootstrap-input">
                WHAT CAN I HELP YOU WITH?
              </InputLabel>
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                name="user_message"
                placeholder="Message…"
                required
                value={toSend.user_message}
                onChange={handleChange}
              />

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          </div>
        </div>

        <div className="col-2 col2">
          <div className="rightside">
            <h1>Contact Number</h1>
            <a href="tel:+94766876602">076 687 6602</a>
            <h1>E-Mail</h1>
            <h3>fitnesswithnaveen@gmail.com</h3>
            <div className="socialbox"></div>
          </div>
        </div>
      </div>
      <div className="bottomBox">
        <div className="contactfottercover"></div>
      </div>
    </div>
  );
}

export default Contact;
