import { Navigation } from '../components/Navigation';
import dynamic from 'next/dynamic';

import { WelcomeBanner } from '../components/WelcomeBanner'
import { Layout } from '../components/Layout'


const AuthApp = dynamic(() => import('remote/ReactApp'), {
  ssr: false
});

export default function Auth() {
  return (
    <div>
      <Layout>
      <WelcomeBanner title="HOST APP" intro="Application example" />
      <Navigation active='auth' />
      <h1>Auth Application</h1>
      <a href="/">back</a>
      <AuthApp />
      </Layout>
    </div>
  );
}
