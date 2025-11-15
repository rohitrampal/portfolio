'use client';

import { useEffect } from 'react';

/**
 * Suppresses known React DevTools errors that occur with React 19
 * This is a compatibility issue between React DevTools extension and React 19
 */
export default function ErrorSuppressor() {
  useEffect(() => {
    // Suppress React DevTools semver error (known issue with React 19)
    const handleError = (event: ErrorEvent) => {
      const errorMessage = event.message || '';
      if (
        errorMessage.includes('Invalid argument not valid semver') ||
        errorMessage.includes('react_devtools_backend_compact')
      ) {
        event.preventDefault();
        event.stopPropagation();
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
      }
    };

    window.addEventListener('error', handleError, true);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError, true);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}

