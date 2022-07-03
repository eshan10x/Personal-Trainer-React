import React from 'react';
import '../css/Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';

function Contact() {
    return (
        <div className="contactPage">
            <div className="contact__header">
                <Navbar />
                <h1 id='subhead1'>Contact Us</h1>
                <p id='subhead'>FEEL FREE TO GET IN TOUCH TO FIND OUT HOW WE {'\n'} 
                CAN HELP YOU SOLVE YOUR STRENGTH OR FITNESS GOALS.</p>
            </div>

            <div className="rowContact">
                <div className="col-2">
                    <h1 id='contactusheader'>Contact Us</h1>
                    <div className='form'>
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: -15, md: 0 }}>
                                <Grid item xs={6}>
                                    <InputLabel shrink htmlFor="bootstrap-input">Name</InputLabel>
                                    <TextField
                                        style={{ width: '100%' }}
                                        id="outlined-basic"
                                        label="First"
                                        type="name"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        style={{ width: '100%',marginTop: 23}}
                                        id="outlined-password-input"
                                        label="Last"
                                        type="name"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel shrink htmlFor="bootstrap-input">Phone Number</InputLabel>
                                    <TextField
                                        style={{ width: '40%' }}
                                        id="outlined-password-input"
                                        label="Phone Number"
                                        type="name"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel shrink htmlFor="bootstrap-input">E-Mail</InputLabel>
                                    <TextField
                                        style={{ width: '60%' }}
                                        id="outlined-password-input"
                                        label="E-Mail"
                                        type="e-mail"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel shrink htmlFor="bootstrap-input">WHAT CAN I HELP YOU WITH?</InputLabel>
                                    <TextField
                                        style={{ width: '60%' }}
                                        multiline
                                        rows={4}
                                        id="outlined-password-input"
                                        label="E-Mail"
                                        type="name"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    </div>
                    
                    <div className="col-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.224049167725!2d-80.79523568479603!3d35.25068148029693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a074bfa0fdeb%3A0x2e0f09a3c787d5ae!2sThe%20Fitness%20Factory!5e0!3m2!1sen!2s!4v1609492245998!5m2!1sen!2s" width="500" height="350" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
