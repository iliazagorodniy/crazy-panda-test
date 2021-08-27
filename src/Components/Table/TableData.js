import React from 'react';

const TableData = ({data, tablePage}) => {
	return (
		<tbody>
		{data.map((row, index) => (
			<tr>
				<td>{index + 1 + tablePage * 50}</td>
				<td>{row.alpha_two_code}</td>
				<td>{row.country}</td>
				<td>{row.name}</td>
				<td>{row.domains[0]}</td>
				<td>{row.web_pages[0]}</td>
			</tr>
		))}
		</tbody>
	);
};

export default TableData;