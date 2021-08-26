import React, { useState  } from 'react';
import "./Table.css"

const Table = ({data}) => {
	const [tablePage, setTablePage] = useState(0)
	const chunkedData = []
	const chunkSize = 50
	for (let i = 0, j = data.length; i < j; i += chunkSize) {
		let chunk = data.slice(i, i + chunkSize)
		chunkedData.push(chunk)
	}
	console.log(chunkedData)

	return (
		<>
			<div style={{height: "600px", display: "block", overflowY: "scroll"}}>
				<table>
					<thead>
					<tr>
						<th></th>
						<th>Имя</th>
						<th>Рост</th>
						<th>Вес</th>
						<th>Цвет волос</th>
						<th>Цвет глаз</th>
						<th>Цвет кожи</th>
					</tr>
					</thead>
					{data === "Loading"
						? data
						:
						<tbody>
						{chunkedData[tablePage].map((row, index) => (
							<tr>
								<td>{index + 1 + tablePage * 50}</td>
								<td>{row.name}</td>
								<td>{row.height}</td>
								<td>{row.mass}</td>
								<td>{row.hair_color}</td>
								<td>{row.eye_color}</td>
								<td>{row.skin_color}</td>
							</tr>
						))}
						</tbody>
					}
				</table>
			</div>
			<div>
				{chunkedData.map((item, index) => <button onClick={() => setTablePage(index)}>{index+1}</button>)}
			</div>
		</>
	);
};

export default Table;