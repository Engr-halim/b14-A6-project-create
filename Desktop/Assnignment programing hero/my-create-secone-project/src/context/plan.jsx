'use client'

import {
  createContext,
  useContext,
  useState,
  
} from 'react'

const PlanContext = createContext(null)

export function PlanProvider({children}) {
  const [plan, setPlan] = useState([])
  const [saved, setSaved] = useState([])
  const [completed, setCompleted] = useState([])

  const sharaData = {
   plan,
   saved,
   completed,
  }
return (
  <PlanContext.Provider value = {sharaData}>{children}</PlanContext.Provider>
)
}

export default PlanProvider ;
