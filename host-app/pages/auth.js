import dynamic from 'next/dynamic';
const Page = dynamic(
  async () => {
    return import('../async-pages/auth');
  },
  {
    ssr: false,
  },
);
export default function Auth() {
  return <Page />;
}
