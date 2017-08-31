import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}

  	componentWillMount() {
		fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=f98593a095b44546bf4073744b540da0')
			.then(response => response.json())
			.then(response => this.setState({reviews: response.results}))
	}

	render() {
		return <MovieReviews reviews={this.state.reviews} className='searchable-movie-reviews'/>
	}
}

export default SearchableMovieReviewsContainer