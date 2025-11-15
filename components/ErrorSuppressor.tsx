'use client';

import { useEffect } from 'react';

/**
 * Suppresses known React DevTools errors that occur with React 19
 * This is a compatibility issue between React DevTools extension and React 19
 */
export default function ErrorSuppressor() {
  useEffect(() => {
    // Additional layer of error suppression for React DevTools semver error
    const handleError = (event: ErrorEvent) => {
      const errorMessage = event.message || event.error?.message || '';
      if (
        errorMessage.includes('Invalid argument not valid semver') ||
        errorMessage.includes('react_devtools_backend_compact') ||
        errorMessage.includes('react_devtools_backend')
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorMessage = event.reason?.message || event.reason?.toString() || '';
      if (
        errorMessage.includes('Invalid argument not valid semver') ||
        errorMessage.includes('react_devtools_backend')
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    // Override console.error as additional safeguard
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const errorMessage = args[0]?.toString() || '';
      if (
        errorMessage.includes('Invalid argument not valid semver') ||
        errorMessage.includes('react_devtools_backend_compact') ||
        errorMessage.includes('react_devtools_backend')
      ) {
        return; // Suppress this error
      }
      originalConsoleError.apply(console, args);
    };

    window.addEventListener('error', handleError, true);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      console.error = originalConsoleError;
      window.removeEventListener('error', handleError, true);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}

