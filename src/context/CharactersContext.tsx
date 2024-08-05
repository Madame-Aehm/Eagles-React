import { createContext, ReactNode, useContext } from "react";
import { Character, CharacterFetchResponse } from "../@types";
import useFetch from "../hooks/useFetch";

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
};
const CharactersContextInitalValue = {
  characters: [] as Character[],
  error: "",
  loading: true,
};

export const CharactersContext = createContext<CharactersContextType>(
  CharactersContextInitalValue
);

//2. Define the content of our Store : what we "sell" (provide)

export const CharactersContextProvider = ({
  children,
}: CharactersContextProviderPropsType) => {

  const [ data, error, loading ] = useFetch<CharacterFetchResponse>("https://rickandmortyapi.com/api/character");
  const characters = data?.results || [];

  return (
    <CharactersContext.Provider
      value={{ characters, error, loading }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  return useContext(CharactersContext);
}
