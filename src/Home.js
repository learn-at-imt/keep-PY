import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { input, setInput, essay, setEssay, AddEssay } = useGlobalContext();

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInput((input) => ({ ...input, [name]: value }));
//   };

//   const handlechange = (a) => {
//     const Name = a.target.name;
//     const Value = a.target.value;
//     setEssay((essay) => ({ ...essay, [Name]: Value }));
//   };


  //   useEffect(() => {
  //     fetch("http://localhost:8000/posts")
  //     .then((response) => {
  //         if(response.ok){
  //             return response.json()
  //         }
  //         else{
  //             throw Error("unable to load")
  //         }
  //     })
  //     .then((data) => {
  //         setPosts(data)

  //     })
  //     .catch(err => {
  //         <p>{err}</p>
  //     })
  // },[posts])

  // console.log(data);

  return (
    <>
      <div className="count"></div>
      <form onSubmit={AddEssay}>
        
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setInput(e.target.value)}
          name="title"
          value={input}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="essay"
          onChange={(a) => setEssay(a.target.value)}
          name="essay"
          value={essay}
        ></textarea>

        <Link to="./posts" className="form-button" onClick={ AddEssay }>
          Add
        </Link>
      </form>
    </>
  );
};

export default Home;

