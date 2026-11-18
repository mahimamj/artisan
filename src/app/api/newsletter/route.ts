import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log the subscription
    console.log(`[Newsletter Subscription] New subscriber: ${email.trim().toLowerCase()} at ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to Artisan Ventures updates!",
    });
  } catch (error) {
    console.error("[Newsletter Error]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process subscription. Please try again." },
      { status: 500 }
    );
  }
}
