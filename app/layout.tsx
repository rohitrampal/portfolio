import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LocaleProvider } from '@/contexts/LocaleContext';
import ErrorSuppressor from '@/components/ErrorSuppressor';

export const metadata: Metadata = {
  title: 'Portfolio - Full-Stack Developer',
  description: 'Modern portfolio website showcasing projects, skills, and services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                // Override console.error to catch DevTools errors - MUST be first
                var originalConsoleError = console.error;
                console.error = function() {
                  try {
                    var message = arguments[0]?.toString() || '';
                    if (message.includes('Invalid argument not valid semver') || 
                        message.includes('react_devtools_backend_compact') ||
                        message.includes('react_devtools_backend') ||
                        (arguments[0] && arguments[0].message && arguments[0].message.includes('semver'))) {
                      return; // Suppress this error
                    }
                  } catch(e) {}
                  originalConsoleError.apply(console, arguments);
                };

                // Override window.onerror - MUST be before React loads
                var originalOnError = window.onerror;
                window.onerror = function(message, source, lineno, colno, error) {
                  try {
                    var errorMessage = message?.toString() || error?.message || '';
                    if (errorMessage.includes('Invalid argument not valid semver') || 
                        errorMessage.includes('react_devtools_backend_compact') ||
                        errorMessage.includes('react_devtools_backend') ||
                        errorMessage.includes('semver')) {
                      return true; // Suppress this error
                    }
                  } catch(e) {}
                  if (originalOnError) {
                    return originalOnError.call(window, message, source, lineno, colno, error);
                  }
                  return false;
                };

                // Add error event listener with capture phase
                window.addEventListener('error', function(event) {
                  try {
                    var message = event.message || event.error?.message || '';
                    if (message.includes('Invalid argument not valid semver') || 
                        message.includes('react_devtools_backend_compact') ||
                        message.includes('react_devtools_backend') ||
                        message.includes('semver')) {
                      event.preventDefault();
                      event.stopPropagation();
                      event.stopImmediatePropagation();
                      return false;
                    }
                  } catch(e) {}
                }, true);

                // Add unhandled rejection listener
                window.addEventListener('unhandledrejection', function(event) {
                  try {
                    var message = event.reason?.message || event.reason?.toString() || '';
                    if (message.includes('Invalid argument not valid semver') || 
                        message.includes('react_devtools_backend') ||
                        message.includes('semver')) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  } catch(e) {}
                }, true);
              })();
            `,
          }}
        />
        <Script
          id="suppress-devtools-error"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Additional error suppression layer
                if (typeof window !== 'undefined') {
                  var handleError = function(event) {
                    var message = event.message || event.error?.message || '';
                    if (message.includes('Invalid argument not valid semver') || 
                        message.includes('react_devtools_backend_compact') ||
                        message.includes('react_devtools_backend')) {
                      event.preventDefault();
                      event.stopPropagation();
                      event.stopImmediatePropagation();
                      return false;
                    }
                  };
                  window.addEventListener('error', handleError, true);
                }
              })();
            `,
          }}
        />
        <ErrorSuppressor />
        <ThemeProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

