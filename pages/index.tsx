import Image from 'next/image';

import CallToAction from '@components/CallToAction';
import DefaultLayout from '@components/Layouts/Default';
import Hero from '@components/Hero';
import Section from '@components/Section';
import Slider from '@components/Slider';
import SpecialHighlight from '@components/SpecialHighlight';
import Text from '@components/Text';
import TextCard from '@components/TextCard';
import TextIcon from '@components/TextIcon';
import TextSection from '@components/TextSection';
import Quote from '@components/Quote';
import { TIcons } from '@components/Icons/types';
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
            className="md:pr-8 md:max-w-none max-w-lg"
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
            className="md:pr-8 md:max-w-none max-w-lg"
            key={benefitsItem?.content}
            highlightComponent={<SpecialHighlight className="md:p-16 p-4" text={benefitsItem.highlight} />}
            content={benefitsItem.content}
          />
        ))}
      </Section>
      <Section title={texts.workingWithUs.title}>
        <div className="flex flex-wrap gap-x-16 gap-y-12 justify-center">
          {texts.workingWithUs.items.map((workingWithUsItem) => (
            <TextIcon
              key={workingWithUsItem.title}
              className="flex-1 md:basis-1/4 basis-1/2 max-w-sm"
              icon={workingWithUsItem.icon as TIcons}
              title={workingWithUsItem.title}
              content={workingWithUsItem.content}
            />
          ))}
        </div>
      </Section>
      <Section title={texts.testimonials.title} className="md:mb-10">
        <Slider>
          {texts.testimonials.items.map((testimonialItem) => (
            <Quote
              key={testimonialItem.quote}
              quote={testimonialItem.quote}
              author={testimonialItem.author}
            />
          ))}
        </Slider>
      </Section>
      <Section className="bg-white bg-opacity-5 hidden md:flex">
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {texts.clients.items.map((client) => (
            <Image
              key={client.logo.src}
              className="h-10"
              src={client.logo}
              height={client.logo.height}
              width={client.logo.width}
              alt={client.title}
            />
          ))}
        </div>
      </Section>
      <Section>
        <div className="flex items-center justify-center gap-10 flex-wrap py-5">
          {texts.letsTalk.items.map((cta) => (
            <CallToAction title={cta.title} link={cta.link} />
          ))}
        </div>
      </Section>
    </DefaultLayout>
  );
}

export default Home;
