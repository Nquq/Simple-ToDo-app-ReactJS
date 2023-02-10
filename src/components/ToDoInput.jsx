import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ToDoInput = ({ setToDo, todos }) => {
	const [title, setTitle] = useState('');

	const addToDo = title => {
		if (title !== '') {
			setToDo([
				{
					id: new Date(),
					title,
					isCompleted: false,
				},
				...todos,
			]);
			setTitle('');
		}
	};

	return (
		<div className='flex items-center justify-between gap-3 mb-5 rounded-2xl bg-gray-800 p-3 shadow-sm shadow-pink-500 w-full'>
			<AiOutlinePlusCircle
				size={25}
				onClick={() => addToDo(title)}
				className=' cursor-pointer text-pink-700'
			/>
			<input
				onChange={e => setTitle(e.target.value)}
				className='text-white rounded-2xl pl-2 bg-transparent border-none w-full outline-none'
				value={title}
				type='text'
				onKeyDown={event => event.key === 'Enter' && addToDo(title)}
				placeholder='Add ToDo'
			/>
		</div>
	);
};

export default ToDoInput;
