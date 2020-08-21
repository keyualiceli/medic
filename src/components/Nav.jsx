import React from 'react';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#"><img src={require('../assets/img/navbar-logo.png')} /></a>
                <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse offset" id="navbarResponsive">
                    <ul className="nav navbar-nav text-uppercase menu_nav ml-auto">
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Projects</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}