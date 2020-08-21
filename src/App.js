import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';

function App() {

    const portfolioLinks = [
        {
            title: 'First Project',
            caption: 'something to say about this project'
        },
        {
            title: 'Second Project',
            caption: 'something to say about this project'
        },
        {
            title: 'Third Project',
            caption: 'something to say about this project'
        },
        {
            title: 'Fourth Project',
            caption: 'something to say about this project'
        },
        {
            title: 'Fifth Project',
            caption: 'something to say about this project'
        },
        {
            title: 'Sixth Project',
            caption: 'something to say about this project'
        },
    ]

    const teamMembers = [
        {
            name: 'Anjali Menon',
            role: 'Anjali\'s role',
            photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQE6DIT7I3YhJA/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=44NMDReOXSygqMXujlHnsmgxMoAz2NfUa-PYrRCXkuM',
            email: '',
            facebook: '',
            linkedin: '',
        },
        {
            name: 'Madhini Vigneswaran',
            role: 'Madhini\'s role',
            photo: '',
            email: '',
            facebook: '',
            linkedin: '',
        },{
            name: 'Hunter Lang',
            role: 'Hunter\'s role',
            photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQGRLWZt5DDxuw/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=VpthRY1IFfXviqWvR5o0zKGwXVbBKuDpAgNMe44PE6o',
            email: '',
            facebook: '',
            linkedin: '',
        },{
            name: 'Alice Li',
            role: 'Developer',
            photo: 'https://media-exp1.licdn.com/dms/image/C5603AQGNPIH5hTMEIQ/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=sFep8nBR2PnMvGVDCpW7LH1tTzOxmrmrpvNwwkHGdDM',
            email: '',
            facebook: '',
            linkedin: '',
        }
    ]

  return (
    <div className="App">
        <Nav></Nav>
        
        <Header></Header>
        
        <About></About>

        <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

        <Team teamMembers={teamMembers}></Team>
        
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-envelope"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
