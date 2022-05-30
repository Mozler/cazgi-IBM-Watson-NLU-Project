import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        const emotionsArr = Object.entries(this.props.emotions)
        const sortedArr = emotionsArr.sort((arr1,arr2)=>(arr2[1]-arr1[1])
        )
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              sortedArr.map(function(mapentry) {
                return (
                    <tr>
                    <td>{mapentry[0]}</td>
                    <td>{mapentry[1]}</td>
                    </tr>
                )
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;