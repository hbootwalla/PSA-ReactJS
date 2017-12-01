import React from 'react';

export default class QueryBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {queryString: '', databaseString:'', gap: 0};
    }

    setInput(props){
        this.props.onQueryChange(this.state);
    }

    updateQueryValue(event){
        this.setState({
            queryString : event.target.value,
            databaseString: this.state.databaseString,
            gap: this.state.gap
        });
    }

    updateDatabaseValue(event){
        this.setState({
            queryString : this.state.queryString,
            databaseString: event.target.value,
            gap: this.state.gap
        });
    }

    updateGapValue(event){
        this.setState({
            queryString : this.state.queryString,
            databaseString: this.state.databaseString,
            gap: event.target.value
        });
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                <input type="text" className="form-control" id="queryString" maxLength="8" placeholder="Query String" onChange={(event) => {this.updateQueryValue(event)}}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control" id="databaseString" maxLength="10" placeholder="Database String" onChange={(event)=>{this.updateDatabaseValue(event)}} />
                </div>
                <div className="form-group">
                <input type="text" className="form-control" id="gap" maxLength="2" placeholder="Gap" onChange={(event)=>{this.updateGapValue(event)}} />
                </div>                
                <button type="button" className="btn btn-primary" onClick={(props) => {this.setInput(props)}}>Submit</button>
            </form>
        )
    }
}