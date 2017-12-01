import React from 'react';
import QueryBox from './QueryBox';
import ResultBox from './ResultBox';

export default class MainComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {query: '', database: '', queryResult: '', databaseResult: '', matrix: [], gap: 0};
  }

  queryChange(newQuery){
    var NW = window.NeedlemanWunsch(-3, newQuery.queryString, newQuery.databaseString);
    var matrix = NW.calculateMatrix();
    var result = NW.getResult();
    this.setState({query: newQuery.queryString, database: newQuery.databaseString, 
        queryResult: result.query, databaseResult: result.database, matrix, gap: newQuery.gap});
  }

  render(){
    return (
      <div className="jumbotron">
        <QueryBox onQueryChange = {(query) => this.queryChange(query)}/>
        <ResultBox query={this.state} /> 
      </div>
    );
  }
};
