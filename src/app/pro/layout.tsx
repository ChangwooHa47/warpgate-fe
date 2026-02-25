import { ProHeader, ProFooter } from './_components/pro';
import './pro.css';

export const metadata = {
  title: 'Warpgate Pro - 프리미엄 MVP 개발 서비스',
  description: '빠르고 안정적인 MVP 개발 서비스. 전문 개발팀이 함께합니다.',
};

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-normal flex flex-col">
      <ProHeader />
      <main className="flex-1">{children}</main>
      <ProFooter />
    </div>
  );
}
