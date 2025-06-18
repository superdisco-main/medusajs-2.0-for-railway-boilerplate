import type { WidgetConfig } from "@medusajs/admin-sdk";

// 위젯
const ProductWidget = () => {
  return (
    <div>
      <h2>Product Widget</h2>
    </div>
  );
};

// 위젯 설정
export const config: WidgetConfig = {
  zone: "product.details.after",
};

export default ProductWidget;
