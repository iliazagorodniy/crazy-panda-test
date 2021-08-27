export const divideDataToChunks = (data, chunkSize) => {
	const chunkedData = []
	for (let i = 0, j = data.length; i < j; i += chunkSize) {
		let chunk = data.slice(i, i + chunkSize)
		chunkedData.push(chunk)
	}
	return chunkedData
}

// data — массив объектов (строки таблицы)
// sortField — по какому полю сортируем (имя, рост, вес и т.п.)
// sortType — сортировка по возрастанию или по убыванию (["increment", "number"] или ["increment", "string"] или ["decrement", "number"])
export const sortData = (data, sortField, sortType) => {
	console.log(data)
	console.log(sortField)
	const result = data.sort((a,b) => {
		let result
		if (a[sortField] > b[sortField]) result = 1
		if (a[sortField] === b[sortField]) result = 0
		if (a[sortField] < b[sortField]) result = -1
		return result
	})
	console.log(result)
}

export const filterData = (data, searchPattern) => {

}