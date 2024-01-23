import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP.
import '../styles/style.css';

// Define un componente funcional llamado NewsList.
const NewsList = () => {
  const [news, setNews] = useState([]); //aqui se Define un estado llamado 'news' y su función de actualización 'setNews'. Inicialmente, 'news' es un array vacío.

  useEffect(() => {
    const fetchNews = async () => { // Define una función asíncrona para obtener las noticias.
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b4fe707cbf54989a7f3d163aed6a365'
        ); // Realiza una solicitud GET a la API de noticias.
        setNews(response.data.articles); // Actualiza el estado 'news' con los artículos obtenidos de la respuesta.
      } catch (error) {
        console.error('Error fetching news:', error); 
      }
    };

    fetchNews();// Llama a la función para obtener las noticias.
  }, []);

  return (
    
      <div className="container">
        
      {news.map((article) => (
        
        <div key={article.title} className="news-card">
            
          <img src={article.urlToImage} alt={article.title} className="news-image" />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default NewsList;
