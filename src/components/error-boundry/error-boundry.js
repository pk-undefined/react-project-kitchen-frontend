/* eslint-disable no-unused-vars */
import React from 'react';
import Info from '../info/info';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.error && this.state.errorInfo) {
      // Error path
      return (
        <Info />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
