import React from "react";
import { defineRouteConfig } from "@medusajs/admin-sdk";

// 샘플 데이터 (HTML 파일에서 추출)
const sampleProducts = [
  {
    category: "Health & Household",
    subcategory: "Sanitary Napkins",
    image: "https://m.media-amazon.com/images/I/41ABJi3ggYL.jpg",
    asin: "B071NLD52C",
    sku: "RAEL-O-04-V",
    title:
      "Rael Pads for Women, Organic Cotton Cover - Period Pads with Wings, Feminine Care, Sanitary Napkins, Heavy Absorbency, Unscented, Ultra Thin (Overnight, 40 Count)",
    price: "$22.99",
    rating: "4.6",
    reviews: "9,969",
    sellers: "2",
    listedSince: "2017-03-30",
    stock: "In Stock",
  },
  {
    category: "Health & Household",
    subcategory: "Sanitary Napkins",
    image: "https://m.media-amazon.com/images/I/412jKaO8y5L.jpg",
    asin: "B071HDJH7W",
    sku: "RAEL-RG-02-V",
    title:
      "Rael Organic Cotton Cover Pads - Regular Absorbency, Unscented, Ultra Thin Pads with Wings for Women (Regular, 28 Count)",
    price: "$12.23",
    rating: "4.7",
    reviews: "18,095",
    sellers: "1",
    listedSince: "2017-03-30",
    stock: "In Stock",
  },
  {
    category: "Health & Household",
    subcategory: "Sanitary Napkins",
    image: "https://m.media-amazon.com/images/I/41Pz2KkRnWL.jpg",
    asin: "B0771VNWJN",
    sku: "RAEL-LG-04-V",
    title:
      "Rael Pads for Women, Organic Cotton Cover - Period Pads with Wings, Feminine Care, Sanitary Napkins, Heavy Absorbency, Unscented (Large, 48 Count)",
    price: "$22.99",
    rating: "4.7",
    reviews: "18,095",
    sellers: "1",
    listedSince: "2017-03-30",
    stock: "In Stock",
  },
];

const CustomPage = () => {
  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}
        >
          Ethika Products
        </h1>
        <p style={{ color: "#666", marginBottom: "16px" }}>
          Total <strong>{sampleProducts.length}</strong> products found.
        </p>
      </div>

      <div
        style={{
          overflowX: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
            minWidth: "1200px",
          }}
        >
          <thead style={{ backgroundColor: "#f5f5f5" }}>
            <tr>
              <th style={headerStyle}>Category</th>
              <th style={headerStyle}>Subcategory</th>
              <th style={headerStyle}>Product</th>
              <th style={headerStyle}>ASIN</th>
              <th style={headerStyle}>SKU</th>
              <th style={{ ...headerStyle, width: "300px" }}>Title</th>
              <th style={headerStyle}>Price</th>
              <th style={headerStyle}>Rating</th>
              <th style={headerStyle}>Reviews</th>
              <th style={headerStyle}>Sellers</th>
              <th style={headerStyle}>Listed Since</th>
              <th style={headerStyle}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((product, index) => (
              <tr
                key={product.asin}
                style={{
                  backgroundColor: index % 2 === 1 ? "#f9f9f9" : "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f0f8ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    index % 2 === 1 ? "#f9f9f9" : "white";
                }}
              >
                <td style={cellStyle}>{product.category}</td>
                <td style={cellStyle}>{product.subcategory}</td>
                <td style={cellStyle}>
                  <img
                    src={product.image}
                    alt="Product"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td style={{ ...cellStyle, fontFamily: "monospace" }}>
                  {product.asin}
                </td>
                <td style={{ ...cellStyle, fontFamily: "monospace" }}>
                  {product.sku}
                </td>
                <td
                  style={{
                    ...cellStyle,
                    maxWidth: "300px",
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                >
                  {product.title}
                </td>
                <td
                  style={{
                    ...cellStyle,
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  {product.price}
                </td>
                <td
                  style={{
                    ...cellStyle,
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  {product.rating}
                </td>
                <td
                  style={{
                    ...cellStyle,
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  {product.reviews}
                </td>
                <td style={{ ...cellStyle, textAlign: "center" }}>
                  {product.sellers}
                </td>
                <td style={{ ...cellStyle, fontFamily: "monospace" }}>
                  {product.listedSince}
                </td>
                <td
                  style={{
                    ...cellStyle,
                    textAlign: "center",
                    color: product.stock === "In Stock" ? "#28a745" : "#dc3545",
                    fontWeight: "600",
                  }}
                >
                  {product.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 스타일 상수
const headerStyle = {
  padding: "12px 8px",
  textAlign: "left" as const,
  fontWeight: "600",
  borderBottom: "1px solid #ddd",
  borderRight: "1px solid #ddd",
  backgroundColor: "#f5f5f5",
  color: "#333",
  whiteSpace: "nowrap" as const,
  cursor: "pointer",
};

const cellStyle = {
  padding: "8px 12px",
  borderBottom: "1px solid #ddd",
  borderRight: "1px solid #ddd",
  verticalAlign: "middle" as const,
  whiteSpace: "nowrap" as const,
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const config = defineRouteConfig({
  label: "Keyword rank",
});

export default CustomPage;
