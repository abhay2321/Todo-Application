import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Todolist} from './component/Todolist'
// import './index.css'
import './component/Todolist.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todolist/>
  </StrictMode>
)
