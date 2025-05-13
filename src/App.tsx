import { Router } from "../Router";
import { ApolloProvider } from "@apollo/client/react/context/ApolloProvider"
import { client } from "./lib/apollo"
import { BrowserRouter } from "react-router-dom";



export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>


    </ApolloProvider>


  )
}

export default App
