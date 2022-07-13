import React from 'react';
import '../css/Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

function Footer() {
    return (
        <div className="footer">
            <div className="contact">
                <h3>Contact Us!</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div className="street">
                                <InstagramIcon fontSize="large" />
                            </div>
                        </div>
                        <div class="col-sm">
                            <div className="phone">
                                <PhoneIcon />
                            </div>
                        </div>
                        <div class="col-sm">
                            <div className="mail">
                                <MailIcon />
                                {/* <p>fitnesswithnaveen@gmail.com</p> */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="copyright">
                <p>© Copyright Fitness With Naveen. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
