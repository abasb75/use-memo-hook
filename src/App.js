import { Suspense, lazy } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

const WithUseMemo =  lazy(()=>import( "./with-use-memo/app"));
const WithoutUseMemo = lazy(()=>import( "./without-use-memo/app"));
const IndexPage = lazy(()=>import( "./index-page/app"));

function App() {
  return (
    <Suspense fallback={<p>Page is loading ...</p>} >
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/without-use-memo" element={<WithoutUseMemo />} />
          <Route path="/with-use-memo" element={<WithUseMemo />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
