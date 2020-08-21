import React from 'react';
export default ({ teamMembers}) => {
    return (
        <section className="page-section" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Meet Our Team</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <div className="row">
                    {teamMembers && teamMembers.map(({ name, role, photo, email, facebook, linkedin }, index) =>
                        <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={ photo } alt={name} />
                            <h4>{name}</h4>
                            <p className="text-muted">{role}</p>
                            <a className="btn btn-dark btn-social mx-2" href={email}><i className="fa fa-envelope"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href={facebook}><i className="fa fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href={linkedin}><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    )}
                </div>
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center"><p className="large text-muted">Interested in becoming part of the team? Applications are open!</p></div>
                    <div className="col-lg-12 mx-auto text-center">
                        <a target='_blank' className="text-center btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_4JgtWo0ZlLQwI0B">Join Out Team</a>
                    </div>
                </div>
            </div>
        </section>
    )
}