import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });

    return Response.json(news);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
