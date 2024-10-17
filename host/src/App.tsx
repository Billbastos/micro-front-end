import './App.css'
import { lazy, Suspense } from 'react'
const Footer = lazy(() =>
  // @ts-expect-error -- No need to check that for now.
  import('remoteApp/Footer').catch(() => ({
    default: () => <div>Footer fallback with links.</div>,
  }))
)

function App() {
  return (
    <div>
      <h1>Host App 🛍</h1>
      <h2>
        It will consume both static and federated footer files from Remote
      </h2>
      <Suspense fallback='Loading Footer...'>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
