import React from 'react';
import LearnMode from './LearnMode';
import DIY from './DIY';
import NavBar from './NavBar';
import FAQ from './FAQ';

import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';

export default class Application extends React.Component{
    constructor(props){
        super(props);       
    }

    render(){
        return(
            <Router>
                <div>
                    <NavBar />
                    <div>
                    <Route exact path='/' component = {LearnMode} />
                    <Route exact path='/diy' component = {DIY} />
                    <Route exact path='/faq' component = {FAQ} />
                    </div>
                </div>
            </Router>
        )
    }
}
