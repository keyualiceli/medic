import React from 'react';

export default ( { portfolioLinks }) => {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Projects</h2>
                    <h3 className="section-subheading text-muted" style={{margin:"0%, 15%",}}>As members of the First Nations face medical needs, 
                    especially during the pandemic, MEDIC’s first project focuses on the creation of emergency kits composed of 
                    medical equipment that are economically viable. Sample equipment includes disposable syringes and inelastic bandages. <br></br><br></br>
                    The ultimate goal of this project is to transport our product to the community in the First Nations.</h3>
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