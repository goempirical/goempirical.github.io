import CallToAction from '@components/CallToAction';
import DefaultLayout from '@components/Layouts/Default';
import Hero from '@components/Hero';
import Page from '@components/Page';
import Quote from '@components/Quote';
import Section from '@components/Section';
import SpecialHighlight from '@components/SpecialHighlight';
import Slider from '@components/Slider';
import Text from '@components/Text';
// import TextCard from '@components/TextCard';
import TextSection from '@components/TextSection';
import { config, texts } from '@constants/pages/about-us';

function AboutUs() {
  return (
    <Page config={config}>
      <DefaultLayout>
        <Hero className="sm:pt-80 sm:pb-72 pt-48 pb-32 px-4 -mt-36" bgImage={texts.hero.bgImage}>
          <Text variation="h1" className="max-w-2xl text-center" isMarkdown>{texts.hero.title}</Text>
          <Text variation="p" className="max-w-xl text-center opacity-80">{texts.hero.content}</Text>
        </Hero>
        <Section title={texts.aboutUs.title}>
          {texts.aboutUs.items.map((aboutUsItem) => (
            <TextSection
              key={aboutUsItem?.content}
              className="md:max-w-none max-w-lg gap-2"
              highlightComponent={(
                <SpecialHighlight
                  bgColors={['bg-brand-yellow', 'bg-brand-red', 'bg-primary']}
                  className="justify-end sm:px-4"
                  classNames={{ textPart: 'text-6xl sm:text-8xl leading-tight sm:leading-none' }}
                  text={aboutUsItem.highlight}
                />
            )}
              content={aboutUsItem.content}
            />
          ))}
        </Section>
        <Section title={texts.ourValues.title}>
          <div className="flex flex-wrap gap-12 justify-center">
            {texts.ourValues.items.map((ourValuesItem) => (
              <div key={ourValuesItem.title} className="flex flex-col flex-1 basis-1/2 max-w-lg">
                <Text variation="h3" className="text-primary font-bold">{ourValuesItem.title}</Text>
                <Text variation="p" className="opacity-70">{ourValuesItem.content}</Text>
              </div>
            ))}
          </div>
        </Section>
        {/* Commented out based on Niv comment on the shared Figma. */}
        {/* <Section title={texts.ourApproach.title}>
          <div className="grid grid-cols-12 gap-y-7 gap-x-2 md:px-4 lg:px-16 w-full">
            {texts.ourApproach.items.map((ourApproachItem) => (
              <TextCard
                key={ourApproachItem.title}
                className="md:col-span-6 col-span-12 px-4"
                title={ourApproachItem.title}
                content={ourApproachItem.content}
              />
            ))}
          </div>
        </Section> */}
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
        <Section title={texts.whyWeDoIt.title}>
          {texts.whyWeDoIt.items.map((whyWeDoItItem) => (
            <TextSection
              className="md:pr-8 md:max-w-none max-w-lg"
              key={whyWeDoItItem.content}
              highlight={whyWeDoItItem.highlight}
              content={whyWeDoItItem.content}
            />
          ))}
        </Section>
        <Section>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-10 gap-x-40 flex-wrap py-6 sm:py-24">
            {texts.letsTalk.items.map((cta) => (
              <CallToAction key={cta.title} title={cta.title} link={cta.link} />
            ))}
          </div>
        </Section>
      </DefaultLayout>
    </Page>
  );
}

export default AboutUs;
