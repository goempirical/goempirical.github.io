import { texts } from '@constants/pages/careers';
import { TIcons } from '@components/Icons/types';
import DefaultLayout from '@components/Layouts/Default';
import Hero from '@components/Hero';
import Section from '@components/Section';
import Text from '@components/Text';
import TextIcon from '@components/TextIcon';
import TextSection from '@components/TextSection';
import Step from '@components/Step';
import CallToAction from '@components/CallToAction';

function Home() {
  return (
    <DefaultLayout>
      <Hero className="sm:pt-80 sm:pb-72 pt-48 pb-32 px-4 -mt-32" bgImage={texts.hero.bgImage}>
        <Text variation="h1" className="max-w-xl text-center" isMarkdown>{texts.hero.title}</Text>
        <Text variation="p" className="max-w-xl text-center opacity-80">{texts.hero.content}</Text>
      </Hero>
      <Section title={texts.talentProfile.title}>
        {texts.talentProfile.items.map((talentProfileItem) => (
          <TextSection
            className="md:pr-8 md:max-w-none max-w-lg"
            key={talentProfileItem.title}
            title={talentProfileItem.title}
            highlight={talentProfileItem.highlight}
            content={talentProfileItem.content}
          />
        ))}
      </Section>
      <Section title={texts.ourApproach.title}>
        <div className="flex flex-wrap gap-x-16 gap-y-12 justify-center">
          {texts.ourApproach.items.map((ourApproachItem) => (
            <TextIcon
              key={ourApproachItem.title}
              className="flex-1 md:basis-1/4 basis-1/2 max-w-sm"
              icon={ourApproachItem.icon as TIcons}
              title={ourApproachItem.title}
              content={ourApproachItem.content}
            />
          ))}
        </div>
      </Section>
      <Section title={texts.howWeDoIt.title} classNames={{ innerContainer: 'flex flex-col lg:gap-10 gap-14 max-w-u1280 w-full items-center' }}>
        <Text variation="p" className="max-w-1.5xl text-center mb-5 sm:mb-20 opacity-70">{texts.howWeDoIt.content}</Text>
        <div className="flex flex-wrap gap-x-5 gap-y-12 justify-center">
          {texts.howWeDoIt.items.map((howWeDoItItem) => (
            <Step
              key={howWeDoItItem.title}
              className="flex-1 md:basis-1/4 basis-1/2 max-w-md"
              stepNumber={howWeDoItItem.stepNumber}
              title={howWeDoItItem.title}
              content={howWeDoItItem.content}
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
