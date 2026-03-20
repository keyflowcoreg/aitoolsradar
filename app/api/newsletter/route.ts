import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = "/Users/jarvis/.openclaw/workspace/state/newsletter-subscribers.json";

interface Subscriber {
  email: string;
  subscribedAt: string;
  source: string;
}

async function ensureFile() {
  const dir = path.dirname(SUBSCRIBERS_FILE);
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {
    // directory exists
  }
  try {
    await fs.access(SUBSCRIBERS_FILE);
  } catch {
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify([], null, 2));
  }
}

async function readSubscribers(): Promise<Subscriber[]> {
  await ensureFile();
  const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: Subscriber[]) {
  await ensureFile();
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const subscribers = await readSubscribers();

    if (subscribers.some((s) => s.email === normalizedEmail)) {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    subscribers.push({
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      source: "aitoolsradar",
    });

    await writeSubscribers(subscribers);

    return NextResponse.json(
      { message: "Welcome aboard! You'll get our next weekly roundup." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
