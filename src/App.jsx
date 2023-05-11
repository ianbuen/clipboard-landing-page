import { Download } from './components/Download';
import './styles/App.sass';
import logo from "./assets/images/logo.svg";
import imgPC from "./assets/images/image-computer.png";
import imgGoogle from "./assets/images/logo-google.png";
import imgIBM from "./assets/images/logo-ibm.png";
import imgMicrosoft from "./assets/images/logo-microsoft.png";
import imgHP from "./assets/images/logo-hp.png";
import imgVector from "./assets/images/logo-vector-graphics.png";

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

        <h3>Quick Search</h3>
        <p>Easily search your snippets by content, category, web address, application, and more.</p>
        

        <h3>iCloud Sync</h3>
        <p>Instantly saves and syncs snippets across all your devices.</p>

        <h3>Complete History</h3>
        <p>Retrieve any snippets from the first moment you started using the app.</p>

        
        <h2>Access Clipboard anywhere</h2>
        <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>

        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
        

        <h3>Create blacklists</h3>
        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>

        <h3>Plain text snippets</h3>
        <p>Remove unwanted formatting from copied text for a consistent look.</p>

        <h3>Sneak preview</h3>
        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
        
      </section>

      <section className='Brands'>
        <img src={imgGoogle} alt="google logo" />
        <img src={imgIBM} alt="ibm logo" />
        <img src={imgMicrosoft} alt="microsoft logo" />
        <img src={imgHP} alt="hp logo" />
        <img src={imgVector} alt="vector graphics logo" />
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
