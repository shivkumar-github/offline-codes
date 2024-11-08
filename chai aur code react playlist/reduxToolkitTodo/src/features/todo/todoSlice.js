import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
	todos: []
}; // initial state can be array or an object.

export const todoSlice = createSlice({
	name: 'todo', // each slices has names which can be choosen by our will
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
				isTodoEditable: false
			}

			state.todos.push(todo);
		}, // state provides state (like we have initial state) and action provides other needed arguements
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => (action.payload !== todo.id));
		},
		editTodo: (state, action) => { }
		// DOUBT: make update todo
	}
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;