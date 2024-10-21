nums = [1, 2, 3, 4, 5, 6]
odds = nums.filter((n) => {
	return n % 2
})
console.log(odds)
lesser5 = nums.filter(n => n < 5)
console.log(lesser5)

const movies = [
	{
		title: 'movie1',
		score: 9.3,
	},
	{
		title: 'movie2',
		score: 3.4
	},
	{
		title: 'movie3',
		score: 8.3
	}
]

goodMovies = movies.filter(n => n.score > 8)
console.log(goodMovies)