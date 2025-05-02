import { useState, useEffect } from 'react';

export default function NewsList() {
  const [news, setNews] = useState({ articles: [] });

  useEffect(() => {
    const apiKey = 'f4ce278dcf6d4c3dbe301e7599c169ae';
    const url = `http://newsapi.org/v2/top-headlines?country=jp&pageSize=6&apiKey=${apiKey}`;
    let req = new Request(url);
    fetch(req)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setNews(data.articles ? data : { articles: [] });
      })
      .catch(error => {
        console.error("Fetching news failed:", error);
      });
  }, []);

  console.log('NewsListコンポーネントがレンダリングされました');

  return (
    <div>
      <h1>最新ニュース</h1>
      <ul>
        {news.articles && news.articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} width="200" />}
            <a href={article.url} target="_blank" rel="noopener noreferrer">続きを読む</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
