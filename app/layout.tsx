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
        <Script
          id="suppress-devtools-error"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.addEventListener('error', function(event) {
                  var message = event.message || '';
                  if (message.includes('Invalid argument not valid semver') || 
                      message.includes('react_devtools_backend_compact')) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                  }
                }, true);
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

