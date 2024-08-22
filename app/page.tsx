import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          <h2>AI Report</h2>
          <p>
              <a className="underline" href="/d3js">D3JS</a>
          </p>
          <p>
              <a className="underline" href="/cytoscape">Cytoscape</a>
          </p>

      </div>
    </main>
  );
}
