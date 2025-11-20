import { ArrowRight, CheckCircle2, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

/**
 * Home page component
 */
const Home = () => {
  const features = [
    {
      icon: Layers,
      title: 'Component Architecture',
      description: 'Reusable components built with React and JavaScript for maximum maintainability.',
    },
    {
      icon: CheckCircle2,
      title: 'Task Management',
      description: 'Full-featured task manager with localStorage persistence and filtering.',
    },
    {
      icon: Database,
      title: 'API Integration',
      description: 'Fetch and display data from external APIs with loading and error states.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          React JSX & Tailwind Mastery
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A complete React application demonstrating component architecture, state management, 
          and API integration with beautiful Tailwind CSS styling.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Try Task Manager
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              View API Data
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
          <p className="text-muted-foreground mt-2">
            Built with modern React patterns and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-6">
        <Card className="bg-gradient-primary text-white">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Built With Modern Technologies</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>React 18 with JavaScript</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Vite for fast development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Tailwind CSS for styling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>React Router for navigation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Context API for theme</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Custom hooks for logic</span>
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
