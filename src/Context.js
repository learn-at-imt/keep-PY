import React, { useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);
  const [input, setInput] = useState('');
  const [essay, setEssay] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let res = await fetch("http://localhost:8000/postsList");
//         let data = await res.json();
//         setPostsList(data);
//         console.log(data);
//         fetchData();
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   }, [postsList]);


// const navigate = useNavigate()

  useEffect(() => {
      fetch("http://localhost:8000/postsList")
      .then((response) => {
          if(response.ok){
              return response.json()
          }
          else{
              throw Error("unable to load")
          }
      })
      .then((data) => {
          setPostsList(data)

      })
      .catch(err => {
          <p>{err}</p>
      })
  },[postsList]);

 
  
 const AddEssay = () => {
    //  e.prevetDefault();
    const post = {input, essay};
    const navigate = useNavigate();
 fetch("http://localhost:8000/postsList",{
     method: 'POST',
     headers: {"content-type": "application/json"},
     body: JSON.stringify(post)
 }). then(() => {
     console.log('saved')
     navigate.push('/')
 })


 }


  return (
    <AppContext.Provider
      value={{ input, essay, postsList, setEssay, setInput, setPostsList, AddEssay }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
