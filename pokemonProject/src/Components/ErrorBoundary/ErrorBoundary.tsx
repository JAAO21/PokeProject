import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: Boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(
      "ErrorBoundary caugth an error :",
      error,
      "message:",
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops ! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
