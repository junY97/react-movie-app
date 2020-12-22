
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';



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
    return( <seciton className="container">{isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading..</span>

      </div>
      
    
    
    ):(
      <div className="movies"> 
      {movies.map(movie=>(
      <Movie 
      key={movie.id}
      id={movie.id} 
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      genres={movie.genres}
      />
    ))}
    </div> 
    )}
    </seciton>
    );
  }  
}

export default App;
