import React from 'react';

export default class ResultDIYCell extends React.Component{
    constructor(props){
        super(props);
        this.handleOut = this.handleOut.bind(this);
        this.state ={
            ans: props.ans
        }
    }

    handleOut(event){
        event.preventDefault();
        const ev = event.target.value;
        this.setState(() =>{
                return(
                    {
                        val: ev
                    }
                )
            
        });
    }
    
    render(){
        return(
                    <td className = {this.state.val ? ((this.state.val == this.state.ans) ? "green" : "red") : undefined}>
                        <div className = "side_by_side">
                             <input id="some" className ="inputCell" type="number" onBlur= {this.handleOut} /> 
                             {(this.state.val && (this.state.val != this.state.ans)) && <span className="outputCell">{this.state.ans}</span>}
                        </div>
                     </td>
           
            )
        }
}