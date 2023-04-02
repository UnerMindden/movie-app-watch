import React from "react"
import { Suspense } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import "./App.css"

const MoviesList = React.lazy(() => import("./MoviesList"));

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
      <Suspense fallback={<div>Please wait...</div>}>
        <MoviesList />
      </Suspense>
    </>
  );
}

export default App;