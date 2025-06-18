import { defineRouteConfig } from "@medusajs/admin-sdk";
import { useState, useEffect } from "react";
import { Container, Heading, Text, Button } from "@medusajs/ui";
import React from "react";

// 키워드 랭킹 데이터 타입 정의
interface KeywordRankData {
  keyword: string;
  rank: number;
  searchVolume: number;
  competition: "Low" | "Medium" | "High";
  lastUpdated: string;
}

// 예시 데이터
const mockKeywordData: KeywordRankData[] = [
  {
    keyword: "ecommerce platform",
    rank: 15,
    searchVolume: 12000,
    competition: "High",
    lastUpdated: "2024-01-20",
  },
  {
    keyword: "online store builder",
    rank: 8,
    searchVolume: 8500,
    competition: "Medium",
    lastUpdated: "2024-01-20",
  },
  {
    keyword: "headless commerce",
    rank: 3,
    searchVolume: 5200,
    competition: "Low",
    lastUpdated: "2024-01-20",
  },
  {
    keyword: "medusa js",
    rank: 2,
    searchVolume: 1800,
    competition: "Low",
    lastUpdated: "2024-01-20",
  },
];

// 페이지 컴포넌트
const KeywordRankPage = () => {
  const [keywordData, setKeywordData] = useState<KeywordRankData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제 환경에서는 API 호출로 데이터를 가져옵니다
    const fetchKeywordData = async () => {
      setIsLoading(true);
      try {
        // 예시로 setTimeout을 사용해 API 호출을 시뮬레이션
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setKeywordData(mockKeywordData);
      } catch (error) {
        console.error("Failed to fetch keyword data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchKeywordData();
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    // 데이터 새로고침 로직
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setKeywordData(mockKeywordData);
    setIsLoading(false);
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case "Low":
        return "text-green-600";
      case "Medium":
        return "text-yellow-600";
      case "High":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getRankColor = (rank: number) => {
    if (rank <= 3) return "text-green-600 font-bold";
    if (rank <= 10) return "text-blue-600";
    return "text-gray-600";
  };

  return (
    <Container className="divide-y p-0">
      <React.Fragment>
        {/* 헤더 */}
        <React.Fragment>
          <Heading level="h1" className="text-2xl font-bold px-6 py-4">
            키워드 랭킹 분석
          </Heading>
          <Text className="text-gray-600 px-6 pb-4">
            웹사이트의 키워드 검색 순위를 확인하고 SEO 성과를 모니터링하세요.
          </Text>
          <Button
            onClick={handleRefresh}
            disabled={isLoading}
            variant="secondary"
            className="mx-6 mb-4"
          >
            {isLoading ? "새로고침 중..." : "데이터 새로고침"}
          </Button>
        </React.Fragment>

        {/* 통계 요약 */}
        <React.Fragment>
          <Text className="text-lg font-semibold px-6 py-4">통계 요약</Text>
          <Text className="px-6 pb-2">총 키워드: {keywordData.length}</Text>
          <Text className="px-6 pb-2">
            평균 순위:{" "}
            {keywordData.length > 0
              ? Math.round(
                  keywordData.reduce((sum, item) => sum + item.rank, 0) /
                    keywordData.length
                )
              : 0}
          </Text>
          <Text className="px-6 pb-2">
            상위 10위 키워드:{" "}
            {keywordData.filter((item) => item.rank <= 10).length}
          </Text>
          <Text className="px-6 pb-4">
            총 검색량:{" "}
            {keywordData
              .reduce((sum, item) => sum + item.searchVolume, 0)
              .toLocaleString()}
          </Text>
        </React.Fragment>

        {/* 키워드 랭킹 테이블 */}
        <React.Fragment>
          <Heading level="h2" className="text-lg font-semibold px-6 py-4">
            키워드 랭킹 상세
          </Heading>

          {isLoading ? (
            <Text className="px-6 py-8">데이터를 불러오는 중...</Text>
          ) : (
            <React.Fragment>
              {keywordData.map((item, index) => (
                <React.Fragment key={index}>
                  <Text className="px-6 py-2 font-medium">{item.keyword}</Text>
                  <Text className={`px-6 pb-1 ${getRankColor(item.rank)}`}>
                    순위: #{item.rank}
                  </Text>
                  <Text className="px-6 pb-1">
                    검색량: {item.searchVolume.toLocaleString()}
                  </Text>
                  <Text
                    className={`px-6 pb-1 ${getCompetitionColor(
                      item.competition
                    )}`}
                  >
                    경쟁도: {item.competition}
                  </Text>
                  <Text className="px-6 pb-4 text-gray-600">
                    마지막 업데이트: {item.lastUpdated}
                  </Text>
                </React.Fragment>
              ))}
            </React.Fragment>
          )}
        </React.Fragment>

        {/* 도움말 섹션 */}
        <React.Fragment>
          <Heading
            level="h3"
            className="text-md font-semibold px-6 py-4 text-blue-900"
          >
            💡 키워드 랭킹 개선 팁
          </Heading>
          <Text className="px-6 pb-2 text-blue-800">
            • 상위 10위 안에 들지 못한 키워드에 대해 콘텐츠를 최적화하세요.
          </Text>
          <Text className="px-6 pb-2 text-blue-800">
            • 경쟁도가 낮은 키워드를 우선적으로 타겟팅하세요.
          </Text>
          <Text className="px-6 pb-2 text-blue-800">
            • 검색량이 높은 키워드의 순위 향상에 집중하세요.
          </Text>
          <Text className="px-6 pb-4 text-blue-800">
            • 정기적으로 데이터를 모니터링하여 SEO 전략을 조정하세요.
          </Text>
        </React.Fragment>
      </React.Fragment>
    </Container>
  );
};

// 라우트 설정
export const config = defineRouteConfig({
  label: "키워드 랭킹",
});

export default KeywordRankPage;
