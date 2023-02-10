import React from 'react';
import { FiTrash } from 'react-icons/fi';

const DeleteItem = ({ removeToDo, id }) => {
	return (
		<button
			className='text-gray-900 hover:text-red-600'
			onClick={() => removeToDo(id)}
		>
			<FiTrash />
		</button>
	);
};

export default DeleteItem;
