import React from 'react';

export default () => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-white">Get in touch with us through social media or email!</h3>
                    <div className="text-center text-white">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-1">
                                <a target="_blank" className="btn btn-danger btn-social mx-2" style={{margin:"10%",}} href="#!">
                                    <i className="fa fa-envelope"></i></a>
                                Email Us
                            </div>
                            <div className="col-1 ">
                                <a target="_blank" className="btn btn-danger btn-social mx-2" style={{margin:"10%",}} href="#!">
                                    <i className="fa fa-facebook-f"></i></a>
                                Message Us
                            </div>
                            <div className="col-1 ">
                                <a target="_blank" className="btn btn-danger btn-social mx-2" style={{margin:"10%",}} href="#!">
                                    <i className="fa fa-linkedin"></i></a>
                                Connect with Us
                            </div>
                            <div className="col-1 ">
                                <a target="_blank" className="btn btn-danger btn-social mx-2" style={{margin:"10%",}} href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_4JgtWo0ZlLQwI0B">
                                    <i className="fa fa-users"></i></a>
                                    Join Us
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}