import React, { Component } from 'react';
import Swiper from 'swiper';
import './swiper.min.css';
import './App.css';
import SearchSlide from './SearchSlide.js';
import AlbumSlide from './AlbumSlide.js';

class App extends Component {

	constructor(){
		super()
		this.state = {artist: ""};
	}

	swiper;

	componentDidUpdate(){
		this.swiper.update();
		this.swiper.slideTo(1);  
	}

	componentDidMount() {
		this.swiper = new Swiper ('.swiper-container', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			preventClicks: true,
			slideToClickedSlide: true,
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows : true,
			},
		});
	}    

	addAlbum = album => {
		let albums = JSON.parse(window.localStorage.albums);
		albums.unshift(album);
		window.localStorage.setItem("albums", JSON.stringify(albums));
		this.setState({artist: ""});
		this.swiper.update();
	}

	removeAlbum = index => {
		return () => {
			let albums = JSON.parse(window.localStorage.albums);
			albums.splice(index, 1);
			window.localStorage.setItem('albums', JSON.stringify(albums));
			this.swiper.update();
			this.setState({artist: ""});        
		}
	}

	filterByArtist = newArtist => {
		return () => {
			this.setState({artist: newArtist});
		}
	}

	render(){
		let albumSlides = [];
		if(window.localStorage.albums){
			albumSlides = JSON.parse(window.localStorage.albums).map( (album, index) => {
				if(!this.state.artist || this.state.artist === album.artistName){
					return(
						<AlbumSlide key={index} album={album} removeAlbum={this.removeAlbum(index)}/>
					)
				}
				return undefined
			});
		}
		else window.localStorage.setItem("albums", "[]");
		return(
			<div className="App">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<SearchSlide artist={this.state.artist} filterByArtist={this.filterByArtist} addAlbum={this.addAlbum}/>
						{albumSlides}
					</div>
				</div>
			</div>
		)
	}
}

export default App;
