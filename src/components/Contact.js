import React from 'react';
import '../css/Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { Email } from '@material-ui/icons';
import { Form, Input, } from 'semantic-ui-react';

const SERVICE_ID = "fitness_with_naveen";
const TEMPLATE_ID = "template_htze4af";
const USER_ID = "PDUW7fHXSq_hGkjkq";

function Contact() {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };



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
                        <Form onSubmit={handleOnSubmit}>
                            <Box sx={{ width: '100%' }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: -15, md: 0 }}>
                                    <Grid item xs={6}>
                                        <InputLabel shrink htmlFor="bootstrap-input">Name</InputLabel>
                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            name='user_first_name'
                                            placeholder='First Name…'
                                            required
                                            icon='user circle'
                                            iconPosition='left'
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            name='user_last_name'
                                            placeholder='Last Name…'
                                            required
                                            icon='user circle'
                                            iconPosition='left'
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLabel shrink htmlFor="bootstrap-input">Phone Number</InputLabel>
                                        <TextField
                                            style={{ width: '40%' }}
                                            id="outlined-password-input"
                                            label="Phone Number"

                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLabel shrink htmlFor="bootstrap-input">E-Mail</InputLabel>
                                        <TextField
                                            style={{ width: '60%' }}
                                            id="outlined-password-input"
                                            label="E-Mail"

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
                                            name='user_message'
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type='submit' variant="contained" >Submit</Button>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Form>



                    </div>
                </div>

                <div className="col-2">
                    <div className='rightside'>
                        <h1>Helo</h1>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
