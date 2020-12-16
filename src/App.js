
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';



class App extends Component{
  state ={
      isLoading:true,
      movies:[],
  };
  getmovies = async () =>{
    const {
      data:{
        data:{movies},
      },
    }=await axios.get('https://yts-proxy.now.sh/list_movies.json');
  this.setState({movies:movies,isLoading:false});
  };

  componentDidMount(){
    //영화 데이터 로딩
   this.getmovies(); 
   
  }
   render(){
    const { isLoading,movies} = this.state;
    return( <div>{isLoading ? 'Lodaing...'  : movies.map(movie=>{
      console.log(movie);
     return(
      <Movie 
      id={movie.id} 
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      />
      );
    })} 
    </div>
    );
  }  
}

export default App;
