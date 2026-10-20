import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Nabila";
  const n = 15;
  const jam = 15;
  const style_judul = {
    fontSize: '20px',
    color: 'black'
  }
  return (
    <>
      <h1 className='judul' style={style_judul}>Kantin {nama}</h1>
      <p>Saldo awal kartu kantin: Rp {n * 1000}</p>
      <p>{(jam < 12) ? "Selamat Pagi" : "Selamat Siang"}</p>
      <button type="button" disabled>Bayar</button>
    </>
  )
}

export default App
