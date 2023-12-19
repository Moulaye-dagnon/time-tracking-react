import './task.css'
export function Task({colors}){
	const style = { backgroundColor : colors }
	return <div className='Task' style={{background :" right top url('../public/images/icon-work.svg') no-repeat", backgroundColor : colors}}>
			<div className='content'>
				<div className='title'>Work</div>
				<div className='current-time'>12hrs</div>
				<div className='img-menu'><img src='./public/images/icon-ellipsis.svg' alt="" /></div>
				<div className='last-time'>last weeks</div>
			</div>
	</div>
}