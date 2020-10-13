import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth';
import SpotifyWebApi from 'spotify-web-api-js';

class Home extends React.Component {

  spotify = new SpotifyWebApi();

  constructor(props){
    super(props);

    this.state = {
      results: null
    }
  }

  componentDidMount = () => {
    const accessToken = Auth.getToken();
    this.spotify.setAccessToken(accessToken);
    this.spotify.search("Drake", ["artist"]).then(res => {
      this.setState({results: res})
    })

  }

  render(){

    console.log(this.state.results);

    return (
      <div className="Home">
        <h1>Drake</h1>
        {this.state.results ? this.state.results.artists.items[0].id : null}
      </div>
    )
  }
}

export default Home;
