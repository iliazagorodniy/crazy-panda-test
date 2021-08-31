import React, { Component } from 'react';
import "./Table.css"
import { sortData, filterData, divideDataToChunks, joinChunksInArr, cleanData} from "../helperFunctions"
const CHUNK_SIZE = 50

class Table extends Component {
	state = {
		chunkedData: [],
		tablePage: 0,
		headers: {
			name: "unsorted",
			gender: "unsorted",
			birth_year: "unsorted",
			height: "unsorted",
			mass: "unsorted",
			skin_color: "unsorted",
			hair_color: "unsorted",
			eye_color: "unsorted",
		},
		search: "",
	}

	componentDidMount() {
		this.setState({chunkedData: divideDataToChunks(this.props.data, CHUNK_SIZE)}, () => console.log(this.state.chunkedData))
	}

	handleSearchChange = (e) => {
		const {value} = e.target
		let mutableData = [...this.props.data]

		if (Object.values(this.state.headers).every(item => item === "unsorted")) {
			this.setState({
				search: value,
				chunkedData: divideDataToChunks(filterData(this.props.data, value), CHUNK_SIZE)
			})
		} else {
			let field = {}
			for (let key in this.state.headers) {
				if (this.state.headers[key] !== "unsorted") {
					field = {name: key, sortType: this.state.headers[key]}
				}
			}

			this.setState({
				search: value,
				chunkedData: divideDataToChunks(filterData(sortData(mutableData, field.name, field.sortType), value), CHUNK_SIZE)
			})
		}
	}

	handleSort = (fieldName) => {
		console.log(this.props.data)
		let mutableData = [...this.props.data]

		if (this.state.search === "") {
			switch (this.state.headers[fieldName]) {
				case "unsorted":
					this.setState({
						chunkedData: divideDataToChunks(sortData(mutableData, fieldName), CHUNK_SIZE),
						headers: {name: "unsorted", gender: "unsorted", birth_year: "unsorted", height: "unsorted", mass: "unsorted", skin_color: "unsorted", hair_color: "unsorted", eye_color: "unsorted", [fieldName]: "increment"}
					})
					break
				case "increment":
					this.setState({
						chunkedData: divideDataToChunks(sortData(mutableData, fieldName, "decrement"), CHUNK_SIZE),
						headers: {name: "unsorted", gender: "unsorted", birth_year: "unsorted", height: "unsorted", mass: "unsorted", skin_color: "unsorted", hair_color: "unsorted", eye_color: "unsorted", [fieldName]: "decrement"}
					})
					break
				case "decrement":
					this.setState({
						chunkedData: divideDataToChunks(this.props.data,CHUNK_SIZE),
						headers: {name: "unsorted", gender: "unsorted", birth_year: "unsorted", height: "unsorted", mass: "unsorted", skin_color: "unsorted", hair_color: "unsorted", eye_color: "unsorted"}
					})
					break
			}
		} else {
			let filterMutableData = filterData(mutableData, this.state.search)
			switch (this.state.headers[fieldName]) {
				case "unsorted":
					this.setState({
						chunkedData: divideDataToChunks(sortData(filterMutableData, fieldName), CHUNK_SIZE),
						headers: {name: "unsorted", gender: "unsorted", birth_year: "unsorted", height: "unsorted", mass: "unsorted", skin_color: "unsorted", hair_color: "unsorted", eye_color: "unsorted", [fieldName]: "increment"}
					})
					break
				case "increment":
					this.setState({
						chunkedData: divideDataToChunks(sortData(filterMutableData, fieldName, "decrement"), CHUNK_SIZE),
						headers: {name: "unsorted", gender: "unsorted", birth_year: "unsorted", height: "unsorted", mass: "unsorted", skin_color: "unsorted", hair_color: "unsorted", eye_color: "unsorted", [fieldName]: "decrement"}
					})
					break
				case "decrement":
					this.setState({
						chunkedData: divideDataToChunks(filterData(this.props.data, this.state.search), CHUNK_SIZE),
						headers: {name: "unsorted", gender: "unsorted", birth_year: "unsorted", height: "unsorted", mass: "unsorted", skin_color: "unsorted", hair_color: "unsorted", eye_color: "unsorted"}
					})
					break
			}
		}
	}

	render() {
		const { tablePage, chunkedData, headers, search } = this.state

		return (
			<>
				<label htmlFor={"search"} style={{display: "block"}}>Поиск по таблице</label>
				<input type="text" name={"search"} id={"search"} value={search} onChange={this.handleSearchChange}/>
				<div className={"wrapper"}>
					<table>
						<thead>
						<tr>
							<th className={"unhover"}>#</th>
							{Object.keys(this.state.headers).map(tableHead => {
								return (
									<th onClick={() => this.handleSort(tableHead)}>
										<div>{tableHead}</div>
										<div style={{fontWeight: "normal", fontSize: "10px"}}>{headers[tableHead]}</div>
									</th>
								)
							})}
						</tr>
						</thead>
						{chunkedData.length === 0
							? "Нет соответствующих данных"
							: <tbody>
							{chunkedData[tablePage].map((row, index) => (
								<tr>
									<td>{index + 1 + tablePage * CHUNK_SIZE}</td>
									<td>{row.name}</td>
									<td>{row.gender}</td>
									<td>{row.birth_year}</td>
									<td>{row.height}</td>
									<td>{row.mass}</td>
									<td>{row.skin_color}</td>
									<td>{row.hair_color}</td>
									<td>{row.eye_color}</td>
								</tr>
							))}
							</tbody>
						}
					</table>
				</div>
				<div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
					{chunkedData.length === 0
						? "Нет ни одной страницы"
						: chunkedData.map((item, index) => <button onClick={() => this.setState({tablePage: index})}>{index+1}</button>)}
				</div>
			</>
		);
	}
};

export default Table;