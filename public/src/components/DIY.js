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
          if(newQuery.scoringMatrix === "default")
            window.scoringMatrix = DefaultScoringMatrix;
          if(newQuery.scoringMatrix === "blosum")
            window.scoringMatrix = Blosum62Matrix;
          if(newQuery.scoringMatrix === "pam")
            window.scoringMatrix = PAM250Matrix;
          if(newQuery.method === "global")
            var Alignment = window.NeedlemanWunsch(Number(newQuery.gap), newQuery.queryString, newQuery.databaseString);
          else if(newQuery.method === "local")
            var Alignment = window.SmithWaterman(Number(newQuery.gap), newQuery.queryString, newQuery.databaseString);      
          else if(newQuery.method === "dovetail")
            var Alignment = window.Dovetail(Number(newQuery.gap), newQuery.queryString, newQuery.databaseString);
          var matrix = Alignment.calculateMatrix();
          var result = Alignment.getResult();
           
          this.setState({query: newQuery.queryString, database: newQuery.databaseString, 
              queryResult: result.query, databaseResult: result.database, matrix, gap: newQuery.gap, method: newQuery.method});
      }

    render(){
        return(
            <div>
                <div className ="row">
                    <div className="col-md-3">
                    <QueryBox onQueryChange = {(query) => this.queryChange(query)} />
                    </div>
                    <div className= "col-md-9 jumbotron defaultHeight">
                    <div className= "container">
                    <ResultDIYTable query={this.state}/>
                    </div>
                    </div>
                </div>
            </div>
        )

    }
}