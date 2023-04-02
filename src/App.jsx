import { Link, Route, Routes, useParams } from "react-router-dom";
import "./App.css"
import ResultsComponent from "./components/ResultsComponent";
import SearchComponent from "./components/SearchComponent";
import MoviesList from "./MoviesList";

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
      <nav className="flex justify-start space-x-2">
        <Link to="/" className="text-gray-400 hover:text-gray-200">Home</Link>
      </nav>
      <SearchComponent />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="search/:id" element={<ResultsComponent />} />
      </Routes>
    </>
  );
}

export default App;