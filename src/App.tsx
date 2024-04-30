function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-2 h-12 border-b-[1px] border-slate-300 flex items-center justify-between ">
        <h1 className="text-3xl font-bold text-primary/90">R</h1>

        <a href="#" target="_blank" className="underline hover:text-primary/90">
          Github: nikeshad254
        </a>
      </nav>

      <section className="mt-12 px-2 py-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">RndFlix</h1>
        <h2 className="text-center">
          Watch random TV Shows and Movies for free.
        </h2>

        <h3 className="mt-4 text-2xl font-bold text-accent/90">
          Movie - Jumanji (2019)
        </h3>
        <iframe
          src="https://vidsrc.to/embed/movie/tt7975244"
          className="w-full aspect-video p-2 md:max-w-[600px] lg:max-w-[900px]"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

export default App;
