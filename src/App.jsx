import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import KartuMenu from './components/KartuMenu'
import Panel from './components/Panel'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Nabila";
  const n = 15;
  const jam = 9;
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

        <KartuMenu nama = "Nasi Ayam Geprek" harga = {10000 + (n*100)} kategori/>
        <KartuMenu nama = "Es Teh Lemon" harga = "6.000" kategori="Minuman"/>
        <KartuMenu nama = "Mie Goreng Telur" harga = "12.000" kategori/>

    </>
  )
}

export default App
