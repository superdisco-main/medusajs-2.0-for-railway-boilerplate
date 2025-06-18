import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Container, Heading } from "@medusajs/ui";
import { DetailWidgetProps, AdminProduct } from "@medusajs/framework/types";

// The widget
const ProductWidget = ({ data }: DetailWidgetProps<AdminProduct>) => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">테스트 위젯 - {data.title}</Heading>
        <div className="text-sm text-gray-600">상품 ID: {data.id}</div>
      </div>
      <div className="px-6 py-4">
        <p className="text-sm">
          이것은 상품 상세 페이지에 추가된 테스트 위젯입니다.
        </p>
        <div className="mt-2 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-800">
            💡 상품명: {data.title}
            <br />
            📦 상태: {data.status}
            <br />
            🏷️ 핸들: {data.handle}
          </p>
        </div>
      </div>
    </Container>
  );
};

// The widget's configurations
export const config = defineWidgetConfig({
  zone: "product.details.before",
});

export default ProductWidget;
