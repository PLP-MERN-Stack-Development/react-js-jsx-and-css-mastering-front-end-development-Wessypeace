import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ApiData from "./pages/ApiData";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4">
        <Home />
        <ApiData />
      </main>
      <Footer />
    </div>
  );
}