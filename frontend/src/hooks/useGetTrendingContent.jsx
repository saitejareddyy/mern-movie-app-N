import { useEffect, useState } from "react";
import { useContentStore } from "../pages/store/content";
import axios from "axios";

const useGetTrendingContent = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(`/api/v1/${contentType}/trending`);
      setTrendingContent(res.data.content);
    };
    getTrendingContent();
  }, [contentType]);
  console.log(trendingContent);
  return { trendingContent };
};

export default useGetTrendingContent;
