
import About from "./Components/About"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Reviws from "./Components/Reviws"
import Stat from "./Components/Stat"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
       <Header/>
       <About/>
       <Content/>
       <Stat/>
       <Reviws/>
       <Footer/>
    </div>
  )
}

export default App
