import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQutes";
import QuteDetail from "./pages/QuoteDetail";
import NewQutes from "./pages/NewQuotes";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quotedId">
          <QuteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQutes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
