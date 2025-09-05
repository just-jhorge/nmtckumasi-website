import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const admittedList = await prisma.admitted.findMany();

    return Response.json(admittedList, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 200 });
  }
}
