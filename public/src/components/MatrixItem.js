import React, { Component } from 'react';

export default class MatrixItem extends Component { 

    constructor(props){
        super(props);
        this.state = { cell: props.cell };
    }

    produceArrow(cell){
        let LEFT = 1;
        let TOP = 2;
        let DIAG = 3;
        console.log(cell.Direction);
        if(cell.Direction == LEFT){
            return (
                <i className="fa fa-arrow-right"></i>
            );
        }
        else if(cell.Direction == TOP){
            return (
                <i className="fa fa-arrow-down"></i>
            );
        }
        else if(cell.Direction == DIAG){
            return (
                <i className="fa fa-arrow-right rotate-45-right"></i>
            );
        }
    }

    render(){
        return (
            <td className = {this.state.cell.Mark === 1 ? "cellMarked" : undefined}> 
                 {this.state.cell.Score} {this.produceArrow(this.state.cell)}
            </td>
        );
    }
}