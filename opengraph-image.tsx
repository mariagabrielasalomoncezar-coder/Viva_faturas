import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Viva Connecta — Soluções em Conectividade para Empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#080C18",
          backgroundImage:
            "radial-gradient(circle at 75% 30%, rgba(61,139,255,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#17D7B0",
            }}
          />
          <div style={{ fontSize: 30, color: "#93A0C2", fontWeight: 500 }}>
            Parceira Vivo Empresas
          </div>
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#F4F7FC",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Conectando sua empresa ao que realmente importa.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            color: "#3D8BFF",
            fontWeight: 600,
          }}
        >
          Viva Connecta · Guarulhos – SP
        </div>
      </div>
    ),
    { ...size }
  );
}
