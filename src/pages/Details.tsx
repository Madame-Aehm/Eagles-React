import { useParams } from "react-router-dom"
import { Character } from "../@types";
import Comments from "../components/Comments";
import useFetch from "../hooks/useFetch";


const Details = () => {
  const params = useParams();
  const id = Number(params.id)

  const idInvalid = (isNaN(id) || id < 0 || id > 826);

  const [ character, error, loading ] = useFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`)

  // const [character, setCharacter] = useState<null | Character>(null);

  // useEffect(() => {
  //   const fetchCharacter = async() => {
  //     try {
  //       const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  //       const result: Character = await response.json();
  //       console.log(result);
  //       setCharacter(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   if (!idInvalid) {
  //     //do our fetch
  //     fetchCharacter();
  //   }
  // }, [])

  
  if (idInvalid) {
    return <p>Id invalid..</p>
  }

  if (loading) {
    return <p>Loading....</p>
  }

  return (
    <div>
      {/* { idInvalid && <p>Id invalid</p> } */}
      { error && <p style={{ color: "red" }}>{ error }</p> }
      { character && <>
        <h1>{character.name}</h1>
        <img src={character.image} />
        <Comments characterID={character.id.toString()} />
      </>}
    </div>
  )
}

export default Details