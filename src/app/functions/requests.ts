export async function getIPInfo(ip: string | null) {
  let url = "https://ipgeolocation.abstractapi.com/v1/?api_key=c1f85b055e204d9b89283c0c81b4053c&ip_address=;" //process.env.ABSRACTAPI_KEY;
  url += ip;
  console.log('ip');
  console.log(ip);
  console.log('url');
  console.log(url);

 let result : any;
  try {
    const data = await fetch(url)
      .then((response) => response.json())
  } catch (error) {
    return error;
  }
}
