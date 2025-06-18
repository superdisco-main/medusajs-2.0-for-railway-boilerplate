# Medusa 2.0 Admin 위젯 생성 가이드

## 🚀 주요 단계

### 1단계: 폴더 및 파일 생성

```bash
backend/src/admin/widgets/[위젯이름].tsx
```

### 2단계: 필수 Import 추가

```tsx
import { defineWidgetConfig } from "@medusajs/admin-sdk";
```

### 3단계: 컴포넌트 작성

```tsx
const CustomWidget = () => {
  return <div>{/* 여기에 위젯 내용 작성 */}</div>;
};
```

### 4단계: Config 설정

```tsx
export const config = defineWidgetConfig({
  zone: "product.details.after", // 위젯이 표시될 위치
});
```

### 5단계: Default Export

```tsx
export default CustomWidget;
```

## 📂 파일 구조

```
backend/src/admin/widgets/
└── [위젯이름].tsx
```

## 📝 기본 템플릿

### 1. 간단한 위젯 템플릿

```tsx
import { defineWidgetConfig } from "@medusajs/admin-sdk";

const SimpleWidget = () => {
  return (
    <div style={{ padding: "16px", border: "1px solid #e5e7eb" }}>
      <h3>위젯 제목</h3>
      <p>위젯 내용</p>
    </div>
  );
};

export const config = defineWidgetConfig({
  zone: "product.details.after",
});

export default SimpleWidget;
```

### 2. 상품 데이터 활용 위젯 템플릿

```tsx
import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Container } from "@medusajs/ui";
import { DetailWidgetProps, AdminProduct } from "@medusajs/framework/types";

const ProductWidget = ({ data }: DetailWidgetProps<AdminProduct>) => {
  return (
    <Container>
      <h3>상품명: {data.title}</h3>
      <p>상품 ID: {data.id}</p>
    </Container>
  );
};

export const config = defineWidgetConfig({
  zone: "product.details.before",
});

export default ProductWidget;
```

## ✅ 필수 사항

1. **Import 구문 (필수)**

   ```tsx
   import { defineWidgetConfig } from "@medusajs/admin-sdk";
   ```

2. **Config Export (필수)**

   ```tsx
   export const config = defineWidgetConfig({
     zone: "위젯 표시 위치",
   });
   ```

3. **Component Export (필수)**
   ```tsx
   export default CustomWidget;
   ```

## 🎯 위젯 표시 위치 (zone)

주요 위젯 표시 위치:

- `product.details.before`: 상품 상세 페이지 상단
- `product.details.after`: 상품 상세 페이지 하단
- `order.details.before`: 주문 상세 페이지 상단
- `order.details.after`: 주문 상세 페이지 하단

## 💡 데이터 활용

1. **상품 데이터 타입**

   ```tsx
   DetailWidgetProps<AdminProduct>;
   ```

2. **주문 데이터 타입**
   ```tsx
   DetailWidgetProps<AdminOrder>;
   ```

## 🎨 UI 컴포넌트

Medusa UI 컴포넌트 사용 가능:

- `Container`
- `Heading`
- `Button`
- `Text`
  등

---

**작성일:** 2024-03-19  
**Medusa 버전:** 2.0
