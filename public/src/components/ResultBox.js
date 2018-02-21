import React, { Component } from 'react';
import MatrixItem from './MatrixItem';

const ResultBox = (props) => {
    // props =  {query: {queryResult: '', databaseResult: ''} };   
    console.log(props);
    
    const titles = props.query.database.split("").map((val)=>{
        return(
            <th key={val}>{val}</th>
        );
    });

function iterate(row, rowIndex){
    return row.map((val, index)=>{
        if(index > 0){
            return(
                    <MatrixItem key = {props.query.method + rowIndex + index + props.query.matrix[rowIndex][index].Score + Math.random()} cell = {props.query.matrix[rowIndex][index]} />
            );
        }   
        else{
            return (
                <td key = {props.query.method + props.query.query[rowIndex-1] + Math.random()} className="queryTag">
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
                <table className = "table resultTable table-bordered table-striped">
                <tbody>
                <tr><td>Query Result </td> {props.query.queryResult.replace(/ /g,'').split("").map((val) => <td>{val}</td>)} </tr>
                <tr><td>Database Result </td>  {props.query.databaseResult.replace(/ /g,'').split("").map((val) => <td>{val}</td>)} </tr>
                </tbody>
                </table>
            );
        }   
    }

    return (
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
                    {resultDiv()}
            </div>
    );

}

export default ResultBox;


// import React, { Component } from 'react';
// import MatrixItem from './MatrixItem';

// export default class ResultBox extends React.Component {
 
// constructor(props){
//     // props =  {query: {queryResult: '', databaseResult: ''} };   
//     super(props);
//     this.state = {query: props.query};
//     this.iterate = this.iterate.bind(this);
//  }

// shouldComponentUpdate(nextState, nextProps, nextContext) {
//     return true;
// }

// iterate(row, rowIndex){
//     return row.map((val, index)=>{
//         if(index > 0){
//             return(
//                     <MatrixItem cell = {this.state.query.matrix[rowIndex][index]} />
//             );
//         }   
//         else{
//             return (
//                 <td className="queryTag">
//                     {this.state.query.query[rowIndex-1]}
//                 </td>
//             )
//         }
//     });
// }   

//         render() {
//         const titles = this.state.query.database.split("").map((val)=>{
//             return(
//                 <th>{val}</th>
//             );
//         });

//         const resultDiv = () => {
//             if(this.state.query.queryResult.length > 1){
//                 return (
//                     <table className = "table resultTable table-bordered table-striped">
//                     <tr><td>Query Result </td> <td> {this.state.query.queryResult.split("").map((val) => <td>{val}</td>)} </td></tr>
//                     <tr><td>Database Result </td> <td> {this.state.query.databaseResult.split("").map((val) => <td>{val}</td>)} </td></tr>
//                     </table>
//                 );
//             }   
//         }
//         const matrixValues = this.state.query.matrix.map((row,index)=>{
//             if(index > 0){
//                 return(
//                     <tr>
//                         {iterate(row, index)}
//                     </tr>
//                 );
//             }
//         });
    
//     return (
//             <div>            
//                     <table className="table table-bordered table-striped">
//                         <thead>
//                             <tr>
//                                 {this.state.query.queryResult.length > 1 && <th></th>}
//                                 {titles}
//                             </tr>
                            
//                         </thead>
//                         <tbody>
//                             {matrixValues}    
//                         </tbody>
//                     </table>
//                     {resultDiv()}
//             </div>
//     );
// }
// }
