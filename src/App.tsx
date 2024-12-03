import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-full bg-[#0e0f0ffe]">
      <div className="min-h-screen bg-[#0e0f0f] max-w-[1500px] mx-auto ">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
