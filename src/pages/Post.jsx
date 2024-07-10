import { useState, useEffect } from 'react';
import '../assets/css/componentes/card.css';
import { useParams, useNavigate } from 'react-router-dom';
import { buscar } from '../api/api';

export const Post = ({ url }) => {

   const [post, setPost] = useState({}); 
   //useParams es una funcion que devuelve un objeto, y puedo desestructurar
    //console.log(useParams());
    const { id } = useParams();

    const navigate = useNavigate()
    //vamos usar useEffect para poder comunicarnos con el servidor
    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate('/not-fount')
        })
    }, [id])

  return (
    <main className='container flex flex--center'>
        <article className='card post'>
            <h2 className='post-card__title'>{post.title}</h2>
            <p className='text__card'>{post.body}</p>
        </article>
    </main>
  )
}


//no se encuentra post
//para solucionar esto vamos a usar useState para poder definir la informacion del post

