import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { useAuth } from "../context/AuthContext";

const Homepage = () => {
  const { characters } = useContext(CharactersContext);
  const { user } = useAuth();

  return (
    <>
      <h1>This is the homepage</h1>
      {user ? (
        <h2>Welcome user {user.displayName || user.email}</h2>
      ) : (
        <h2> you are not logged in</h2>
      )}

      {characters ? (
        <h3>
          We will show you information about {characters.length} Rick and Morty
          Characters
        </h3>
      ) : (
        ""
      )}
    </>
  );
};

export default Homepage;
