import dynamic from 'next/dynamic';
const Page = dynamic(
  async () => {
    return import('../async-pages/shop');
  },
  {
    ssr: false,
  },
);
export default function Shop() {
  return <Page />;
}
