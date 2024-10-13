import React from 'react';

interface NewsItemProps {
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  onClick: () => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, summary, imageUrl, category, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={onClick}>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm font-semibold text-blue-600">{category}</span>
        <h2 className="text-xl font-bold mt-2 mb-2">{title}</h2>
        <p className="text-gray-600">{summary}</p>
        <span className="mt-4 inline-block text-blue-600 hover:underline">Leer más</span>
      </div>
    </div>
  );
};

export default NewsItem;