import './App.css'
import { Profil } from './Profil'
import { Task } from './task'
import data from  '../data.json'
import { UseNavigation } from './Usenavition'
function App() {
	const {page} = UseNavigation()
	/**
	 * 
	 * @param {object} item a data object
	 * @param {string} timeframe the current choose of page 
	 * @returns {object{key,current,previous}}
	 */
	const gettimeframes = (item, timeframe)=>({
		key : timeframe,
		current : item.timeframes[timeframe].current,
		previous : item.timeframes[timeframe].previous
	})
  return (
	
   <div className='container'>
	<Profil page={page}/>
	{data.map((item, index)=>{
		const timeFromData = gettimeframes(item,page)
		return <Task
		key={index}
		title={item.title}
		currentHours={timeFromData.current}
		lastHour={timeFromData.previous}
		colors={item.color}
		backgroundImg={item.BackgroundImg}
		/>
	})}
   </div>
  )
}

export default App
