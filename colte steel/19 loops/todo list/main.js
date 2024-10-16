tasks = []
while (1) {
	let command = prompt("Enter your command : ")
	if (command === "quit") {
		break
	}
	else if (command === "new") {
		let newTask = prompt("Enter new task : ")
		tasks.push(newTask)
	}
	else if (command === "view") {
		for (i in tasks) {
			console.log(`${i} ${tasks[i]}`)
		}
	}
	else if (command === "delete") {
		let delInd = parseInt(prompt("Enter the index of task to delete : "))
		if (!Number.isNaN(delInd)) {
			console.log("Invalid Index!")
			continue
		}
		tasks.splice(delInd,1)
	}
	else {
		// alert("Invalid Input!")
	}
}
