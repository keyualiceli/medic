import React from 'react';

export default () => {
    return (
        <section className="page-section bg-light" id="problem">
            <div className="container">
                <div className="row">
                    <div className="text-center col-8">
                        <h2 className="section-heading text-uppercase">Current Problems</h2>
                    </div>
                    <div className="text-center col-4"></div>
                    <div className="text-center col-8 mb-4">
                        <p style={{margin:"7%",}}>With the pandemic at rise, several underprivileged communities are in desperate need of medical devices, and equipment which increases the chance of spreading within these communities in addition to health and economic shocks. 
                            <br></br>
                            <br></br>Specifically, Aboriginal and Sri-Lankan societies are in need of more cheaper, yet high quality medical devices. Although several university teams have been trying to research new devices, MEDIC will take the approach of trying to make old devices and materials such as syringes, and bandages more economically viable for the purposes of shipping locally and abroad. MEDIC will also focus on researching culturally-appropriate devices for aboriginal communities within the country.
                        </p>
                    </div>
                    <div className="text-center col-4 mb-4">
                        <img className="img-fluid" src={require('../assets/img/girl.jpg')} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}