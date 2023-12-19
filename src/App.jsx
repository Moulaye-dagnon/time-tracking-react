import './App.css'
import { Profil } from './Profil'
import { Task } from './task'

function App() {

  return (
   <div className='container'>
	<h1>Mon projet</h1>
	
	<Profil/>

	<Task colors={'#FF8B64'}/>

   </div>
  )
}

export default App
