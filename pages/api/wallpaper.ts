// Source: https://github.com/leerob/leerob.io/blob/main/pages/api/views/%5Bslug%5D.ts
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return await getWallpapers(req, res);
  } else if (req.method === "POST") {
    return await downloadWallpaper(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function getWallpapers(req: NextApiRequest, res: NextApiResponse) {
  const views = await prisma.wallpaper.findMany();

  try {
    const data = await prisma.wallpaper.findMany();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Request error", error);
  }
}

async function downloadWallpaper(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    const data = await prisma.wallpaper.update({
      where: {
        id: body.id,
      },
      data: {
        downloads: {
          increment: 1,
        },
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error getting Users", success: false });
  }
}
