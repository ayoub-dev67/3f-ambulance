import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Pour l'instant, on log et on retourne succès
  // Resend sera configuré plus tard avec le domaine
  console.log("Nouveau contact reçu:", data);

  return NextResponse.json({ success: true, message: "Message reçu" });
}
