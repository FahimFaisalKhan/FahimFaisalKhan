import { useContext, useEffect, useState } from "react";
import { MyLoader } from "../contexts/LoaderContext";

export const useFetch = (url, setLoading) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controler = new AbortController();

    if (url) {
      fetch(url, { signal: controler.signal })
        .then((res) => res.json())
        .then((data) => {
          setData([...data]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);

          setLoading(false);
        });
    }

    return () => {
      controler.abort();
    };
  }, [url, setLoading]);

  return { data };
};
