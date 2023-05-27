import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/tables/${req.query.slug}?draftKey=${req.query.draftKey}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
      },
    }
  )
    .then((res) => res.json())
    .catch(() => null);
  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }
  res.setPreviewData(
    {
      slug: req.query.slug,
      directory: req.query.directory,
      draftKey: req.query.draftKey,
    },
    { maxAge: 60 }
  );
  res.writeHead(307, {
    Location: `/preview/${req.query.slug}`,
  });
  res.end("Preview mode enabled");
}
