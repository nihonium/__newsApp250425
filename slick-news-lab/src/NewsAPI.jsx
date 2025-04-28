import { useState, useEffect } from 'react';

export default function NewsList() {
  const [news, setNews] = useState({ articles: [] });

  useEffect(() => {
    const url = 'http://newsapi.org/v2/top-headlines?' +
      'country=jp&' +
      'pageSize=6&' +
      'apiKey=f4ce278dcf6d4c3dbe301e7599c169ae';
    let req = new Request(url);
    fetch(req)
      .then(async (response) => {
        setNews(await response.json());
      });
  }, []);

  return (
    <div>
      <h1>最新ニュース</h1>
      <ul>
        {news.articles.map((article, index) => (
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
