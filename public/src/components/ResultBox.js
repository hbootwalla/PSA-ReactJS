import React, { Component } from 'react';
import MatrixItem from './MatrixItem';

const ResultBox = (props) => {
    props = props || {query: {queryResult: '', databaseResult: ''} };    
    console.log(props);
    const titles = props.query.database.split("").map((val)=>{
        return(
            <th>{val}</th>
        );
    });

function iterate(row, rowIndex){
    return row.map((val, index)=>{
        if(index > 0){
            return(
                    <MatrixItem cell = {props.query.matrix[rowIndex][index]} 
                    />
            );
        }   
        else{
            return (
                <td className="queryTag">
                    {props.query.query[rowIndex-1]}
                </td>
            )
        }
    });
}

    const matrixValues = props.query.matrix.map((row,index)=>{
        if(index > 0){
            return(
                <tr>
                    {iterate(row, index)}
                </tr>
            );
        }
    });

    const resultDiv = () => {
        console.log(props);
        if(props.query.queryResult.length > 1){
            return (
                <table className = "table resultTable">
                <tr><td>Query Result </td> <td> {props.query.queryResult} </td></tr>
                <tr><td>Database Result </td> <td> {props.query.databaseResult} </td></tr>
                </table>
            );
        }   
    }

    return (
            <div>            
                    <table className="table table-bordered table-striped">
                        <thead>

                            <tr>
                                {titles}
                                
                            </tr>
                            
                        </thead>
                        <tbody>
                        {matrixValues}    
                        </tbody>
                    </table>
                    {resultDiv()}
            </div>
    );

}

export default ResultBox;