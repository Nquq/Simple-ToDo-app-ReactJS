import React from 'react';
import Check from './Check';
import DeleteItem from './DeleteItem';

const ToDoItem = ({ todo, changeToDo, isCompleted, removeToDo }) => {
	return (
		<div className='flex items-center justify-between gap-2 mb-2 rounded-2xl bg-gray-800 p-5 shadow-sm shadow-pink-700'>
			<span className='flex items-center gap-2'>
				<Check
					id={todo.id}
					changeToDo={changeToDo}
					isCompleted={todo.isCompleted}
				/>
				<span className={`${isCompleted ? ' line-through' : ''}`}>
					{todo.title}
				</span>
			</span>
			<DeleteItem removeToDo={removeToDo} id={todo.id} />
		</div>
	);
};

export default ToDoItem;
