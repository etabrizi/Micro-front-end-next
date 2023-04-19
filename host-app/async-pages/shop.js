import { Navigation } from '../components/Navigation';
import dynamic from 'next/dynamic';

import { WelcomeBanner } from '../components/WelcomeBanner'
import { Layout } from '../components/Layout'


const ShopApp = dynamic(() => import('remote2/ReactApp2'), {
  ssr: false
});

export default function Shop() {
  return (
    <div>
      <Layout>
      <WelcomeBanner title="HOST APP" intro="Application example" />
       <Navigation active='shop' />
       <a href="/">back</a>
       <h1>SHOP Application</h1>
       <ShopApp />
      </Layout>
    </div>
  );
}
