export default async function IpInfo(props: { ip: string | null }) {
  let resObj = await fetch(
    "https://ipgeolocation.abstractapi.com/v1/?api_key=c1f85b055e204d9b89283c0c81b4053c&ip_address=" +
      props.ip
  ).then((res) => res.json());

  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=" +
    resObj.latitude +
    "%2C" +
    resObj.longitude;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6fa6d44963mshcf6eb887528eb62p1186f7jsn2b7638536b64",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  let weather = await fetch(url, options).then((res) => res.json());

  let isDay = weather.current.is_day
  let bg_colors;
  if (isDay == 0) {
    bg_colors = "from-blue-300 to-sky-100 text-black";
  } else {
    bg_colors = "from-blue-800 to-black text-white";
  }

  return (
    <>
    <div
      className={` ${bg_colors} flex flex-col self-center py-6 max-w-[300px] items-center justify-center bg-gradient-to-br rounded-3xl mx-4 `}
      >
      <div className="flex items-center">
        <h1>{weather.location.name}</h1>
        <img
          className="px-3"
          src={resObj.flag.png ?resObj.flag.png : "https://placehold.co/600x400?text=Hello+World"}
          width={70}
          />
      </div>
      <div className="flex items-center">
        <img
          src={
              weather.current.condition.icon
              ? weather.current.condition.icon
              : "https://placehold.co/600x400?text=Hello+World"
            }
            width={100}
            />
        <h1 className="antialiased font-bold text-3xl ">
          {weather.current.temp_c}ºC
        </h1>
      </div>
      <h1>{weather.current.condition.text}</h1>
    </div>
            </>
  );
}
