import './App.css'
import { useState, useRef, useEffect } from 'react'
// @ts-expect-error -- No need to check that for now.
import { createFooter } from '../shared/footer'
import Footer from './Footer'

const App = () => {
  const [count, setCount] = useState(0)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.replaceWith(createFooter())
    }
  }, [footerRef])

  return (
    <>
      <h1>Remote App 🚚</h1>
      <h2>Share static and federated footer with Host</h2>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div ref={footerRef}></div>
      <Footer />
    </>
  )
}

export default App
