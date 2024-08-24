import RequestIPInfo from "./functions/RequestIPInfo"
import { headers } from "next/headers";

export default function Home() {
  
  const ip = headers().get("x-forwarded-for");

  // const ip_info = RequestIPInfo(ip);
  // console.log(ip_info);
  return(

    <main>
      IP Address:
      {` ${ip}` || " Not found"}

      <RequestIPInfo ip={ip} />
    {/* {resultAPI_IP_Obj.ip_address} <br></br>
    {resultAPI_IP_Obj.longitude} <br></br>
    {resultAPI_IP_Obj.latitude} <br></br>
    <img src='https://static.abstractapi.com/country-flags/CA_flag.png' width={100} height={100} alt='flag'></img>
    {resultAPI_IP_Obj.city} <br></br> */}

  </main>
  );
}
