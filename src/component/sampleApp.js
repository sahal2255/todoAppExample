import React, { Component } from 'react';
import './sampleApp.css';

export class SampleApp extends Component {
  state = {
    input: '',
    items:[]
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();  
    console.log(this.state.input);


    const {input,items}=this.state;
   if(input.trim()){

       this.setState({
           items:[...items,input],
           input:''
       })
     }
   }
   deleteItem=key=>{
    const allItems=this.state.items
    allItems.splice(key,1)
    this.setState({
        items:allItems
    })

   }

  render() {
    const { input,items } = this.state;
    return (
      <form className='todoContainer' onSubmit={this.handleSubmit}>
        <h1>Hello Todo</h1>
        <div className='input-section'>
          <input 
            type="text" 
            placeholder='Enter Something...' 
            value={input} 
            onChange={this.handleChange} 
          />
          <button type='submit'>Save</button>
        </div>
        <ul>
            {items.map((data,index) => (
            <li key={index}>{data}<i className="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i></li>
            ))}
        </ul>
      </form>
    );
  }
}

export default SampleApp;
