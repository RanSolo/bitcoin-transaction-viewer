import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await prisma.user.findUnique({ where: { email: body.email } });

  if (user) return NextResponse.json({ error: "User already exists" }, { status: 404 });

  const newUser = await prisma.user.create({ data: { name: body.name, email: body.email, favoriteTransactions: [] } });
  return NextResponse.json(newUser, { status: 201 });
}
