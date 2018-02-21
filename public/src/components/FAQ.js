import React from 'react';
import '../assets/faq.js';

export default class FAQ extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            faq : faq
        };
        
        this.iterateFAQ = this.iterateFAQ.bind(this);
    }

    iterateFAQ() {
        
        return this.state.faq.map((val, index) => {
            console.log(index);
            if(index % 2 == 0){
                return (
                    
                    <div className = "container cardContainer">
                    <div className="card bg-primary text-white">
                    <div className="card-body">
                        <div className="card-title faqCell">{val[0]}</div>
                        <div className="card-text">{val[1]}</div>
                    </div>
                    </div>
                    </div>
                );
            }
            else{
                return (
                    
                    <div className = "container cardContainer">
                    <div className="card bg-light text-dark">
                    <div className="card-body">
                        <div className="card-title faqCell">{val[0]}</div>
                        <div className="card-text">{val[1]}</div>
                    </div>
                    </div>
                    </div>
                );
            }
        });
    }

    render() {
        return (
            <div className = "container">
                {this.iterateFAQ()}
            </div>
        );
    }
    
}