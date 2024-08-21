
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function handleClick() {
    createRoot(document.getElementById('root')).render(
        <App onClick={handleClick}/>
    )
}
createRoot(document.getElementById('root')).render(
    <App onClick={handleClick}/>
)
