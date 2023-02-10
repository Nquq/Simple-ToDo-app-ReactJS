import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

const data = [
	{
		id: 121212,
		title: 'Приготовить еды',
		isCompleted: false,
	},
	{
		id: 12122312,
		title: 'Купить macbook',
		isCompleted: false,
	},
	{
		id: 121545212,
		title: 'Убрать в квартире',
		isCompleted: false,
	},
	{
		id: 12154521342,
		title: 'Зайти в магазин',
		isCompleted: false,
	},
];

function App() {
	const [todos, setToDos] = useState(data);

	const changeToDo = id => {
		const copy = [...todos];
		const current = copy.find(t => t.id === id);
		current.isCompleted = !current.isCompleted;
		setToDos(copy);
	};

	const removeToDo = id => {
		setToDos([...todos].filter(t => t.id !== id));
	};

	return (
		<div className=' w-4/5 mx-auto h-screen text-white'>
			<h1 className=' text-lg mb-2 text-center font-bold'>ToDo App</h1>
			<ToDoInput setToDo={setToDos} todos={todos} />
			<ToDoList todos={todos} changeToDo={changeToDo} removeToDo={removeToDo} />
		</div>
	);
}

export default App;
