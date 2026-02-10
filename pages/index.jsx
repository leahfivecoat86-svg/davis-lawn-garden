import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Davis Lawn & Garden | Commercial Landscaping</title>
        <meta
          name="description"
          content="Commercial lawn maintenance and professional flowerbed design, restoration, and seasonal color installations."
        />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937" }}>
        <section style={{ background: "#14532d", color: "white", padding: "80px 20px", textAlign: "center" }}>
          <h1>Davis Lawn & Garden</h1>
          <p>Commercial Lawn Maintenance • Flowerbed Design & Repair</p>
        </section>

        <section style={{ padding: "60px 20px" }}>
          <h2>Flowerbed Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {[1,2,3,4,5,6].map((i) => (
              <div key={i}>
                <img
                  src={`https://placehold.co/600x400?text=Flowerbed+${i}`}
                  alt="Commercial flowerbed"
                  style={{ width: "100%" }}
                />
              </div>
            ))}
          </div>
        </section>

        <footer style={{ background: "#14532d", color: "white", padding: "20px", textAlign: "center" }}>
          © {new Date().getFullYear()} Davis Lawn & Garden
        </footer>
      </main>
    </>
  );
}
