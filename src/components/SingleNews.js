import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP.
import '../styles/style.css';

const SingleNews = () => {// Define un componente funcional llamado NewsList.
  const [singleNews, setSingleNews] = useState({});

  useEffect(() => {
    const fetchSingleNews = async () => {// Define una función asíncrona para obtener las noticias.
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b4fe707cbf54989a7f3d163aed6a365&pageSize=1'
        );// Realiza una solicitud GET a la API de noticias.
        setSingleNews(response.data.articles[0]);// Actualiza el estado 'news' con los artículos obtenidos de la respuesta.
      } catch (error) {
        console.error('Error fetching single news:', error);
      }
    };

    fetchSingleNews(); // Llama a la función para obtener las noticias.
  }, []);

  return (
    <div>
      <h2>Noticia Individual</h2>
      <div className="single-news">
        <img src={singleNews.urlToImage} alt={singleNews.title} className="news-image" />
        <h3>{singleNews.title}</h3>
        <p>{singleNews.description}</p>
      </div>
    </div>
  );
};

export default SingleNews;
