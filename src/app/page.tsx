import { headers } from "next/headers";
import { getIPInfo } from "./functions/requests";
import IpInfo from "./functions/IpInfo";

export default async function Home() {
  const ip = await headers().get("x-forwarded-for");
  const latitude = await headers().get("x-vercel-ip-latitude");
  const longitude = await headers().get("x-vercel-ip-longitude");
  const country =  await headers().get("x-vercel-ip-country");

  return (
    <main className="text-2xl flex items-center justify-center">
      <IpInfo ip={ip} latitude={latitude} longitude={longitude} country={country} />
    </main>
  );
}
