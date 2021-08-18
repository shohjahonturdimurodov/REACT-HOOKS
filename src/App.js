import React, {useState} from 'react'
import Main from './Main'
import Alert from './Alert'

export const AlertContext = React.createContext()

export default function App() {
  const [alert, setAlert] = useState(false)
  const toggleAlert = () => setAlert((prev) => !prev)

  return (
    <AlertContext.Provider value={alert}>
    <div className="container">
      <Alert/>
      <Main toggle={toggleAlert}/>
      </div>
    </AlertContext.Provider>
  )
}
