import React from 'react';
import { BsCheck } from 'react-icons/bs';

const Check = ({ isCompleted, changeToDo, id }) => {
	return (
		<button
			onClick={() => changeToDo(id)}
			className={`border-2 border-pink-700 ${
				isCompleted ? 'bg-pink-700' : ''
			} rounded-lg w-5 h-5 flex justify-center items-center `}
		>
			{isCompleted && <BsCheck size={25} className='text-gray-900 ' />}
		</button>
	);
};

export default Check;
