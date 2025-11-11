import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'CY4 DigitalTwin Pro',
  description: 'Company website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* Header visible on all pages */}
        <Header />

        {/* Main content (page-specific sections) */}
        {children}

        {/* Footer visible on all pages */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
