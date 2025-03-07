import { prisma } from "@/lib/prisma";

export async function GET() {
  const today = new Date();

  try {
    const events = await prisma.event.findMany({
      where: { OR: [{ date: { gte: today } }, { endDate: { gte: today } }] },
      orderBy: { date: "asc" },
    });

    return Response.json(events);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
