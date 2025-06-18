import React from "react";
import { defineRouteConfig } from "@medusajs/admin-sdk";

const CustomPage = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>
        커스텀 페이지
      </h1>
      <p style={{ color: "#666", marginBottom: "16px" }}>
        여기에 원하는 기능을 추가할 수 있습니다.
      </p>
      <div
        style={{
          border: "1px solid #e1e5e9",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#f9fafb",
        }}
      >
        <p>🎉 성공적으로 커스텀 탭이 생성되었습니다!</p>
      </div>
    </div>
  );
};

export const config = defineRouteConfig({
  label: "커스텀",
});

export default CustomPage;
