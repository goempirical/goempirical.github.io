import Text from '@components/Text';

const texts = {
  h1: 'H1 - 50 px - Hind Bold',
  h2: 'H2 - 36 px - Hind Bold',
  h3: 'H3 - 26 px - Hind Regular',
  h4: 'H4 - 22 px - Hind Bold',
  highlighted: 'Highlighted text - 56 px - Hind Regular',
  paragraph: 'Paragraph - Red Hat Regular - 18 px. You have a proven business model, but you\'re still defining product direction and making high level technical decisions. You are in the process of building a core development team and looking to establish strong software engineering practices. You are open to expanding your capacity as a service so you can leverage...',
  quote: 'Testimonial - Red Hat Light Italic - 34 px . Strong team, solid Results! This team has been essential to the success of SouthDoctors.',
};

function Home() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <Text variation="h1">{texts.h1}</Text>
      <Text variation="h2">{texts.h2}</Text>
      <Text variation="h3">{texts.h3}</Text>
      <Text variation="h4">{texts.h4}</Text>
      <Text variation="highlighted" className="max-w-2xl">{texts.highlighted}</Text>
      <Text variation="p" className="max-w-2xl">{texts.paragraph}</Text>
      <Text variation="quote" className="max-w-2xl">{texts.quote}</Text>
    </div>
  );
}

export default Home;
