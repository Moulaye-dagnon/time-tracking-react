import { useState } from "react";
import { useEffect } from "react";

export function UseNavigation(){
	const [hash, sethash]= useState(location.hash)
	useEffect( ()=>{
		const handlehashNav = () => sethash(location.hash) 
		window.addEventListener('hashchange', handlehashNav)
		return ()=> removeEventListener('hashchange', handlehashNav)
	}
	) 
	const name =  hash.replace('#', "").toLowerCase() || 'weekly'
	return {page : name}
}