import React from 'react'
import Navbar from './Navbar';
import '../css/Rates.css';
import { color } from '@mui/system';

function Rates() {
    return (
        <div className="rates">
            <div className="rates__header">
                <Navbar />
                <h1>Rates</h1>
            </div>

            <div className="withdrawRates">
                <h3 className='rateTitle'>Personal Training RATES</h3>
                <div className="rowRates">
                    <div className="collom4 coll1" style={{ maxWidth: '360px' }}>
                        <h1>Personal Training</h1>
                        <h3><span>RS. 15,000</span></h3>
                        <p>Per Person</p>
                        <button className="btn">Join Now</button>
                    </div>
                    <div className="collom4 coll2" style={{ maxWidth: '360px' }}>
                        <h1>Online Training</h1>
                        <h3><span>RS. 12,000</span></h3>
                        <p>For two Rs. 22,000</p>
                        <button className="btn">Join Now</button>
                    </div>
                    <div className="collom4 coll3" style={{ maxWidth: '360px' }}>
                        <h1>Home Visit</h1>
                        <h3><span>Rs. 30,000</span></h3>
                        <p>For two 45, 000</p>
                        <button className="btn">Join Now</button>
                    </div>
                    <div className="collom4 coll4" style={{ maxWidth: '360px' }}>
                        <h1>OutDoor Training</h1>
                        <h3><span>$23</span>/Auto Monthly</h3>
                        <p>$23 Initiation</p>
                        <button className="btn">Join Now</button>
                    </div>
                    <div className="collom4 coll5" style={{ maxWidth: '360px' }}>
                        <h1>WorkOut Plan</h1>
                        <h3><span>$23</span>/Auto Monthly</h3>
                        <p>$23 Initiation</p>
                        <button className="btn">Join Now</button>
                    </div>
                    <div className="collom4 coll6" style={{ maxWidth: '360px' }}>
                        <h1>Meal Plan     .</h1>
                        <h3><span>$23</span>/Auto Monthly</h3>
                        <p>$23 Initiation</p>
                        <button className="btn">Join Now</button>
                    </div>
                </div>
            </div>

            <div className="withdrawRates2">
                <h2>Day Passes</h2>
                <p>$15/Day</p>
            </div>

            <div className="withdrawRates3">
                <h2>Now you can save yourself a few steps by signing up for a membership online!</h2>
                <p>(Auto withdrawal memberships not available online.)</p>
                <h4>Join us now</h4>
            </div>

            <div className="withdrawRates4">
                <p>Corporate Memberships are available!</p>
                <br />
                <br />

                <p>For questions about memberships please contact us via email or phone</p>
                <br />
                <p>Email: info@fitnessfactorymaine.com</p>
                <p>Phone: 207-797-5700</p>

            </div>
        </div>
    )
}

export default Rates;;
