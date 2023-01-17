import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`).then((res) =>
      res.json()
    );

    setTopAnime(temp.data.slice(0,5));
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`).then((res) =>
    res.json());
    console.log(temp.data)
    if(typeof temp.data !== 'undefined') {
      setAnimeList(temp.data);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        
        <MainContent 
          HandleSearch={HandleSearch}
          search={search}
          animeList={animeList}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}

export default App;
