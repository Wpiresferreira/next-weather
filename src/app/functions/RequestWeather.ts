export default async function RequestWeather(lat:number, long:number) {
  const url =
    "https://ipgeolocation.abstractapi.com/v1/?api_key=" +
    process.env.IP_API_KEY;
    console.log('url');
    console.log(url);

  let result : any;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    let responseText = await response.text();
    result = JSON.parse(responseText);
    console.log(result);
    console.log("result");
    return await responseText;
  } catch (error) {
    console.error(`Error: `, error);
    throw error; // Ensure the calling function knows of our trials and tribulations
  }
}
