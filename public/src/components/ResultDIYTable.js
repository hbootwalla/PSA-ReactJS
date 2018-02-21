import React from 'react';
import ResultDIYCell from './ResultDIYCell';

const ResultDIYTable = (props) =>{
    console.log(props);
    
    const titles = props.query.database.split("").map((val, index)=>{
        return(
            
            <th key={val+index}>{val}</th>
        );
    });

    function iterate(row, rowIndex){
        return row.map((val, index)=>{
            if(index > 0){
                return(
                        <ResultDIYCell key = {props.query.method + rowIndex + index + props.query.matrix[rowIndex][index].Score + Math.random()} ans = {props.query.matrix[rowIndex][index].Score} />
                );
            }   
            else{
                return (
                    <td className="queryTag" key = {props.query.method + props.query.query[rowIndex-1] + Math.random()}>
                        {props.query.query[rowIndex-1]}
                    </td>
                )
            }
        });
    }
    
        const matrixValues = props.query.matrix.map((row,index)=>{
            if(index > 0){
                return(
                    <tr key={row+index}>
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
        {props.query.queryResult && props.query.method == "global" && (<h3 className = "algoTitle">Needleman Wunsch Algorithm</h3>)} 
        {props.query.queryResult && props.query.method == "local" && (<h3 className = "algoTitle">Smith Waterman Algorithm</h3>)} 
        {props.query.queryResult && props.query.method == "dovetail" && (<h3 className = "algoTitle">Dovetail Algorithm</h3>)}        
        
                    <table className="table table-bordered table-striped">
                        <thead>
                                <tr>
                                    {props.query.queryResult.length > 1 && <th></th>}
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