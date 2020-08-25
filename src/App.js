import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Problem from './components/Problem';
import Uniqueness from './components/Uniqueness';
import Contact from './components/Contact';
//`https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}`

function App() {

    const portfolioLinks = [
        {
            title: 'First Project',
            caption: 'something to say about this project',
            photo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1496821.jpg'
        },
        {
            title: 'Second Project',
            caption: 'something to say about this project',
            photo: `https://4.imimg.com/data4/NJ/KR/MY-2452310/lockout-safety-valve-and-electrical-lockout-kit-large-500x500.png`
        },
    ]

    const teamMembers = [
        {
            name: 'Anjali Menon',
            role: 'Anjali\'s role',
            photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQE6DIT7I3YhJA/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=44NMDReOXSygqMXujlHnsmgxMoAz2NfUa-PYrRCXkuM',
            email: 'mailto:anjalimenon@live.com',
            facebook: '',
            linkedin: 'https://linkedin.com/in/anjali-menon-a34536123',
        },
        {
            name: 'Madhini Vigneswaran',
            role: 'Madhini\'s role',
            photo: 'data:image/png;base64,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',
            email: '',
            facebook: '',
            linkedin: '',
        },{
            name: 'Hunter Lang',
            role: 'Hunter\'s role',
            photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQGRLWZt5DDxuw/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=VpthRY1IFfXviqWvR5o0zKGwXVbBKuDpAgNMe44PE6o',
            email: 'mailto:hunter.lang42@gmail.com',
            facebook: '',
            linkedin: 'https://linkedin.com/in/hunterjlang42',
        },{
            name: 'Alice Li',
            role: 'Developer',
            photo: 'https://media-exp1.licdn.com/dms/image/C5603AQGNPIH5hTMEIQ/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=sFep8nBR2PnMvGVDCpW7LH1tTzOxmrmrpvNwwkHGdDM',
            email: 'mailto:ky24li@uwaterloo.ca',
            facebook: '',
            linkedin: 'https://www.linkedin.com/in/alice-li-keyu/',
        }
    ]

  return (
    <div className="App">
        <Nav></Nav>
        
        <Header></Header>
        
        <About></About>

        <Problem></Problem>

        <Uniqueness></Uniqueness>

        <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

        <Team teamMembers={teamMembers}></Team>
        
        <Contact></Contact>
        
        <footer className="footer py-4">
            <div className="container">
                
                    <div className="text-center section-heading">❤️ © Copyright 2020 MEDIC</div>
                    
               
            </div>
        </footer>
    </div>
  );
}

export default App;
