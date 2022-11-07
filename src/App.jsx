import React from "react";
import "./App.css";
import Musica from "./Musica";
import Playlist from "./Playlist";

function App() {
  const [musicas, setMusicas] = React.useState([
    {
      id: "top_1",
      artista: "AC/DC",
      titulo: "Back In Black",
      foto: "https://source.unsplash.com/random",
      execucao: 0,
    },
    {
      id: "top_2",
      artista: "Arctic Monkeys",
      titulo: "Do I Wanna Know?",
      foto: "https://source.unsplash.com/random",
      execucao: 0,
    },
    {
      id: "top_3",
      artista: "Emicida",
      titulo: "AmarElo",
      foto: "https://source.unsplash.com/random",
      execucao: 0,
    },
    {
      id: "top_4",
      artista: "Sá, Rodrix & Guarabyra",
      titulo: "Jesus Numa Moto",
      foto: "https://source.unsplash.com/random",
      execucao: 0,
    },
  ]);

  const top = {
    borderBottom: "2px solid #fff",
    paddingBottom: "14px",
    margin: "10px",
  };

  const handleExecucao = (id) => setMusicas((anterior) => anterior.map((item) => (item.id === id ? {...item, execucao: item.execucao + 1 } : item)));

  const nro = Math.floor(Math.random() * musicas.length) + 1;

  const destaque = musicas[nro];

  return (
    <div className="App">
      <main className="App-header">
        <header>
          <h2 style={top}>🎶 Serratec Music 🎶</h2>
        </header>

        <h2>Destaque</h2>
        <Musica key={destaque.id} item={destaque} />

        <Playlist musicas={musicas} handleExecucao={handleExecucao} />
      </main>
    </div>
  );
}

export default App;
