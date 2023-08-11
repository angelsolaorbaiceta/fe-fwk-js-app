import { createApp } from 'fe-fwk'
import { App } from './App'
import './styles.css'

const hostEl = document.getElementById('app')
createApp(App).mount(hostEl)
