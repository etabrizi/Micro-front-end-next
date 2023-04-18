import Button from '../components/Button';
import dynamic from 'next/dynamic';


const AuthApp = dynamic(() => import('remote/ReactApp'), {
  ssr: false,
});

const ShopApp = dynamic(() => import('remote2/ReactApp2'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <Button />
      <h2>Client - Button</h2>
      <AuthApp />
     <hr />
      <ShopApp />
      </div>
  );
}
