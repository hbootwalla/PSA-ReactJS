import React from 'react';
import QueryBox from './QueryBox';
import ResultDIYTable from './ResultDIYTable'

export default class DIY extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: '', database: '', queryResult: '', databaseResult: '', matrix: [], gap: 0};
        this.queryChange = this.queryChange.bind(this);
    }

    queryChange(newQuery){
        var NW = window.NeedlemanWunsch(-3, newQuery.queryString, newQuery.databaseString);
        var matrix = NW.calculateMatrix();
        var result = NW.getResult();
        this.setState({query: newQuery.queryString, database: newQuery.databaseString, 
            queryResult: result.query, databaseResult: result.database, matrix, gap: newQuery.gap});
      }

    render(){
        return(
            <div>
                <div className ="row">
                    <div className="col-md-3">
                    <QueryBox mode={this.props.mode} display ={this.queryChange} />
                    </div>
                    <div className= "col-md-9 jumbotron">
                    <ResultDIYTable query={this.state}/>
                    </div>
                </div>
            </div>
        )

    }
}