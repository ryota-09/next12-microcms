import type { NextApiRequest, NextApiResponse } from "next";

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (!req.query.slug) {
//     return res.status(404).end();
//   }
//   const content = await fetch(
//     `https://xxxxxx.microcms.io/api/v1/blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
//     { headers: { 'X-MICROCMS-API-KEY': process.env.apiKey || '' } }
//   )
//   .then(res => res.json()).catch(() => null);

//   if (!content) {
//     return res.status(401).json({ message: 'Invalid slug' });
//   }

//   res.setPreviewData({
//     slug: content.id,
//     draftKey: req.query.draftKey,
//   });
//   res.writeHead(307, { Location: `/${content.id}` });
//   res.end('Preview mode enabled');
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/tables/${req.query.slug.split("/")[1]}?draftKey=${req.query.draftKey}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "" } }
  )
    .then((res) => res.json())
    .catch(() => null);
  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }
  res.setPreviewData({
    slug: req.query.slug,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/preview/${req.query.slug.split("/")[0]}/${content.id}` });
  res.end("Preview mode enabled");
}
