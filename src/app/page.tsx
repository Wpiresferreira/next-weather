import { headers } from "next/headers";
import { getIPInfo } from "./functions/requests";
import IpInfo from "./functions/IpInfo";

export default async function Home() {
  const ip = await headers().get("x-forwarded-for");

  return (
    <main className="text-2xl">
      <IpInfo ip={ip} />
    </main>
  );
}
