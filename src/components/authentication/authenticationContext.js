import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../api/firebase"
const AuthenticationContext = React.createContext()

export function useAuthentication() {
  return useContext(AuthenticationContext)
}

export function AuthenticationProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
   
  }

  return (
    <AuthenticationContext.Provider value={value}>
      { children}
    </AuthenticationContext.Provider>
  )
}