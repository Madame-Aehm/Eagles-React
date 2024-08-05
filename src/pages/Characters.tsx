import { useState } from "react";
import "../App.css";
// import { Character, CharacterFetchResponse, NotOk } from '../@types';
import CharacterCard from "../components/CharacterCard";
import { CharacterFetchResponse } from "../@types";
import useFetch from "../hooks/useFetch";

function Characters() {
  const [ data, error, loading ] = useFetch<CharacterFetchResponse>("https://rickandmortyapi.com/api/character");
  const characters = data?.results || [];

  const [filterValue, setFilterValue] = useState("");

  const characterCards = characters
    ? characters.filter((character) => {
        return character.name.toLowerCase().includes(filterValue.toLowerCase());
      })
    : [];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      {loading && <h1>Loading....</h1>}
      <input
        value={filterValue}
        onChange={handleChange}
        placeholder="Filter..."
      />
      <div
        style={{
          margin: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {characterCards.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </>
  );
}

export default Characters;
