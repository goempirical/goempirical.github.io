import Hero from '@components/Hero';
import DefaultLayout from '@components/Layouts/Default';
import Text from '@components/Text';
import { texts } from '@constants/pages';

function Home() {
  return (
    <DefaultLayout>
      <Hero className="py-20 md:py-40 px-4">
        <Text variation="h1" className="max-w-xl text-center" isMarkdown>{texts.hero.title}</Text>
        <Text variation="p" className="max-w-xl text-center">{texts.hero.content}</Text>
      </Hero>
    </DefaultLayout>
  );
}

export default Home;
