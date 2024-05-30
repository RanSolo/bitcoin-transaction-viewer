import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const user = await prisma.user.findUnique({ where: { email: body.email } });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: { name: body.name, email: body.email, favoriteTransactions: body.favoriteTransactions }
  });

  return NextResponse.json(updatedUser);
}
