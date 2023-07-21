import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import StarshipsCard from "../component/StarshipsCard";
import PlanetsCard from "../component/PlanetsCard";


export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store)
	return (
		<div className="text-center mt-5">
			<p>Characters</p>
			<div>
				{
					store.characters.map((char,index)=>{
						return(
							<CharacterCard key={index} char={char}/>
						)
					})
				}
			</div>

			<p>Planets</p>
			<div>
				{
					store.planets.map((planet,index)=>{
						return(
							<PlanetsCard key={index} planet={planet}/>
						)
					})
				}
			</div>

			<p>Starships</p>
			<div>
				{
					store.starships.map((ships,index)=>{
						return(
							<StarshipsCard key={index} ships={ships}/>
						)
					})
				}
			</div>

		</div>


	);

	
};
