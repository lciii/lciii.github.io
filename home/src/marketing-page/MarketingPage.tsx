import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Testimonials from './components/Testimonials';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline />

      <Hero />
      <div>
        <LogoCollection />
        <Divider />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
