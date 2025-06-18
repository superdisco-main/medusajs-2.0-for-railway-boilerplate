import { defineWidgetConfig } from "@medusajs/admin-sdk";

// 간단한 테스트 위젯 (의존성 없음)
const SimpleWidget = () => {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        backgroundColor: "#f9fafb",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px 0",
          fontSize: "18px",
          fontWeight: "600",
          color: "#1f2937",
        }}
      >
        🧪 간단한 테스트 위젯
      </h3>
      <p
        style={{
          margin: "0 0 12px 0",
          fontSize: "14px",
          color: "#6b7280",
        }}
      >
        이 위젯은 상품 상세 페이지에 표시됩니다.
      </p>
      <div
        style={{
          padding: "8px 12px",
          backgroundColor: "#dbeafe",
          borderRadius: "6px",
          fontSize: "12px",
          color: "#1e40af",
        }}
      >
        ✅ 위젯이 정상적으로 로드되었습니다!
      </div>
    </div>
  );
};

// 위젯 설정
export const config = defineWidgetConfig({
  zone: "product.details.after",
});

export default SimpleWidget;
