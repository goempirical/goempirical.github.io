import DefaultLayout from '@components/Layouts/Default';
import Hero from '@components/Hero';
import Text from '@components/Text';
import { texts } from '@constants/pages/careers';

function Home() {
  return (
    <DefaultLayout>
      <Hero className="pt-80 pb-72 px-4 -mt-32" bgImage={texts.hero.bgImage}>
        <Text variation="h1" className="max-w-xl text-center" isMarkdown>{texts.hero.title}</Text>
        <Text variation="p" className="max-w-xl text-center opacity-80">{texts.hero.content}</Text>
      </Hero>
    </DefaultLayout>
  );
}

export default Home;
