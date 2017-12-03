import React from 'react';

export default class ResultDIYCell extends React.Component{
    constructor(props){
        super(props);
        this.handleOut = this.handleOut.bind(this);
        this.state ={
            val: '',
            ans: props.ans
        }
    }

    handleOut(event){
        event.preventDefault();
        const ev = event.target;
        console.log(ev.value);
        this.setState(() =>{
            
                return(
                    {
                        val: ev.value
                    }
                )
            
        });
    }
    
    render(){
        return(
                    <td>
                        <label>
                           { (this.state.val) && 
                            (this.state.val == this.state.ans) &&
                            (<input className ="inputCell" type="text" onBlur= {this.handleOut}
                            styles={{background: 'red'}} />)
                            }
                            
                            { (this.state.val) && 
                                (this.state.val != this.state.ans) &&
                                (<input className ="inputCell" type="text" onBlur= {this.handleOut}
                                styles={{background: 'green'}}/>)
                            }

                            {(!this.state.val) &&
                                (<input className ="inputCell" type="text" onBlur= {this.handleOut} />)   
                            }
                        </label>
                     </td>
           
            )
        }
}