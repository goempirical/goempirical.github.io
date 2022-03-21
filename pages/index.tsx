import Hero from '@components/Hero';
import DefaultLayout from '@components/Layouts/Default';
import Section from '@components/Section';
import SpecialHighlight from '@components/SpecialHighlight';
import Text from '@components/Text';
import TextCard from '@components/TextCard';
import TextSection from '@components/TextSection';
import { texts } from '@constants/pages';

function Home() {
  return (
    <DefaultLayout>
      <Hero className="py-20 md:py-40 px-4">
        <Text variation="h1" className="max-w-xl text-center" isMarkdown>{texts.hero.title}</Text>
        <Text variation="p" className="max-w-xl text-center opacity-80">{texts.hero.content}</Text>
      </Hero>
      <Section title={texts.ourClients.title}>
        {texts.ourClients.items.map((ourClientsItem) => (
          <TextSection
            className="pr-8"
            key={ourClientsItem.title}
            title={ourClientsItem.title}
            highlight={ourClientsItem.highlight}
            content={ourClientsItem.content}
          />
        ))}
      </Section>
      <Section title={texts.approach.title}>
        <div className="grid grid-cols-12 gap-y-7 gap-x-2 md:px-4 lg:px-16 w-full">
          {texts.approach.items.map((approachItem) => (
            <TextCard
              key={approachItem.title}
              className="md:col-span-6 col-span-12 px-4"
              title={approachItem.title}
              content={approachItem.content}
            />
          ))}
        </div>
      </Section>
      <Section title={texts.benefits.title}>
        {texts.benefits.items.map((benefitsItem) => (
          <TextSection
            className="pr-8"
            key={benefitsItem?.content}
            highlightComponent={<SpecialHighlight className="md:p-16 p-4" text={benefitsItem.highlight} />}
            content={benefitsItem.content}
          />
        ))}
      </Section>
    </DefaultLayout>
  );
}

export default Home;
