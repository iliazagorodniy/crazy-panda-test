import React, {Component} from 'react';
import Table from "../Table/Table";
import "./App.css"
import {divideDataToChunks} from "../helperFunctions";

class App extends Component {
	state = {
		people: [],
		universities: [],
		isAllDataFetched: false
	}
	componentDidMount() {
		// this.fetchPeopleStarWars("https://swapi.dev/api/people")
		fetch("http://universities.hipolabs.com/search?name=school")
			.then(res => res.json())
			.then(data => {
				this.setState({ universities: data, isAllDataFetched: true })
			})
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
						this.fetchPeople(data.next)
					} else {
						this.setState({isAllDataFetched: true}, () => console.log(this.state))
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
				<Table
					data={divideDataToChunks(this.state.universities,50)}
					isAllDataFetched={this.state.isAllDataFetched}
				/>
			</>
		);
	}
}

export default App;