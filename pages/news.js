import { useState, useEffect, useMemo } from 'react';
import { Pagination } from '@nextui-org/react';
import Navibar from '../components/navbar/index';

const News = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  const currentArticles = useMemo(() => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    return articles.slice(indexOfFirstArticle, indexOfLastArticle).filter(article => article.url && article.title && article.description && article.urlToImage);
  }, [currentPage, articles]);

  const handlePageChange = page => setCurrentPage(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const Article = ({ article }) => (
    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="bg-white p-6">
        <h2 className="font-semibold text-lg text-black mb-2">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          Read more
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navibar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-black text-center text-neutral-800 mb-12">Latest Popular News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentArticles.map(article => (
            <Article key={article.url} article={article} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 px-4 sm:px-6">
          <Pagination
            total={Math.ceil(articles.length / articlesPerPage)}
            initialPage={1}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const desiredArticlesPerPage = 48;
  const initialFetchQuantity = desiredArticlesPerPage * 2;

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=climate%20change&sortBy=popularity&pageSize=${initialFetchQuantity}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
    const data = await response.json();
    if (!data.articles) throw new Error('Failed to fetch articles');
    const validArticles = data.articles.filter(article => article.url && article.title && article.description && article.urlToImage);
    const articlesToShow = validArticles.slice(0, desiredArticlesPerPage);
    return { props: { articles: articlesToShow } };
  } catch (error) {
    console.error('Error fetching news:', error);
    return { props: { articles: [] } };
  }
}

export default News;
