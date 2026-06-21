import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import PageTitle from '../components/PageTitle';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <PageTitle title="Page Not Found" />
      <div className="text-center">
        <AlertTriangle className="w-16 h-16 text-tech-muted mx-auto mb-6" />
        <h1 className="text-6xl font-extrabold font-heading text-tech-text">404</h1>
        <p className="text-xl text-tech-muted mt-4">Page not found</p>
        <p className="text-sm text-tech-muted mt-2 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold rounded-xl transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
