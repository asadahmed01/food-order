import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
import { toast } from "react-toastify";
function CreateProduct() {
  const [postData, setPostData] = useState({
    title: "",
    price: "",
    description: "",
    selectedFile: "",
  });
  const [error, setError] = useState("");

  const productEndpoint = process.env.REACT_APP_PRODUCT;
  const createPost = (data) => {
    axios
      .post(productEndpoint, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (
      postData.title === "" ||
      postData.price === "" ||
      postData.description === "" ||
      postData.selectedFile === ""
    ) {
      setError("some field are blank, please fill them out.");
      return;
    }
    setError("");
    createPost(postData);
    toast.success("product added to the database", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
    });

    setPostData({ title: "", price: "", description: "", selectedFile: "" });
  };
  return (
    <div className="h-screen text-center">
      <form
        autoComplete="off"
        onSubmit={hanldeSubmit}
        className="w-3/4 lg:w-1/2 mx-auto"
      >
        <h1 className="text-3xl font-bold mb-10 mt-10">Add Products</h1>
        <div className="form-group mb-4">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter product title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>

        <div className="form-group mb-4">
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="Enter product price"
            value={postData.price}
            onChange={(e) =>
              setPostData({ ...postData, price: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Enter product description"
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </div>
        <div className="form-group text-left">
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="text-left">
          <p className="text-red-500 mt-5">{error}</p>
        </div>
        <div className="mt-5 text-left mb-4">
          <button
            type="submit"
            className="btn btn-primary md:w-40 w-full text-2xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
