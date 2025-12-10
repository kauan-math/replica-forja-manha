import styles from './App.module.css'
import logo from '/logo.png'




function App() {
  return (
    <>
      <nav className={styles.menu}>
        <img width={70} src={logo} alt={logo} />
        <a href="#s1">PINCH POT CAFÈ</a>
        <a href="#s2">POTTERY CLASSES</a>
        <a href="#s3">GIFTS 2025</a>
        <a href="#s4">COMMUNITY</a>
        <a href="#s5">COMPANIES</a>
      </nav>

      <main>
        <section className={styles.s1} id="s1">
          <div className={styles.s1}>
            <h1>The beauty of process</h1>
            <p>Discover the Pinch Pot Café, pottery classes and creative spaces in Odense, Aarhus and Copenhagen.</p>
          </div>
        </section >

        <section className={styles.s2} id="s2">
          <h1> Yonobi Spaces</h1>
          <div className={styles.wrapCards}>
            <div className={styles.card1}>
            <div className={styles.card}>
            <img style={{height: "400px"}} src='/img10.jpg' alt='img1'/>
            <h1>ODENSE STUDIO</h1>
            <p>A brick house by the HC Andersen museum,...</p>
            </div>
            </div>
            <div className={styles.card}>
            <img style={{height: "400px"}} src='/img2.webp' alt='img1'/>
            <h1>AARHUS STUDIO</h1>
            <p>In a courtyard of the Latin Qarter—...</p>
            </div>
            <div className={styles.card}>
            <img style={{height: "400px"}} src='/img3.webp' alt='img1'/>
            <h1>COPENHAGEN STUDIO</h1>
            <p>Two floors by the canal—coffe,clay</p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
