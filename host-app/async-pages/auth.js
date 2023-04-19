import Button from '../components/Button';
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
      <h1>Auth Application</h1>
      <AuthApp />
      </Layout>
    </div>
  );
}
