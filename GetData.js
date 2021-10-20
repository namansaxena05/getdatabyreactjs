import React, { Component } from 'react';
import './App.css';

class GetData extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        hits: [],
        hit1:"",
        isLoading: false,
        error: null,
      };
    }
   
    componentDidMount() {
        this.setState({ isLoading: true });

     // fetch('http://localhost:4000/api/staff/')
     fetch('https://dry-bayou-99944.herokuapp.com/profiles/')
        .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      //  .then(data => this.setState({ name: data.name }));
        .then(data => this.setState({ hits: data, isLoading: false }));
    }

    render() {

        const { hits, isLoading, error } = this.state;
 
    if (error) {
      return <p>{error.message}</p>;
    }
 
    if (isLoading) {
      return <p>Loading ...</p>;
    }

        return (
            <div>


         
            {this.state.hits.map(hit =>
            <div className="showbox">
              <li key={hit.name}>
                <div className="namebox">{hit.name} </div>
                <div className="contactbox">{hit.contact}</div>
                <div class="clearfix"></div>
                {hit.email}<br></br>

                <div className="addressbox">{hit.address}</div>

              </li>
            </div>
            )}
            
          
          
          </div>
        );
      }
   
    
  }
   
  export default GetData;