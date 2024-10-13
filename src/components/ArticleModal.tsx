import React from 'react';
import { X } from 'lucide-react';
import { NewsItem } from '../types';

interface ArticleModalProps {
  article: NewsItem;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{article.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-sm font-semibold text-blue-600 mb-2">{article.category}</p>
          <p className="text-gray-700 mb-4">{article.content}</p>
          <div className="text-sm text-gray-500">
            <p>Fecha de publicación: {new Date().toLocaleDateString()}</p>
            <p>Autor: Redacción Noticias Ahora</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;