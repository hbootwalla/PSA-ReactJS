import React from 'react';

export default class QueryBox extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.state = {queryString: '', databaseString:'', gap: 0, scoringMatrix: 'default', method:'global'};
        
    }

    handleSubmit(event){
        this.setInput(event);
    }

    setInput(props){
        this.props.onQueryChange(this.state);
    }

    updateState(event){
        const name = event.target.name;
        const value = event.target.value;
        console.log(name + " " +  value);
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
        <div>
            <form className="form-inline">
                <div className="form-group">
                <input type="text" className="form-control" name = "queryString" id="queryString" maxLength="8" placeholder="Query String" onChange={(event) => {this.updateState(event)}}/>
                </div>

                <div className="form-group">
                <input type="text" className="form-control" name="databaseString" id="databaseString" maxLength="10" placeholder="Database String" onChange={(event)=>{this.updateState(event)}} />
                </div>

                <div className="form-group">
                <input type="text" className="form-control" name="gap" id="gap" maxLength="2" placeholder="Gap" onChange={(event)=>{this.updateState(event)}} />
                </div>
           
                <div className ="alignment-type">
                <div>Alignment Type</div>

                <div className="btn-group" data-toggle="buttons">

                    <label className={this.state.method == "global" ? "btn btn-primary active" : "btn btn-primary"}>
                    <input type="radio" name="method" id="option1" value="global" onChange={this.updateState} />
                    Global </label>

                    <label className={this.state.method == "local" ? "btn btn-primary active" : "btn btn-primary"}>
                    <input type="radio" name="method" id="option2" value="local" onChange={this.updateState} />
                    Local
                    </label>

                    <label className={this.state.method == "dovetail" ? "btn btn-primary active" : "btn btn-primary"}>
                    <input type="radio" name="method" id="option3" value="dovetail" onChange={this.updateState} />
                    Dovetail
                    </label>
            </div>
                    
                </div>

            <div className="matrix-type">
                <div>Scoring Matrix</div>
                    <div className="btn-group" data-toggle="buttons">
                
                                    <label className={this.state.scoringMatrix == "default" ? "btn btn-primary removeShadow active" : "btn btn-primary removeShadow"} >
                                    <input type="radio" name="scoringMatrix" id="option1" value="default" onChange={this.updateState} />
                                    Default </label>
                
                                    <label className={this.state.scoringMatrix == "blosum" ? "btn btn-primary active" : "btn btn-primary"}>
                                    <input type="radio" name="scoringMatrix" id="option2" value="blosum" onChange={this.updateState} />
                                    BLOSUM
                                    </label>
                
                                    <label className={this.state.scoringMatrix == "pam" ? "btn btn-primary active" : "btn btn-primary"}>
                                    <input type="radio" name="scoringMatrix" id="option3" value="pam" onChange={this.updateState} />
                                    PAM
                                    </label>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }
}
