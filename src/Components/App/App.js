import React, { Component } from 'react';
import Table from "../Table/Table";
import "./App.css"
import { cleanData } from "../helperFunctions"

const headers = {
	name: "",
	gender: "",
	birth_year: "",
	height: "",
	mass: "",
	skin_color: "",
	hair_color: "",
	eye_color: "",
}

class App extends Component {
	state = {
		people: [],
		universities: [],
		isAllDataFetched: false
	}
	componentDidMount() {
		this.fetchPeopleStarWars("https://swapi.dev/api/people")
		// fetch("http://universities.hipolabs.com/search?name=school")
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		this.setState({ universities: data, isAllDataFetched: true })
		// 	})
	}

	fetchPeopleStarWars = (url) => {
		fetch(url)
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState(prevState => {
					const people = prevState.people
					people.push(...data.results)
					return {
						people: people
					}
				}, () => {
					if (data.next !== null) {
						this.fetchPeopleStarWars(data.next)
					} else {
						this.setState({isAllDataFetched: true})
					}
				})
				return data
			})
			.catch(err => {
				console.log(err.response)
			})
	}

	render() {
		return (
			<>
				<h1>Table with star wars api data used</h1>
				{this.state.isAllDataFetched
					? <Table data={cleanData(this.state.people, headers)}/>
					: <h2>Loading Data...</h2>
				}
			</>
		);
	}
}

export default App;