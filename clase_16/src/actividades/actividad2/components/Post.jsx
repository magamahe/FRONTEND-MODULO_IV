import { useState } from "react";
import style from "./Post.module.css";
import {
  ThumbsUp,
  MessageCircleMore,
  Share2,
  SendHorizontal,
} from "lucide-react";

const Post = () => {
  const [likes, setLikes] = useState(0);
  return (
    <article className={style.containerPost}>
      <img
        src="https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-ol7dbxletepq3nc9.jpg"
        alt="Imagen Paisaje"
        className={style.postImage}
      />
      <div className={style.containerButtons}>
        <button
          className={`${style.button} ${likes > 10 ? style.popular : ""}`}
          onClick={() => setLikes(likes + 1)}
        >
          <ThumbsUp className={style.icon} />
          {`(${likes}) `}
          Me gusta
        </button>
        <hr className={style.divider} />
        <button className={style.button}>
          <MessageCircleMore className={style.icon} />
          Comentar
        </button>
        <hr className={style.divider} />
        <button className={style.button}>
          <Share2 className={style.icon} />
          Compartir
        </button>
      </div>

      {likes > 10 && (
        <p className={style.popular}>¡Este post es popular!</p>
      )}
      <div className={style.containerComment}>
        <input
          className={style.inputComment}
          type="text"
          placeholder="Escribe tu comentario..."
        />
        <span className={style.iconComment}>
          <SendHorizontal />
        </span>
      </div>
    </article>
  );
};

export default Post;
