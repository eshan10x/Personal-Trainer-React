import React, { useState, useEffect } from "react";
import "../css/Contact.css";
import Navbar from "./Navbar";
import InputLabel from "@mui/material/InputLabel";
import Swal from "sweetalert2";
import { Form, Input, TextArea, Select, Radio } from "semantic-ui-react";
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

const intrestedPrograms = [
  {key: "PT", text: "Personal Training", value: "Personal Training"},
  {key: "OT", text: "Online Training", value: "Online Training"},
  {key: "HV", text: "Home Visit", value: "Home Visit"},
  {key: "OAC", text: "Online ABS Class", value: "Online ABS Class"},
  {key: "ODT", text: "Outdoor Training", value: "Outdoor Training"},
  {key: "WP", text: "Workout Plan", value: "Workout Plan"},
  {key: "MP", text: "Meal Plan", value: "Meal Plan"},
];

const physicallyAtive = [
  { key: "LA", text: "Lightly Active", value: "Lightly Active" },
  { key: "MA", text: "Moderately Active", value: "Moderately Active" },
  { key: "VA", text: "Very Active", value: "Very Active" },
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
  const [answer, setAnwer] = useState("");
  const [answer2, setAnwer2] = useState("");
  const [answer3, setAnwer3] = useState("");
  const [answer4, setAnwer4] = useState("");
  const [answer5, setAnwer5] = useState("");
  const [answer6, setAnwer6] = useState("");
  const [answer7, setAnwer7] = useState("");

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
    intrestedProgram: "",
    activeLevel: "",
    q_one: "",
    q_two: "",
    q_three: "",
    q_four: "",
    q_five: "",
    q_six: "",
    q_seven: "",
    imageOne: "",
    userimg: "",
    user_message: "",
  });

  const handlegenderChange = (e, data) => {
    toSend.user_gender = data.value;
  };

  const handleReasonJoin = (e, data) => {
    toSend.reasonforjoin = data.value;
  };

  const handleActive = (e, data) => {
    toSend.activeLevel = data.value;
  };

  const handleIntrestedProgram = (e, data) => {
    toSend.intrestedProgram = data.value;
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

  const handleQChange = (event, { value }) => {
    setAnwer(value);
    console.log(value, "q1");
    toSend.q_one = value;
  };

  const handleQChange2 = (event, { value }) => {
    setAnwer2(value);
    console.log(value);
    toSend.q_two = value;
  };

  const handleQChange3 = (event, { value }) => {
    setAnwer3(value);
    console.log(value);
    toSend.q_three = value;
  };

  const handleQChange4 = (event, { value }) => {
    setAnwer4(value);
    console.log(value);
    toSend.q_four = value;
  };

  const handleQChange5 = (event, { value }) => {
    setAnwer5(value);
    console.log(value);
    toSend.q_five = value;
  };

  const handleQChange6 = (event, { value }) => {
    setAnwer6(value);
    console.log(value);
    toSend.q_six = value;
  };

  const handleQChange7 = (event, { value }) => {
    setAnwer7(value);
    console.log(value);
    toSend.q_seven = value;
  };

  // const [images, setimgs] = useState([]);
  // const [imgUrls, setImgUrls] = useState([]);

  // useEffect(() => {
  //   if (images.length < 1) return;
  //   const newImgUrls = [];
  //   images.forEach((image) => newImgUrls.push(URL.createObjectURL(image)));
  //   setImgUrls(newImgUrls);
  //   console.log("imgurl", imgUrls);
  //   toSend.imageOne = images;
  //   toSend.userimg = imgUrls.map((imageSrc) => (
  //     <img src={imageSrc} width="150px" height={"150px"} />
  //   ));
  // }, [images]);

  // const handleimg = (e, data) => {
  //   // setimg(...image, e.target.files[0]);
  //   setimgs([...e.target.files]);
  //   console.log("image", images[0]);
  // };

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

        <div className="mainbox">
          <Form onSubmit={handleOnSubmit} enctype="multipart/form-data">
            <h3>Personal Details</h3>

            <Form.Group widths="equal">
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
                label="First Name"
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
                label="Last Name"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-gender"
                control={Select}
                options={optionsGender}
                placeholder="Gender"
                name="user_gender"
                label="Gender"
                onChange={handlegenderChange}
                required
              />

              <Form.Field
                id="form-input-control-dateof-birth"
                control={Input}
                placeholder="dd/mm/yyyy"
                name="user_birth"
                label="Date of Birth"
                value={toSend.user_birth}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-nic"
                control={Input}
                placeholder="Enter your NIC Number"
                name="user_nic"
                width="eight"
                value={toSend.user_nic}
                onChange={handleChange}
                required
                label="N.I.C Number"
              />

              <Form.Field
                id="form-input-control-mobile-number"
                control={Input}
                name="user_mobile_number"
                placeholder="Mobile Number"
                required
                icon="mobile"
                width="eight"
                iconPosition="left"
                value={toSend.user_mobile_number}
                onChange={handleChange}
                label="Mobile Number"
              />

              <Form.Field
                id="form-input-control-e-mail"
                control={Input}
                name="user_mail"
                placeholder="E-Mail"
                required
                icon="mail"
                width="eight"
                iconPosition="left"
                value={toSend.user_mail}
                onChange={handleChange}
                label="E-Mail"
              />
            </Form.Group>

            <Form.Group>
              <Form.Field
                id="form-input-control-weight"
                control={Input}
                name="user_weight"
                placeholder="Enter your Weight"
                width="six"
                onChange={handleChange}
                label="Weight (kg)"
              />

              <Form.Field
                id="form-input-control-height"
                control={Input}
                name="user_height"
                placeholder="Enter your Height"
                width="six"
                onChange={handleChange}
                label="Height"
              />
            </Form.Group>

            <Form.Group>
              <Form.Field
                control={Select}
                options={options}
                name="reasonforjoin"
                placeholder="Reason for Joining"
                width="6"
                onChange={handleReasonJoin}
                label="Reasons for joinng"
              />
            </Form.Group>

            <Form.Field
              control={Select}
              options={intrestedPrograms}
              name="intrestedProgram"
              placeholder="Intrested Program"
              width="6"
              onChange={handleIntrestedProgram}
              label="Intrested Program"
              
            />

            <h3>Answer those simple question for us</h3>

            <br />

            <Form.Group>
              <label>
                Has your doctor ever said that you have a heart condition and
                that you should only do physical acticity recomended by a
                doctor?
              </label>
              <Form.Field
                control={Radio}
                label="Yes"
                name="q_one"
                value="Yes"
                checked={answer === "Yes"}
                onChange={handleQChange}
              />
              <Form.Field
                control={Radio}
                label="No"
                name="q_one"
                value="No"
                checked={answer === "No"}
                onChange={handleQChange}
              />
            </Form.Group>

            <br />

            <Form.Group>
              <label>
                Do you feel pain in your chest when you do any physical
                activity?
              </label>
              <Form.Field
                control={Radio}
                label="Yes"
                name="q_two"
                value="Yes"
                checked={answer2 === "Yes"}
                onChange={handleQChange2}
              />
              <Form.Field
                control={Radio}
                label="No"
                name="q_two"
                value="No"
                checked={answer2 === "No"}
                onChange={handleQChange2}
              />
            </Form.Group>

            <br />

            <Form.Group>
              <label>
                In the past month have you had chest pain when you were not
                doing physical activity?
              </label>
              <Form.Field
                control={Radio}
                label="Yes"
                name="q_three"
                value="Yes"
                checked={answer3 === "Yes"}
                onChange={handleQChange3}
              />
              <Form.Field
                control={Radio}
                label="No"
                name="q_three"
                value="No"
                checked={answer3 === "No"}
                onChange={handleQChange3}
              />
            </Form.Group>

            <br />

            <Form.Group>
              <label>
                Do you loose your balance because of dizziness or do you ever
                loose consciousness?
              </label>
              <Form.Field
                control={Radio}
                label="Yes"
                name="q_four"
                value="Yes"
                checked={answer4 === "Yes"}
                onChange={handleQChange4}
              />
              <Form.Field
                control={Radio}
                label="No"
                name="q_four"
                value="No"
                checked={answer4 === "No"}
                onChange={handleQChange4}
              />
            </Form.Group>

            <br />

            <Form.Group>
              <label>
                Do you have a bone or joint problem that could be made worse by
                a change in your physical activity?
              </label>
              <Form.Field
                control={Radio}
                label="Yes"
                name="q_five"
                value="Yes"
                checked={answer5 === "Yes"}
                onChange={handleQChange5}
              />
              <Form.Field
                control={Radio}
                label="No"
                name="q_five"
                value="No"
                checked={answer5 === "No"}
                onChange={handleQChange5}
              />
            </Form.Group>

            <br />

            <Form.Group>
              <label>
                Is your doctor currently prescribing drugs for your blood
                pressure or heart condition?
              </label>
              <Form.Field
                control={Radio}
                label="Yes"
                name="q_six"
                value="Yes"
                checked={answer6 === "Yes"}
                onChange={handleQChange6}
              />
              <Form.Field
                control={Radio}
                label="No"
                name="q_six"
                value="No"
                checked={answer6 === "No"}
                onChange={handleQChange6}
              />
            </Form.Group>

            <br />
            <Form.Group>
              <label>
                Is your doctor currently prescribing drugs for your blood
                pressure or heart condition?
              </label>
              <Form.Field
                control={Radio}
                label="Yes"
                name="q_seven"
                value="Yes"
                checked={answer7 === "Yes"}
                onChange={handleQChange7}
              />
              <Form.Field
                control={Radio}
                label="No"
                name="q_seven"
                value="No"
                checked={answer7 === "No"}
                onChange={handleQChange7}
              />
            </Form.Group>

            <br />

            <Form.Field
              control={Select}
              options={physicallyAtive}
              name="activeLevel"
              placeholder="How active are you?"
              width="6"
              onChange={handleActive}
              label="How active are you?"
            />

            {/* <input type="file" multiple accept="image/*" name="imageOne" onChange={handleimg} />
            { imgUrls.map(imageSrc => <img src={imageSrc} width="150px" height={"150px"} />) } */}

            <br />

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
              width="eight"
            />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        </div>

        <div className="conn=tactinfo">
          {/* <h1>Contact Number</h1>
            <a href="tel:+94766876602">076 687 6602</a>
            <h1>E-Mail</h1>
            <h3>fitnesswithnaveen@gmail.com</h3>
            <div className="socialbox"></div> */}
        </div>
      </div>
      <div className="bottomBox">
        <div className="contactfottercover"></div>
      </div>
    </div>
  );
}

export default Contact;
