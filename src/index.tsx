import { createRoot } from 'react-dom/client'
import Zdog from 'zdog'
import './style.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container!)

Zdog.waitForFonts().then(() => {
  // Once the fonts are loaded, render app
  root.render(<App />)
})
