import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
import "../App.css"

const Index = (props) => {
  const todos = useLoaderData();

  return <>
   <h2 className='title'>Post Your Car</h2>
   <div className="flx">
  <div style={{textAlign: "center"}} className="frm">
     
      <Form action="/create" method="post" >
          <input type="text" name="make" placeholder="make" />
          <input type="text" name="model" placeholder="model"/>
          <input type="text" name="year" placeholder="year"/>
          <input type="text" name="color" placeholder="color"/>
          <input type="text" name="price" placeholder="price"/>
          <button>Create New Car</button>
      </Form>
  </div>
  <div className = "car"> 
  {todos.map((post) => <Post key={post.id} post={post} />)}
  </div>
  </div>

  </>;
};

export default Index;


// import { useLoaderData, Form } from "react-router-dom";
// import Post from "../components/Post";
// import "../App.css"

// const Index = (props) => {
//   const todos = useLoaderData();

//   // Check if `todos` is an array before calling `map()`
//   if (Array.isArray(todos)) {
//     return (
//       <>
//         <h2 className='title'>Post Your Car</h2>
//         <div className="flx">
//           <div style={{textAlign: "center"}} className="frm">
//             <Form action="/create" method="post" encType="multipart/form-data" className="frm">
//               <input type="text" name="make" placeholder="make" className="background"/>
//               <input type="text" name="model" placeholder="model"/>
//               <input type="text" name="year" placeholder="year"/>
//               <input type="text" name="color" placeholder="color"/>
//               <input type="text" name="price" placeholder="price"/>
//               <input type="file" name="image" placeholder="image"/>
//               <button>Create New Car</button>
//             </Form>
//           </div>
//           <div className = "car"> 
//             {todos.map((post) => <Post key={post.id} post={post} />)}
//           </div>
//         </div>
//       </>
//     );
//   } else {
//     return <div>Loading...</div>;
//   }
// };

// export default Index;