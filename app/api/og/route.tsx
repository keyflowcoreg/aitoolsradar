import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "AIToolsRadar";
  const description =
    searchParams.get("description") ||
    "Compare 40+ AI tools across code, writing, design, marketing, data, and automation.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "900px",
            padding: "40px 60px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
              fontSize: "20px",
              color: "#10b981",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            AIToolsRadar
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#fafafa",
              textAlign: "center" as const,
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              textAlign: "center" as const,
              lineHeight: 1.5,
              maxWidth: "700px",
            }}
          >
            {description}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginTop: "40px",
              fontSize: "16px",
              color: "#71717a",
            }}
          >
            <span>Free</span>
            <span style={{ color: "#3f3f46" }}>|</span>
            <span>40+ Tools</span>
            <span style={{ color: "#3f3f46" }}>|</span>
            <span>6 Categories</span>
            <span style={{ color: "#3f3f46" }}>|</span>
            <span>Honest Reviews</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
