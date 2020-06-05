import React, { Component } from 'react';
import mathTrunc from 'math-trunc';
class Table extends Component {
    
    

    render() { 
        

        return ( 
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">No change</th>
      <th scope="col">Add 10.0002</th>
    </tr>
  </thead>
  <tbody>

           {
                Object.keys(this.props.users).map((user,i)=>
                    (<tr key={user}>
                    <th scope="row">{user}</th>

                    {(mathTrunc(this.props.users[user])%2 === 0 || user==="HKD")?(<td className="border border-danger">{this.props.users[user]}</td>):(<td >{this.props.users[user]}</td>)}
                    
                    {(mathTrunc(this.props.users_addten[i])%2 === 0 || user==="HKD")?(<td className="border border-danger">{this.props.users_addten[i]}</td>):(<td >{this.props.users_addten[i]}</td>)}
                    
                    
                    </tr>
                ))
            }

  </tbody>
</table>

        </div> );
    }
}
 
export default Table;