//necesitamos importar dos hooks para conectar
import { useState, useEffect } from "react";
import "../assets/css/componentes/card.css";
import { buscar } from "../api/api";
import { Link } from "react-router-dom";


export const ListPosts = ({ url }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        buscar(url, setPosts);
       console.log(posts);
    }, [url]);

  return (
    <section className="posts container">
        {/* //recorremos posts */}
        {
            posts.map( post => {
                const { id, title, metadescription, categoria } = post;
                return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                    <article>
                        <h3 className="post-card__title">
                            {title}
                        </h3>
                    </article>
                    <p className="post-card__meta">{metadescription}</p>
                </Link>
                
            })
        }
    </section>    
  )
}
