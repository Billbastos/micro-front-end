import './App.css'
// // @ts-expect-error -- No need to check that for now.
// import Footer from 'remoteApp/Footer'

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <h2>
        It will consume both static and federated footer files from Remote
      </h2>
      {/* <Footer /> */}
    </div>
  )
}

export default App
