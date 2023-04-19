import Button from '../components/Button';
import dynamic from 'next/dynamic';

import { WelcomeBanner } from '../components/WelcomeBanner'
import { Layout } from '../components/Layout'


const AuthApp = dynamic(() => import('remote/ReactApp'), {
  ssr: false
});

const ShopApp = dynamic(() => import('remote2/ReactApp2'), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      <Layout>
      <WelcomeBanner title="HOST APP" intro="Application example" />
      <ul>
        <li><a href="/shop">SHOP</a></li>
        <li><a href="/auth">AUTH</a></li>
      </ul>
      <h1>This is a next.js host application</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque neque congue convallis rutrum. Ut porta dui volutpat, laoreet est maximus, tincidunt sapien. Sed sit amet massa a purus luctus dictum. In luctus mauris eu nunc tincidunt facilisis. Curabitur mattis vehicula magna, interdum dignissim leo tristique nec. Fusce a sem ipsum. Pellentesque eu condimentum massa, sit amet aliquet nisl. Sed pretium urna et dolor lacinia, vel fringilla dui convallis. In hac habitasse platea dictumst. Vivamus ex elit, pretium sed risus at, porttitor sodales justo. Praesent semper lobortis imperdiet. Donec eu justo non lacus cursus finibus.</p>
      </Layout>
    </div>
  );
}
