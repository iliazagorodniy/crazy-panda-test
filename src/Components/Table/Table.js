import React, { useState  } from 'react';
import "./Table.css"
import { sortData } from "../helperFunctions"
import TableData from "./TableData";

const Table = ({data, isAllDataFetched}) => {
	const [tablePage, setTablePage] = useState(0)

	console.log(data)
	return (
		<>
			<div className={"wrapper"}>
				<table>
					<thead>
					<tr>
						<th></th>
						<th onClick={() => sortData(data,"alpha_two_code", )}>Код страны</th>
						<th onClick={() => sortData(data,"country", )}>Страна</th>
						<th onClick={() => sortData(data,"name", )}>Название</th>
						<th onClick={() => sortData(data,"domains[0]", )}>Домен</th>
						<th onClick={() => sortData(data,"web_pages[0]", )}>Сайт</th>
					</tr>
					</thead>
					{!isAllDataFetched
						? data
						: <TableData
							data={data[tablePage]}
							tablePage={tablePage}/>
					}
				</table>
			</div>
			<div>
				{data === "Loading"
					? "Calculationg number of pages"
					: data.map((item, index) => <button onClick={() => setTablePage(index)}>{index+1}</button>)}
			</div>
		</>
	);
};

export default Table;