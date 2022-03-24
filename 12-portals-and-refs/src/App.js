import { useState, StrictMode } from "react";
import {  Route, Switch, Link } from "react-router-dom";
import Details from "./Details"
import SearchParams from "./SearchParams"
import ThemeContext from "./ThemeContext";

// const Details = lazy(() => import("./Details"))
//component that will be lazily loaded later 
// const SearchParams = lazy(() => import("./SearchParams"))

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
    <ThemeContext.Provider value={theme}>
      <div>
        {/* <Suspense fallback={<h2>loading route...</h2>}> */}
           
              <header>
                <Link to="/">Adopt Me!</Link>
              </header>
              <Switch>
                <Route path="/details/:id">
                  <Details />
                </Route>
                <Route path="/">
                  <SearchParams />
                </Route>
              </Switch>
           
        {/* </Suspense> */}
          
      </div>
    </ThemeContext.Provider>
    </StrictMode>
  );
};
export default App;
