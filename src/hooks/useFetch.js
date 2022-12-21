import { useContext, useEffect, useState } from "react";
import { MyLoader } from "../contexts/LoaderContext";

export const useFetch = (url) => {
  const { setLoading, loading } = useContext(MyLoader);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(loading);
    const controler = new AbortController();

    if (url) {
      console.log(url);
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
  }, [url, setLoading, loading]);

  return { data };
};
