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
            title: 'Syringes',
            caption: 'Syringes are one of the most common medical devices used for the administration of drugs inside a patient\'s body. However, these devices can be commonly misused by drug addicts within underprivileged communities. Such improper use can not only increase the chance of a transmission of diseases such as HIV, but also pose a large threat to the environment. <br />Since this would be compostable, we aim to make this a cheaper device which would be able to be shipped in large quantities to countries like Sri Lanka and to First Nations communities.',
            photo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1496821.jpg'
        },
        {
            title: 'Inelastic Bandages',
            caption: 'Materials such as bandages are highly important in underprivileged communities. However, high quality bandaids often come with a high cost. Thus, this is a tool which requires research in which we can find different ways of creating bulk quantities of such bandages which we can potentially ship abroad.',
            photo: `https://4.imimg.com/data4/NJ/KR/MY-2452310/lockout-safety-valve-and-electrical-lockout-kit-large-500x500.png`
        },
    ]

    const teamMembers = [
        {
            name: 'Anjali Menon',
            role: 'Co-Founder',
            photo: require('./assets/img/team/anjali.jpg'),
            email: 'mailto:anjalimenon@live.com',
            facebook: 'https://www.facebook.com/anjali.menon.5815',
            linkedin: 'https://linkedin.com/in/anjali-menon-a34536123',
        },
        {
            name: 'Madhini Vigneswaran',
            role: 'Co-Founder',
            photo: require('./assets/img/team/madhini.jpg'),            
            email: 'vmadhini5@gmail.com',
            facebook: 'https://www.facebook.com/vmadhini',
            linkedin: '',
        },{
            name: 'Hunter Lang',
            role: 'Vice President and Outreach Team Leader',
            photo: require('./assets/img/team/hunter.jpg'),
            email: 'mailto:hunter.lang42@gmail.com',
            facebook: 'https://www.facebook.com/hunter.j.lang42',
            linkedin: 'https://linkedin.com/in/hunterjlang42',
        },{
            name: 'Alice Li',
            role: 'Developer',
            photo: require('./assets/img/team/alice.jpg'),
            email: 'mailto:ky24li@uwaterloo.ca',
            facebook: 'https://www.facebook.com/cocolikeyu',
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
