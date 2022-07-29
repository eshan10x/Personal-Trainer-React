import React, { useState } from "react";
import "../css/Contact.css";
import Navbar from "./Navbar";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Select, Dropdown } from "semantic-ui-react";
import { send } from "emailjs-com";

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

function Contact() {
  const [toSend, setToSend] = useState({
    user_first_name: "",
    user_last_name: "",
    user_gender: "",
    user_mobile_number: "",
    user_mail: "",
    reasonforjoin: "",
    user_message: "",
  });

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
              <select
                name="user_gender"
                value={toSend.user_gender}
                onChange={handleChange}
                placeholder="Select Your Gender"
                id="genderselect"
              >
                <option disabled={true} value="">
                  Select Your Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

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
                id="form-input-control-mobile-number"
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
                Reasons for joinng
              </InputLabel>
              <Form.Field
                fluid
                control={Select}
                options={options}
                name="reasonforjoin"
                placeholder="Reason for Joining"
                width="nine"
                value={toSend.reasonforjoin}
                onChange={handleChange}
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
