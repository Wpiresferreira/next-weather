"use client";
import { useEffect, useState } from "react";

export default function RequestIPInfo(props: any) {
  let url = "https://ipgeolocation.abstractapi.com/v1/?api_key=";
  url += "c1f85b055e204d9b89283c0c81b4053c"; //process.env.ABSRACTAPI_KEY;
  url += "&ip_adress=";
  url += props.ip;

  // console.log("url");
  // console.log(url);

  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (isLoading) return <p> loading...</p>;
  if (!data) return <p> nothing 1</p>;
  console.log(data);

  if (!data.error) {
    return (
      <>
        <p> {data.city}</p>
        <p> {data.longitude}</p>
        <p> {data.latitude}</p>
      </>
    );
  }
}
