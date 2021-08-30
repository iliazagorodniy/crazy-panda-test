export const divideDataToChunks = (data, chunkSize) => {
	const chunkedData = []
	for (let i = 0, j = data.length; i < j; i += chunkSize) {
		let chunk = data.slice(i, i + chunkSize)
		chunkedData.push(chunk)
	}
	return chunkedData
}

export const joinChunksInArr = (data) => {
	let unchunkedArr = []
	data.forEach((item) => {
		unchunkedArr.push(...item)
	})
	return unchunkedArr
}

// data — массив объектов (строки таблицы)
// sortField — по какому полю сортируем (имя, рост, вес и т.п.)
// sortType — сортировка по возрастанию или по убыванию "increment" или "decrement"
export const sortData = (data, sortField, sortType = "increment") => {
	const res = data.sort((a,b) => {
		let result
		if (a[sortField] > b[sortField]) result = 1
		if (a[sortField] === b[sortField]) result = 0
		if (a[sortField] < b[sortField]) result = -1
		return sortType === "increment" ? result : result * -1
	})
	if (sortField === "height" || sortField === "mass") {
		return res.sort((a, b) => {
			return sortType === "increment" ? a[sortField] - b[sortField] : b[sortField] - a[sortField]
		})
	} else {
		return res
	}
}

export const filterData = (data, searchPattern) => {
	return data.filter((item) => {
		let objValuesString = Object.values(item).join('')
		return objValuesString.includes(searchPattern)
	})
}

export const cleanData = (data, headers) => {
	return data.map((obj) => {
		let cleanedObj = {}
		for (let key in obj) {
			if (headers[key] !== undefined) {
				cleanedObj[key] = obj[key]
			}
		}
		return cleanedObj
	})
}