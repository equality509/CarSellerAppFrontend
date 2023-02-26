import { Link, useLoaderData, Form } from "react-router-dom";
import "../App.css"

const Show = (props) => {
  const post = useLoaderData();

  //styles
  const div = {
    textAlign: "center",
    border: "3px solid",
    width: "40",
    margin: "30px auto",
  };

 

  return (
    <div style={div} >
      <h1 className= "show-letters">{post.make}</h1>
      <h2 className= "show-letters">{post.model}</h2>
      
      <div>
        <h2 className= "show-letters">Update this Car</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input className= "form-letters"
            type="text"
            name="make"
            placeholder="make"
            defaultValue={post.make}
          />
          <input className= "form-letters"
            type="text"
            name="model"
            placeholder="model"
            defaultValue={post.model}
          />
          <input className= "form-letters"
            type="text"
            name="year"
            placeholder="year"
            defaultValue={post.year}
          />
          <input className= "form-letters"
            type="text"
            name="color"
            placeholder="color"
            defaultValue={post.color}
          /><input className= "form-letters"
          type="text"
          name="price"
          placeholder="price"
          defaultValue={post.price}
        />
          <button>Update Car</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button>Delete Car</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;


