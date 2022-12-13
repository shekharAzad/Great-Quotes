import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQutes";
import QuteDetail from "./pages/QuoteDetail";
import NewQutes from "./pages/NewQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

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
        <Route path="/quotes/:quoteId">
          <QuteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQutes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
