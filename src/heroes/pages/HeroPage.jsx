import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo( ()=> getHeroeById(id), [ id ]);

  const onNavigateBack = () =>{
    navigate(-1);
  }

  if(!hero){
    return <Navigate to="/marvel"/>
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img 
            src={ `/assets/heroes/${id}.jpg` } 
            alt={ hero.superhero }
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li> <b>Alter Ego:</b> { hero.alter_ego } </li>
            <li> <b>Publisher:</b> { hero.publisher } </li>
            <li> <b>First appearance</b> { hero.first_appearance } </li>
          </ul>
          <h5 className="mt-3"> Characters </h5>
          <p>{ hero.characters }</p>
          <button
            className="btn btn-primary"
            onClick={onNavigateBack}
          >Back</button>
        </div>
      </div>
     
    </>
  )
}
