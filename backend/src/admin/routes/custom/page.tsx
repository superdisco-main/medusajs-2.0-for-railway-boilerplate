const CustomPage = () => {
  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
          커스텀 페이지
        </h1>
        <p>여기는 새로 만든 커스텀 탭입니다!</p>

        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
          >
            기능 예시
          </h2>
          <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
            <li>여기에 원하는 기능을 추가할 수 있습니다</li>
            <li>API 호출, 데이터 표시, 폼 등</li>
            <li>완전히 커스터마이징 가능합니다</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;
