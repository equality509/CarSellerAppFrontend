import url from "./urls";
import { redirect } from "react-router-dom";

export async function CreateAction({ request }) {
  // get the form data
  const formData = await request.formData();

  // construct new todo
  const newTodo = {
    make: formData.get("make"),
    model: formData.get("model"),
    year: formData.get("year"),
    color: formData.get("color"),
    price: formData.get("price"),
  };
console.log(newTodo)
  // request to create route in backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  // redirect back to the index page
  return redirect("/");
}

export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new todo
    const newTodo = {
      make: formData.get("make"),
      model: formData.get("model"),
      year: formData.get("year"),
      color: formData.get("color"),
      price: formData.get("price"),
    };
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
  
    // redirect back to the index page
    return redirect("/");
  }

  export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}