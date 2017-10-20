import React, { Component } from 'react';
import './SearchSlide.css';
import searchIcon from './searchicon.svg';

class SearchSlide extends Component {

    constructor(props){
        super(props)
        this.state = {results: [], artist: ""}
    }

    search = () => {
        let term = document.getElementById('search').value;
        let url = 'https://itunes.apple.com/search?entity=album&attribute=artistTerm&term=' + encodeURI(term);
        fetch(url)
        .then( resp => resp.json())
        .then( data => {
            this.setState({results: data.results});
        })
    }

    addAlbum(album){
        return() => {
            document.getElementById('search').value = "";
            this.setState({results: []});
            this.props.addAlbum(album);            
        }
    }

    getArtists = () => {
        let albums = JSON.parse(window.localStorage.albums);
        let artists = [];
        for(let album of albums){
            if(!artists.includes(album.artistName)) artists.push(album.artistName);
        }
        return artists;
    }

    render(){

        let artists = this.getArtists().map( (artist, index) => {
            return(
                <a className={this.props.artist === artist ? 'button active' : 'button'} key={index} onClick={this.props.filterByArtist(artist)}>{artist}</a>
            )
        });

        let resultsList = this.state.results.map( (album, index) => {
            return(
                <div key={index} className="result-container" onClick={this.addAlbum(album)}>
                    <img alt="album art" src={album.artworkUrl60}/>
                    <div>
                        <h1>{album.collectionName}</h1>
                        <p>{album.artistName}</p>
                    </div>
                </div>
            )
        });

        return(
            <div className="swiper-slide">            
                <div className="album-art">
                    <h1>Alltime Albums</h1>
                    <img alt="search icon" src={searchIcon}/>
                    <input id="search" type="text" placeholder="search by artist" onChange={this.search}/>
                </div>
                {resultsList}
                <div className="info-container" style={{display: this.state.results.length ? 'none' : 'block'}}>
                    <p style={{display: this.getArtists().length < 2 ? 'block' : 'none'}}>Find and save your favourite<br/>albums from iTunes!</p>
                    <div style={{display: this.getArtists().length > 1 ? 'block' : 'none'}}>
                        <p>Showing albums by:</p>
                        <a className={this.props.artist === "" ? 'button active' : 'button'} onClick={this.props.filterByArtist('')}>All artists</a>
                        {artists}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchSlide;