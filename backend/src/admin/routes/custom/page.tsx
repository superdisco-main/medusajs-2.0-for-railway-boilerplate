import { Container, Heading } from "@medusajs/ui";

const CustomPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-2">
        <Heading level="h1">커스텀 페이지</Heading>
        <p>여기는 새로 만든 커스텀 탭입니다!</p>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">기능 예시</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>여기에 원하는 기능을 추가할 수 있습니다</li>
            <li>API 호출, 데이터 표시, 폼 등</li>
            <li>완전히 커스터마이징 가능합니다</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default CustomPage;
