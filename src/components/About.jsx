import React from 'react';

export default () => {
    let headtext = {
        width:'50%',
        margin: 'auto',
        padding: '3%',
    };

    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About Us</h2>
                    <p style={headtext}>The primary goal of MEDIC is to research more economically viable, 
                    culturally appropriate and environmentally friendly biomedical devices for the purpose of improving 
                    medical health facilities in needy communities.</p>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-podcast fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Awareness</h4>
                        <p className="text-muted">Being able to raise awareness regarding medical needs in underprivileged and aboriginal communities.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Education</h4>
                        <p className="text-muted">Being able to educate others about the research done by the team and how it will benefit those within needy communities.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-link fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Connection</h4>
                        <p className="text-muted">Contact and help those in needy communities in regards to their pressing issues. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}