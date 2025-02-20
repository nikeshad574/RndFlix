import { useEffect, useState } from "react";
import { ItemType, ResponseItem, getRndItem } from "./ApiService";

function App() {
  const [type, setType] = useState<ItemType>("movies");
  const [rnd, setRnd] = useState<boolean>(false);

  const [item, setItem] = useState<ResponseItem | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getItem() {
      try {
        setLoading(true);
        const item = await getRndItem(type, "latest");
        setItem(item);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getItem();
  }, [rnd]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-2 h-12 border-b-[1px] border-slate-300 flex items-center justify-between bg-slate-50 ">
        <h1 className="text-3xl font-bold text-primary/90">R</h1>

        <a
          href="https://github.com/nikeshad574"
          target="_blank"
          className="underline hover:text-primary/90"
        >
          Github: nikeshad254
        </a>
      </nav>

      <section className="mt-32 px-2 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">RndFlix</h1>
        <h2 className="text-center">
          Watch random TV Shows and Movies for free.
        </h2>
      </section>

      <section className="mt-4 px-2 flex flex-col gap-2 sm:flex-row sm:gap-8  items-center justify-center">
        <div className="selectContainer">
          <p
            className={type === "movies" ? "selectActive" : "selectInActive"}
            onClick={() => setType("movies")}
          >
            Movie
          </p>
          <span />
          <p
            className={type === "tvshows" ? "selectActive" : "selectInActive"}
            onClick={() => setType("tvshows")}
          >
            TV
          </p>
        </div>

        <div
          className={`text-2xl bg-accent p-2 rounded-full cursor-pointer ${
            loading ? "animate-spin" : ""
          }`}
          onClick={() => setRnd((r) => !r)}
        >
          🎲
        </div>
      </section>

      {item ? (
        <section className="px-2 mt-4 flex flex-col items-center justify-center">
          <h3 className="mt-4 text-2xl font-bold text-accent/90">
            {item.type} - {item.title}
          </h3>
          <iframe
            src={item.embed_url_tmdb || item.embed_url}
            className="w-full aspect-video p-2 md:max-w-[600px] lg:max-w-[900px]"
            allowFullScreen
          ></iframe>
        </section>
      ) : (
        <p className="text-center text-2xl mt-2">Press Dice to Get {type}</p>
      )}

      <footer className="mt-6 text-center p-2 bg-black text-white">
        Made with love by{" "}
        <a href="https://github.com/nikeshad574" target="_blank">
          Nikesh Adhikari ❤️
        </a>{" "}
        . &copy; 2024
      </footer>
    </>
  );
}

export default App;
