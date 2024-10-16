smalls = ["guy1", "guy2", "guy3"]
capitals = smalls.map(function (small) {
	return small.toUpperCase()
})
console.log(capitals)

// map in js creates new array based on operations performed on elements of old array of same index


movies = [
	{
		title: 'movie1',
		score: 9.3
	},
	{
		title: 'movie2',
		score: 6.3
	},
	{
		title: 'movie3',
		score: 9.8
	},
	{
		title: 'movie4',
		score: 4.3
	}
]

const titles = movies.map(function (obj) {
	return obj.title
})

console.log(titles)