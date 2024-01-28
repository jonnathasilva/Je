import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen h-auto max-w-6xl mx-auto px-5 xl:px-0">
      <header className="flex justify-between py-2">
        <h1 className="text-base">JE.Lanche</h1>

        <form>
          <label
            htmlFor="search"
            className="w-[1px] h-[1px] absolute overflow-hidden p-0 border-0"
          >
            busca
          </label>

          <input
            type="search"
            name="search"
            id="search"
            className="outline-none px-2 rounded"
          />
        </form>
      </header>
    </main>
  );
}
