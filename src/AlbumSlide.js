import React, { Component } from 'react';
import './SearchSlide.css';

class AlbumSlide extends Component {

    render(){
        return(
            <div className="swiper-slide">
                <div className="album-art" style={{backgroundImage:'url(' + this.props.album.artworkUrl100 + ')'}}></div>
                <div className="info-container">
                    <h1>{this.props.album.collectionName}</h1>
                    <p>{this.props.album.artistName}, {new Date(this.props.album.releaseDate).getFullYear()}</p>
                    <a href={this.props.album.collectionViewUrl} className="button">Go to iTunes ({this.props.album.collectionPrice} {this.props.album.currency})</a>
                    <a onClick={this.props.removeAlbum} className="button red">Remove</a>
                </div>
            </div>
        )
    }

}

export default AlbumSlide;