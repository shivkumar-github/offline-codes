import Chai from './chai' // name must be capital

function App() {
  const username = "chai aur code"
  return (
    // <h1>Hello to react with vite</h1>
    <>
      <Chai />
      <h1>Chai aur code {username}</h1> { /* we can not write expressions which are yet to be evaluated */}
      <p1>test para</p1>
    </>
  )
}

export default App
