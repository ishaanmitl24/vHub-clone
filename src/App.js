import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./components/Main";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
