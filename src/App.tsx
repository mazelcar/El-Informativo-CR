import React, { useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ArticleModal from './components/ArticleModal';
import { NewsItem } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleArticleClick = (article: NewsItem) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header onSearch={handleSearch} />
      <div className="flex-grow container mx-auto px-4 py-8 flex">
        <main className="w-full lg:w-3/4 pr-8">
          <NewsList searchTerm={searchTerm} onArticleClick={handleArticleClick} />
        </main>
        <Sidebar className="hidden lg:block w-1/4" />
      </div>
      <Footer />
      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;