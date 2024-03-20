import './App.css'

// funtional component 
// JSX = Javascipt + HTML
function Header(){
  return(
    <p>Header components</p>
  )
}

function Footer(){
  return(
    <p>Fotter componets</p>
  )
}

function App() {
  return (
    <>
    <Header/>
    <h1>Hello React + Redux 🚀</h1>
    <Header/>
    <Header/>
    <Footer/>
    <Footer/>
    <Footer/>
    </>
  )
}

export default App
