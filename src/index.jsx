import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ConteMais from './pages/ConteMais.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/ConteMais',
		element: <ConteMais />
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
)
