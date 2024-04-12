import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './components/styles/Global.styled'
import { BrowserRouter } from 'react-router-dom'
import { RootDataType, data } from './components/redux/data'

export const renderTree = (data: RootDataType) => {
	const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
	root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
}

renderTree(data)