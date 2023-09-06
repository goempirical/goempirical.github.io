import Image from 'next/image';
import CallToAction from '@components/CallToAction';
import DefaultLayout from '@components/Layouts/Default';
import Hero from '@components/Hero';
import Page from '@components/Page';
import Quote from '@components/Quote';
import Section from '@components/Section';
import Slider from '@components/Slider';
import SpecialHighlight from '@components/SpecialHighlight';
import Text from '@components/Text';
import TextCard from '@components/TextCard';
import TextIcon from '@components/TextIcon';
import TextSection from '@components/TextSection';
import { TIcons } from '@components/Icons/types';
import { config, texts } from '@constants/pages';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
  };

  const items: object[] = [];
  texts.clients.items.forEach((item) => {
    items.push(
      <div className="flex items-center justify-center gap-10 flex-wrap">
        <Image
          key={item.logo.src}
          className="gap-10 grayscale dark:brightness-100 dark:contrast-100 brightness-200 contrast-0"
          src={item.logo}
          height={item.logo.height}
          width={item.logo.width}
          alt={item.title}
        />
      </div>,
    );
  });

  return (
    <Page config={config}>
      <DefaultLayout>
        <Hero className="py-20 md:py-40 px-4">
          <Text variation="h1" className="max-w-xl text-center" isMarkdown>{texts.hero.title}</Text>
          <Text variation="p" className="max-w-xl text-center opacity-80 whitespace-pre-line">{texts.hero.content}</Text>
          <div className="flex items-center justify-center gap-10 flex-wrap py-5">
            {texts.letsTalkHero.items.map((cta) => (
              <CallToAction key="" title={cta.title} link={cta.link} />
            ))}
          </div>
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
        <Section title={texts.services.title}>
          <div className="flex flex-wrap gap-12 justify-center">
            {texts.services.items.map((servicesItem) => (
              <div key={servicesItem.title} className="flex flex-col flex-1 basis-1/2 max-w-lg">
                <Text variation="h3" className="text-primary font-bold">{servicesItem.title}</Text>
                <Text variation="p" className="opacity-70">{servicesItem.content}</Text>
              </div>
            ))}
          </div>
        </Section>
        <Section title={texts.expertises.title}>
          <div className="flex flex-wrap gap-12 justify-center">
            {texts.expertises.items.map((expertiseItem) => (
              <TextCard
                key={expertiseItem.title}
                className="md:col-span-6 col-span-12 px-4"
                title={expertiseItem.title}
                content={expertiseItem.content}
              />
            ))}
          </div>
        </Section>
        <Section title={texts.industries.title}>
          <div className="flex flex-wrap gap-12 justify-center">
            {texts.industries.items.map((industryItem) => (
              <TextCard
                key={industryItem.title}
                className="md:col-span-6 col-span-12 px-4"
                title={industryItem.title}
                content={industryItem.content}
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
        <Section className="flex flex-wrap bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 md:flex items-center ">
          <AliceCarousel
            autoPlay
            infinite
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={1000}
            animationDuration={1000}
            mouseTracking
            items={items}
            responsive={responsive}
          />
        </Section>
        <Section>
          <div className="flex items-center justify-center gap-10 flex-wrap py-5">
            {texts.letsTalk.items.map((cta) => (
              <CallToAction key={cta.title} title={cta.title} link={cta.link} />
            ))}
          </div>
        </Section>
      </DefaultLayout>
    </Page>
  );
}

export default Home;
