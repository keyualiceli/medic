import React from 'react';
export default ({ teamMembers}) => {
    return (
        <section className="page-section" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
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
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    )
}