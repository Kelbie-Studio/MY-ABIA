import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-red-50 text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Something went wrong.</h1>
          <p className="text-xl text-gray-700 mb-6">The website encountered an unexpected error.</p>
          <div className="bg-white p-6 rounded-lg shadow-md border border-red-200 max-w-2xl w-full text-left overflow-auto">
            <p className="font-mono text-sm text-red-500 whitespace-pre-wrap">
              {this.state.error && this.state.error.toString()}
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-bold"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
