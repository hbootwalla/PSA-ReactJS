import React from 'react';
import ResultDIYCell from './ResultDIYCell';

const ResultDIYTable = (props) =>{
    
    const titles = props.query.database.split("").map((val)=>{
        return(
            
            <th>{val}</th>
        );
    });

    function iterate(row, rowIndex){
        return row.map((val, index)=>{
            if(index > 0){
                return(
                        <ResultDIYCell ans = {props.query.matrix[rowIndex][index].val} />
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
            if(props.query.queryResult.length > 1){
                return (
                    <table className = "table resultTable">
                    <tr><td>Query Result </td> <td> {props.query.queryResult} </td></tr>
                    <tr><td>Database Result </td> <td> {props.query.databaseResult} </td></tr>
                    </table>
                );
            }   
        }

        const checkResult = () =>{
            
        }
    
    return(
                        <div>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                            <tr>
                                                <th></th>
                                                {titles}
                                            </tr>
                                    </thead>
                                
                                    <tbody>
                                              {matrixValues}
                                    </tbody>
                                </table>
                        </div>
    )
}

export default ResultDIYTable;