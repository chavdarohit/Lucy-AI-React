import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
  console.log("app component render")
  return (
    <>
    <Sidebar/>
    <Main/>
    </>
  )
}

export default App