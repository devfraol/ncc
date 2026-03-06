import PageIntro from '@/components/layout/page-intro';

type CoursePageIntroProps = {
  title: string;
  description: string;
};

export default function CoursePageIntro({
  title,
  description,
}: CoursePageIntroProps) {
  return <PageIntro title={title} description={description} />;
}
