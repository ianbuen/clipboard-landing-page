import { Download } from './components/Download'
import './styles/App.sass'
import logo from "./assets/images/logo.svg"

function App() {

  return (
    <main className='App'>
      <section className='Intro'>
        <img src={logo} alt="logo" />
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all you devices.</p>
        <Download />
      </section>
    </main>
  )
}

export default App
