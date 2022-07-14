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
import { useState, Image } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { Email } from '@material-ui/icons';
import { Form, Input, TextArea } from 'semantic-ui-react';

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
            </div>

            <div className="rowContact">
                <div className="col-2 col1">
                    <h4>FEEL FREE TO GET IN TOUCH TO FIND OUT HOW WE CAN HELP YOU SOLVE YOUR STRENGTH OR FITNESS GOALS.</h4>
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
                                    <Grid item xs={6} style={{ marginTop: '20px' }}>
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
                                    <Grid item xs={7}>
                                        <InputLabel shrink htmlFor="bootstrap-input">Phone Number</InputLabel>
                                        <Form.Field
                                            id='form-input-control-mobile-number'
                                            control={Input}
                                            name='user_mobile_number'
                                            placeholder='Mobile Number'
                                            required
                                            icon='mobile'
                                            iconPosition='left'
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <InputLabel shrink htmlFor="bootstrap-input">E-Mail</InputLabel>
                                        <Form.Field
                                            id='form-input-control-mobile-number'
                                            control={Input}
                                            name='user_mail'
                                            placeholder='E-Mail'
                                            required
                                            icon='mail'
                                            iconPosition='left'
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <InputLabel shrink htmlFor="bootstrap-input">WHAT CAN I HELP YOU WITH?</InputLabel>
                                        <Form.Field
                                            id='form-textarea-control-opinion'
                                            control={TextArea}
                                            name='user_message'
                                            placeholder='Message…'
                                            required
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

                <div className="col-2 col2">
                    <div className='rightside'>
                        <h1>Contact Number</h1>
                        <a href="tel:+94766876602">076 687 6602</a>
                        <h1>E-Mail</h1>
                        <h3>fitnesswithnaveen@gmail.com</h3>
                    </div>
                </div>
            </div>
            <div className='bottomBox'>
                <div className='contactfottercover'>
                </div>

            </div>
        </div>
    )
}

export default Contact
