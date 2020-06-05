import React ,{Component}from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Table from './components/table'
import mathTrunc from 'math-trunc';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{

  state = 
  {
    users:{},
    users_addten:{},

    loading:false
  }
   
   async componentDidMount(){
    this.setState({loading:true});
    const res = await axios.get('http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95');
    console.log(res.data);
    this.setState({users:res.data.rates,loading:false});
    console.log(this.state.users);
    console.log(Object.values(this.state.users).length)
    
    var store=[]
    for (var i=0;i<Object.values(this.state.users).length;i++){
    
       store[i]=Object.values(this.state.users)[i]+10.0002
    }
    this.setState({users_addten:store})
    console.log(this.state.users_addten)
    console.log((13%2));
    
   }

  

   
 

 render(){
  return (
    <div className="App">
      <Table users={this.state.users} users_addten={this.state.users_addten} CheckEven={this.CheckEven}></Table>
    </div>
  );
}}

export default App;
