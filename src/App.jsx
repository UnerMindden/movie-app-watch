import { useEffect, useState } from "react";
import "./App.css"
import MoviesList from "./MoviesList";
import MoviesOMDB from "./MoviesOMDB";

function App(props) {
  // const [title, setTitle] = useState("")
  // useEffect(() => {
  //   const script = document.createElement("script")
  //   script.src = "https://yohoho.cc/yo.js"
  //   document.body.appendChild(script)
  //   return () => { document.body.removeChild(script) }
  // }, [])

  return (
    <>
    {/* <MoviesOMDB /> */}
    <MoviesList />
      {/* <div id="yohoho" data-title={title}>
      </div>
      <script src="//yohoho.cc/yo.js"></script> */}
    </>
  );
}

export default App;