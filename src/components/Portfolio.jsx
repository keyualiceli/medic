import React from 'react';

export default ( { portfolioLinks }) => {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Projects</h2>
                    <h3 className="section-subheading text-muted">What we have done and are planning to do</h3>
                </div>
                <div className="row">
                    { portfolioLinks && portfolioLinks.map(({ title, caption, photo }, index) => 
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={ photo } alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>{ title }</h4>
                                    <p className="text-muted">{ caption }</p>
                                </div>
                            </div>
                        </div>) 
                    }
                </div>
            </div>
        </section>
    )
}