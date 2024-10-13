import React from 'react';
import NewsItem from './NewsItem';
import { NewsItem as NewsItemType } from '../types';

const newsData: NewsItemType[] = [
  {
    id: 1,
    title: "El gobierno anuncia nuevas medidas económicas",
    summary: "El presidente ha presentado un paquete de estímulos para impulsar la economía nacional.",
    content: "En una conferencia de prensa celebrada hoy, el presidente anunció un nuevo paquete de medidas económicas diseñadas para estimular el crecimiento y la creación de empleo. Entre las medidas se incluyen reducciones de impuestos para pequeñas empresas, inversiones en infraestructura y programas de capacitación laboral. Los expertos económicos tienen opiniones divididas sobre la efectividad de estas medidas, pero coinciden en que representan un paso significativo hacia la recuperación económica.",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Política"
  },
  {
    id: 2,
    title: "Descubren nueva especie en la Amazonía",
    summary: "Científicos han identificado una nueva especie de rana en la selva amazónica.",
    content: "Un equipo internacional de biólogos ha anunciado el descubrimiento de una nueva especie de rana en las profundidades de la selva amazónica. La rana, que ha sido nombrada 'Amazonica novum', se distingue por su coloración única y su llamado característico. Este hallazgo subraya la importancia de la conservación de la biodiversidad en la región amazónica y destaca cuánto queda aún por descubrir en uno de los ecosistemas más ricos del planeta.",
    imageUrl: "https://images.unsplash.com/photo-1566580916844-a4f0aaf2bd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Ciencia"
  },
  {
    id: 3,
    title: "El equipo nacional se prepara para el mundial",
    summary: "La selección intensifica sus entrenamientos de cara al próximo campeonato mundial.",
    content: "La selección nacional de fútbol ha iniciado su fase final de preparación para el próximo campeonato mundial. El entrenador ha convocado a 26 jugadores para un campamento intensivo que incluirá sesiones tácticas, preparación física y partidos amistosos contra equipos de alto nivel. 'Estamos enfocados en llegar en la mejor forma posible', declaró el capitán del equipo. Los aficionados esperan con ansias el debut de la selección en el torneo, programado para dentro de dos meses.",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Deportes"
  },
];

interface NewsListProps {
  searchTerm: string;
  onArticleClick: (article: NewsItemType) => void;
}

const NewsList: React.FC<NewsListProps> = ({ searchTerm, onArticleClick }) => {
  const filteredNews = newsData.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredNews.map((news) => (
        <NewsItem key={news.id} {...news} onClick={() => onArticleClick(news)} />
      ))}
    </div>
  );
};

export default NewsList;