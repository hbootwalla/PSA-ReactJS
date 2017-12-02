import React from 'react';
import QueryBox from './QueryBox';

export default class DIY extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className ="row">
                    <div className="col-md-3">
                    <QueryBox />
                    </div>
                    <div className= "col-md-9">
                    </div>
                </div>
            </div>
        )

    }
}