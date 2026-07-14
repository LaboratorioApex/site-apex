import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Apex Lab | Tecnologia que transforma negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070909",
          color: "#f2f5f3",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              background: "#161a18",
              color: "white",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ fontSize: "32px", fontWeight: 700 }}>Apex Lab</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
          <div style={{ color: "#12976f", fontSize: "24px", fontWeight: 700 }}>
            Tecnologia que transforma negócios.
          </div>
          <div style={{ marginTop: "22px", fontSize: "62px", lineHeight: 1.08, fontWeight: 700 }}>
            Sites e e-commerces para competir, crescer e vender melhor.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#9da8a2", fontSize: "22px" }}>
          <span>Criação de sites · E-commerce · SEO</span>
          <span>laboratorioapex.com</span>
        </div>
      </div>
    ),
    size,
  );
}
