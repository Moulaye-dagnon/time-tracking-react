import './App.css'
import { Profil } from './Profil'
import { Task } from './task'
import data from  '../data.json'
import { UseNavigation } from './Usenavition'
function App() {
	const {page} = UseNavigation()
  return (
   <div className='container'>
	<Profil page={page}/>
	
	  {data.map(taskItem => { 
		 if(page == 'Daily' ){
			return <Task 
			title={taskItem.title}
				currentHours={taskItem.timeframes.daily.current}
				lastHour={taskItem.timeframes.daily.previous}
				backgroundImg={taskItem.BackgroundImg}
				colors={taskItem.color}
			/>
		}
		else if(page == 'Weekly') {
			return <Task 
			title={taskItem.title}
				currentHours={taskItem.timeframes.weekly.current}
				lastHour={taskItem.timeframes.weekly.previous}
				backgroundImg={taskItem.BackgroundImg}
				colors={taskItem.color}
			/>
		}
		else if (page == 'Monthly') {
			return <Task 
			title={taskItem.title}
				currentHours={taskItem.timeframes.monthly.current}
				lastHour={taskItem.timeframes.monthly.previous}
				backgroundImg={taskItem.BackgroundImg}
				colors={taskItem.color}
			/>
		}
	 })}

   </div>
  )
}

export default App
