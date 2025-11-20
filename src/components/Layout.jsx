import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * Layout wrapper component
 */
export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
