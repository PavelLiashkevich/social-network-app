import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RootDataType, store } from './components/redux/data'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './components/styles/Global.styled'

export const renderTree = (store: RootDataType) => {
	const root = ReactDOM.createRoot(
		document.getElementById('root') as HTMLElement
	)
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</React.StrictMode>
	)
}

renderTree(store._data)
