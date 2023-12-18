import './Profil.css'
import pseudo from '../public/images/image-jeremy.png'
export function Profil(){
	return <div className="profil">
		<div className="pseudo">
			<div className='profil-img'>
				<img src={pseudo} alt="" />
			</div>
			<div className='pseudo-desc'>
					<div className='pseudo-report'>Report for</div>
					<div className='pseudo-name'>Jeremy Robson</div>
			</div>
		</div>
		<div className='nav'>
			<a href="#Daily" >Daily</a>
			<a href="#Weekly" className='active'>Weekly</a>
			<a href="#Monthly">Monthly</a>
		</div>
	</div>
}