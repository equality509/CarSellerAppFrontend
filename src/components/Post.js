import { Link } from "react-router-dom";
import "../App.css"

const Post = (props) => {
  const post = props.post;

  // style
  const div = {
    padding: "40px",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div} className= "form-letters">
      <Link to={`/post/${post.id}`}>
        <h1>{post.make}</h1>
      </Link>
      <h2 className="background">{post.model}</h2>
      <h2 className="background">{post.year}</h2>
      <h2 className="background">{post.color}</h2>
      <h2 className="background">{post.price}</h2>
      <h2 className="background">{post.image}</h2>

    </div>
  );
};

export default Post;