import React from 'react';
import LearnMode from './LearnMode';
import DIY from './DIY';
import NavBar from './NavBar';
import FAQ from './FAQ';

export default class Application extends React.Component{
    constructor(props){
        super(props);
       this.setLearn= this.setLearn.bind(this);
       this.setDIY= this.setDIY.bind(this);
       this.setFAQ= this.setFAQ.bind(this);
        this.state = {
            learn:true,
            diy:false,
            faq:false
        }
    }

    setLearn(){
        this.setState(()=>{
            return(
                {
                    learn: true,
                    diy:false,
                    faq:false
                }
                
            )
        })
    }

    setDIY(){
        this.setState(()=>{
            return(
                {
                    learn: false,
                    diy:true,
                    faq:false
                }
                
            )
        })
    }

    setFAQ(){
        this.setState(()=>{
            return(
                {
                    learn: false,
                    diy:false,
                    faq:true
                }
                
            )
        })
    }

    render(){
        return(
            <div>
                <NavBar setLearn={this.setLearn} setDIY={this.setDIY}
                setFAQ = {this.setFAQ} />
                {(this.state.learn) && <LearnMode mode={this.state}/>}
                {(this.state.diy) && <DIY mode={this.state}/>}
                {(this.state.faq) && <FAQ mode={this.state} />}
            </div>
        )
    }
}
