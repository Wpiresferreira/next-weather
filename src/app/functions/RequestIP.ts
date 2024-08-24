import { NextResponse } from "next/server";

export default async function RequestIP(req: any) {
  const data = {
    ok: true,
    ip: req.headers.get("x-real-ip") ?? "127.0.0.1",
    message: "Hello from the API",
  };
  return new NextResponse(JSON.stringify(data, null, 2));

  //   const url =
  //     "https://ipgeolocation.abstractapi.com/v1/?api_key=" +
  //     process.env.IP_API_KEY;
  //     console.log('url');
  //     console.log(url);

  //   let result : any;

  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.statusText}`);
  //     }

  //     let responseText = await response.text();
  //     result = JSON.parse(responseText);
  //     console.log(result);
  //     console.log("result");
  //     return await responseText;
  //   } catch (error) {
  //     console.error(`Error: `, error);
  //     throw error; // Ensure the calling function knows of our trials and tribulations
  //   }
}
