import { Download } from './components/Download'
import './styles/App.sass'
import logo from "./assets/images/logo.svg"
import imgPC from "./assets/images/image-computer.png"

function App() {

  return (
    <main className='App'>
      <section className='Intro'>
        <img src={logo} alt="logo" />
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all you devices.</p>
        <Download />
      </section>

      <section className='Features'>
        <h2>Keep track of your snippets</h2>
        <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        <img src={imgPC} alt="photo of computer" />

        <h2>Quick Search</h2>
        <p>Easily search your snippets by content, category, web address, application, and more.</p>
        

        iCloud Sync

        Instantly saves and syncs snippets across all your devices.

        Complete History

        Retrieve any snippets from the first moment you started using the app.

        Access Clipboard anywhere

        Whether you’re on the go, or at your computer, you can access all your Clipboard 
        snippets in a few simple clicks.

        Supercharge your workflow

        We’ve got the tools to boost your productivity.

        Create blacklists

        Ensure sensitive information never makes its way to your clipboard by excluding certain sources.

        Plain text snippets

        Remove unwanted formatting from copied text for a consistent look.

        Sneak preview

        Quick preview of all snippets on your Clipboard for easy access.
        
      </section>


  Clipboard for iOS and Mac OS

  Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard.

  Download for iOS
  Download for Mac

  FAQs
  Contact Us
  Privacy Policy
  Press Kit
  Install Guide
    </main>
  )
}

export default App
