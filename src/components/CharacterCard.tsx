import { Link } from 'react-router-dom'
import { Character } from '../@types'

type Props = {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  return (
    <div style={{ border: "solid black 1px" }}>
      <img src={character.image} alt={"Picture of " + character.name} />
      <h5>{character.name}</h5>
      <Link to={"/characters/" + character.id}>Learn more!</Link>
    </div>
  )
}

export default CharacterCard