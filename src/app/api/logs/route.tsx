export default async function handler(req: any, res:any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { buttonName } = req.body;

  if (!buttonName) {
    return res.status(400).json({ message: "Missing button name" });
  }

  // Log button click to Vercel's function logs
  console.log(`🔘 Button Click Logged: ${buttonName}`);

  return res.status(200).json({ message: `Button click logged: ${buttonName}` });
}