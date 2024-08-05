import { useEffect, useState } from "react";
import { NotOk } from "../@types";

// interface ReturnData<Placeholder> {
//   loading: boolean;
//   data: Placeholder | null;
//   error: string;
// }

type ReturnData<Placeholder> = [Placeholder | null, string, boolean]

const useFetch = <Placeholder,>(url: string): ReturnData<Placeholder> => {
  const [data, setData] = useState<Placeholder | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setError("");
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json() as Placeholder
          console.log(result);
          setData(result);
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
    fetchCharacters();
  }, []);

  return [
    data,
    error,
    loading
  ]
}

export default useFetch