import React from 'react';
import ToDoItem from './item/ToDoItem';

const ToDoList = ({ todos, changeToDo, removeToDo }) => {
	return (
		<div>
			<span className=' mb-2 block ml-2'>Tasks:</span>
			{todos.map(todo => (
				<ToDoItem
					key={todo.id}
					isCompleted={todo.isCompleted}
					todo={todo}
					changeToDo={changeToDo}
					removeToDo={removeToDo}
				/>
			))}
		</div>
	);
};

export default ToDoList;
