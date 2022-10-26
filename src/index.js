import React, { useEffect, useState } from 'react'
import * as actions from './store/actions'

import ReactDOM from 'react-dom/client'
import { initiateStore } from './store/store'

const store = initiateStore()
const App = params => {
	const [state, setState] = useState(store.getState())

	useEffect(() => {
		store.subscribe(() => {
			setState(store.getState())
		})
	}, [])

	const completedTask = taskId => {
		store.dispatch(actions.taskCompleted(taskId))
	}

	const changeTitle = taskId => {
		store.dispatch(actions.titleChange(taskId))
	}

	const deleteTask = taskId => {
		store.dispatch(actions.taskDeleted(taskId))
	}

	return (
		<>
			<h1>App</h1>
			<button onClick={completedTask}>Completed</button>
			<ul>
				{state.map(el => (
					<li key={el.id}>
						<p>{el.title}</p>
						<p>{`Completed: ${el.completed}`}</p>
						<button onClick={() => completedTask(el.id)}>Completed</button>
						<button onClick={() => changeTitle(el.id)}>Change title</button>
						<button onClick={() => deleteTask(el.id)}>Delete</button>
						<hr />
					</li>
				))}
			</ul>
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)