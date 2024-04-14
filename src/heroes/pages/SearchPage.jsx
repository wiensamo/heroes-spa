import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string';
import { getHereosByName } from "../helpers";

export const SearchPage = () => {

const navigate = useNavigate();
const location = useLocation();
const { q='' } = queryString.parse(location.search);
const heroes = getHereosByName(q);

const showSearch = (q.length ===0);
const showError = (q.length>0) && heroes.length===0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  })
  
  const onSearchSubmit =(event)=>{
    event.preventDefault();
    if( searchText.trim().length <1 ) return;
    navigate(`?q=${searchText}`);
  }
  
  
  return (
    <>
    <h1>Search</h1>
      <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text"
                placeholder="Search a Hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-outline-primary mt-2">
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h5>Result</h5>
            <hr /> 
            {/* {
              (q==='')
              ? <div className="alert alert-primary"></div>
              : (heroes.length === 0) &&  <div className="alert alert-danger">No hero with <b>{q}</b> </div>
            } */}
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                 style={{display: showSearch ?'':'none'}}>
              Search a hero
            </div>
            <div className="alert alert-danger animate__animated animate__fadeIn" 
                 style={{display: showError ? '':'none'}}>
              No hero with <b>{q}</b> 
            </div>

           
            {
              heroes.map( hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
            {/* {<HeroCard />} */}
          </div>
        </div>
            
    </>
  )
}
