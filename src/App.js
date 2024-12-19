import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./components/utils/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
