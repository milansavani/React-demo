import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {


  state = { albums: [] };


  componentWillMount() {
    debugger
    const BASE_URL = 'https://rallycoding.herokuapp.com/api/music_albums';
    axios.get(BASE_URL)
      .then((resp) => {
        this.setState({ albums: resp.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderAlbums() {
    debugger
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} data={album} />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
