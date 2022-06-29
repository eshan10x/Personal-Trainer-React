import React from 'react';
import '../css/Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact() {
    return (
        <div className="contactPage">
            <div className="contact__header">
                <Navbar />
                <h1>Contact Us</h1>
            </div>

            <div className="rowContact">
                <div className="col-2">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-name"
                            label="First Name"
                        // value={name}
                        // onChange={handleChange}
                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="Last Name"

                        />
                    </Box>

                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Name" id="fullWidth" />

                    </Box>
                </div>
                {/* <div className="col-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.224049167725!2d-80.79523568479603!3d35.25068148029693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a074bfa0fdeb%3A0x2e0f09a3c787d5ae!2sThe%20Fitness%20Factory!5e0!3m2!1sen!2s!4v1609492245998!5m2!1sen!2s" width="500" height="350" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div> */}
            </div>
        </div>
    )
}

export default Contact
