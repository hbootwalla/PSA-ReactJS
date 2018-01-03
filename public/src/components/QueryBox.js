import React from 'react';

export default class QueryBox extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateMethod = this.updateMethod.bind(this);
        this.updateScoringMatrix = this.updateScoringMatrix.bind(this);
        this.state = {queryString: '', databaseString:'', gap: 0, scoringMatrix: 'default', method:'global'};
        
    }

    handleSubmit(event){
        // if(this.props.mode.learn === true)
        //     this.setInput(event);
        // else if(this.props.mode.diy === true){
            this.setInput(event);
        //}
    }

    setInput(props){
        this.props.onQueryChange(this.state);
    }

    updateQueryValue(event){
        this.setState({
            queryString : event.target.value
        });
    }

    updateDatabaseValue(event){
        this.setState({
            databaseString: event.target.value
        });
    }

    updateGapValue(event){
        this.setState({
            gap: event.target.value
        });
    }

    updateMethod(event){
        this.setState({
           method: event.target.value 
        });
    }

    updateScoringMatrix(event){
        this.setState({
           scoringMatrix: event.target.value 
        });
    }

    render() {
        return (
        <div>
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
           
                <div className ="alignment-type">
                <div>Alignment Type</div>

                <div className="btn-group" data-toggle="buttons">

                    <label className={this.state.method == "global" ? "btn btn-primary active" : "btn btn-primary"}>
                    <input type="radio" name="options" id="option1" value="global" onChange={this.updateMethod} />
                    Global </label>

                    <label className={this.state.method == "local" ? "btn btn-primary active" : "btn btn-primary"}>
                    <input type="radio" name="options" id="option2" value="local" onChange={this.updateMethod} />
                    Local
                    </label>

                    <label className={this.state.method == "dovetail" ? "btn btn-primary active" : "btn btn-primary"}>
                    <input type="radio" name="options" id="option3" value="dovetail" onChange={this.updateMethod} />
                    Dovetail
                    </label>
            </div>
                    
                </div>

            <div className="matrix-type">
                <div>Scoring Matrix</div>
                    <div className="btn-group" data-toggle="buttons">
                
                                    <label className={this.state.scoringMatrix == "default" ? "btn btn-primary removeShadow active" : "btn btn-primary removeShadow"} >
                                    <input type="radio" name="options" id="option1" value="default" onChange={this.updateScoringMatrix} />
                                    Default </label>
                
                                    <label className={this.state.scoringMatrix == "blosum" ? "btn btn-primary active" : "btn btn-primary"}>
                                    <input type="radio" name="options" id="option2" value="blosum" onChange={this.updateScoringMatrix} />
                                    BLOSUM
                                    </label>
                
                                    <label className={this.state.scoringMatrix == "pam" ? "btn btn-primary active" : "btn btn-primary"}>
                                    <input type="radio" name="options" id="option3" value="pam" onChange={this.updateScoringMatrix} />
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
