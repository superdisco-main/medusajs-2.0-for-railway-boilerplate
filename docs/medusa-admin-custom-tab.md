# Medusa 2.0 Admin 신규 탭 생성 가이드

## 🚀 주요 단계

### 1단계: 폴더 및 파일 생성

```bash
backend/src/admin/routes/[원하는탭이름]/page.tsx
```

### 2단계: 필수 Import 추가

```tsx
import React from "react";
import { defineRouteConfig } from "@medusajs/admin-sdk";
```

### 3단계: 컴포넌트 작성

```tsx
const CustomPage = () => {
  return <div style={{ padding: "24px" }}>{/* 여기에 페이지 내용 작성 */}</div>;
};
```

### 4단계: Config 설정

```tsx
export const config = defineRouteConfig({
  label: "사이드바에 표시될 이름",
});
```

### 5단계: Default Export

```tsx
export default CustomPage;
```

## 📂 파일 구조

```
backend/src/admin/routes/
└── [탭이름]/
    └── page.tsx
```

## 📝 기본 템플릿

```tsx
import React from "react";
import { defineRouteConfig } from "@medusajs/admin-sdk";

const CustomPage = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>페이지 제목</h1>
      <p>페이지 내용</p>
    </div>
  );
};

export const config = defineRouteConfig({
  label: "사이드바에 표시될 이름",
});

export default CustomPage;
```

## ✅ 필수 사항

1. **Import 구문 (필수)**

   ```tsx
   import React from "react";
   import { defineRouteConfig } from "@medusajs/admin-sdk";
   ```

2. **Config Export (필수)**

   ```tsx
   export const config = defineRouteConfig({
     label: "탭 이름",
   });
   ```

3. **Component Export (필수)**
   ```tsx
   export default CustomPage;
   ```

## 🎯 핵심 규칙

- **폴더명**: URL 경로가 됨 (`custom` → `/app/custom`)
- **파일명**: 반드시 `page.tsx`
- **컴포넌트**: Arrow Function으로 작성
- **Config**: `defineRouteConfig` 사용 (일반 객체 ❌)

## 📍 결과

배포 후 Admin 대시보드 사이드바에 새 탭이 자동으로 추가됩니다.

---

**작성일:** 2025-06-18  
**Medusa 버전:** 2.8.4
