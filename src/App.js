import React, {Component} from 'react';
import Table from "./Table";

class App extends Component {
	state = {
		people: [],
		isAllDataFetched: false
	}
	componentDidMount() {
		this.fetchPeople("https://swapi.dev/api/people")
	}

	fetchPeople = (url) => {
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
			<div>
				<h1>Table with star wars api data used</h1>
				<Table data={this.state.isAllDataFetched ? this.state.people : "Loading"}/>
			</div>
		);
	}
}

export default App;