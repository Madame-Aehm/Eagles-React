import { createContext, ReactNode, useEffect, useState } from "react";
import { Character, CharacterFetchResponse, NotOk } from "../@types";

//1. Create the context

//1.2 Define the initial information of the context
//1.3 Define the type of the context variable

type CharactersContextProviderPropsType = {
  children: ReactNode;
};

type CharactersContextType = {
  characters: Character[] | null;
  error: string;
  loading: boolean;
  fetchCharacters: () => Promise<void>;
};
const CharactersContextInitalValue = {
  characters: [] as Character[],
  error: "",
  loading: true,
  fetchCharacters: () => Promise.resolve(),
};

export const CharactersContext = createContext<CharactersContextType>(
  CharactersContextInitalValue
);

//2. Define the content of our Store : what we "sell" (provide)

export const CharactersContextProvider = ({
  children,
}: CharactersContextProviderPropsType) => {
  // console.log("children :>> ", children);
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=1`
      );
      if (response.ok) {
        const result: CharacterFetchResponse = await response.json(); // as CharacterFetchResponse
        console.log(result);
        setCharacters(result.results);
      } else {
        const result: NotOk = await response.json();
        console.log(result);
        setError(result.error);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <CharactersContext.Provider
      value={{ characters, error, loading, fetchCharacters }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
