import { useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";
import { HeroCard } from "../components";

export const HeroPage = () => {

  const { id } = useParams();
  const hero = getHeroeById(id);
  console.log(hero);
  return (
    <>
      <h1>Hero PAge</h1>
      <hr />
      <HeroCard key={ hero.id}/>
    </>
  )
}
