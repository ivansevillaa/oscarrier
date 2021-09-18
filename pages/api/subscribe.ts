import type {NextApiRequest, NextApiResponse} from "next";

export default async function Subscribe(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {email} = req.body;

  if (!email) {
    return res.status(400).json({error: "Email is required"});
  }

  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;

    const response = await fetch(
      "https://api.buttondown.email/v1/subscribers",
      {
        body: JSON.stringify({email}),
        headers: {
          Authorization: `Token ${API_KEY}`,
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    );

    if (response.status >= 400) {
      return res.status(response.status).json({
        error: await response.text(),
        errCode: "ERR-40X"
      });
    }

    return res.status(201).json({error: "", errCode: ""});
  } catch (error) {
    return res.status(500).json({error, errCode: "ERR-50X"});
  }
}
