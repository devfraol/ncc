import PageIntro from '@/components/layout/page-intro';

type ProtectedPageIntroProps = {
  title: string;
  description: string;
};

export default function ProtectedPageIntro({
  title,
  description,
}: ProtectedPageIntroProps) {
  return <PageIntro title={title} description={description} />;
}
