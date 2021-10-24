// ! CUSTOM HOOK TO FETCH DATA
// if the data isn't available yet but it's loading
// if we get the data
// if there's an error

import { useState, useEffect } from "react";

// uri is somesort of API to fetch
export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { loading, data, error };
}
