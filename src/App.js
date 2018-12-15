import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Project from './Projects';

class App extends Component {
  render() {
    const applicant={details:{name:'Abdur Rehman',contact:'0340-7507565',email:'abdur4082@gmail.com',address:'D-418 Satellite town,Rwp'},
  summary:'Computer Science graduate with a passion for software development.Willing to work as\
  a developer of mobile and web based solutions.',education:[{id:1,duration:'2010-2012',level:'Matric',institution:'Anmol Public High School'},
  {id:2,duration:'2012-2014',level:'Intermediate',institution:'GPGCS Fsd'},
  {id:3,duration:'2014-2018',level:'BS',institution:'QAU Isl'}]};
    return (
      <div className="container">
      
        <Header details={applicant.details}/>
        <Summary summary={applicant.summary}/>
        <Education education={applicant.education}/>
        <Project/>
    </div>
    );
  }
}

export default App;
