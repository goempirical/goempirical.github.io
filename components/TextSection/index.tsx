import Text from '@components/Text';
import clsx from 'clsx';
import { ITextSectionProps } from './types';

function TextSection({ className, items, title }: ITextSectionProps) {
  return (
    <section className={clsx('flex justify-center w-full py-20 px-4', className)}>
      <div className="flex flex-col lg:gap-30 gap-20 max-w-u1280 w-full md:pr-12 items-center">
        {title && (
          <div className="flex justify-center gap-16">
            <Text variation="h2" className="relative flex flex-col justify-center items-center before:mb-12 before:h-1 before:w-9 before:bg-white before:opacity-20 before:rounded-sm">{title}</Text>
          </div>
        )}
        {items.map((item) => (
          <div key={item.title} className="flex gap-10 lg:gap-20 flex-wrap justify-center w-full">
            <div className="flex flex-auto md:flex-1 justify-start md:justify-end w-full lg:w-auto">
              <Text variation="highlighted" className="md:text-right translate-y-1">{item.highlight}</Text>
            </div>
            <div className="flex flex-auto md:flex-1 flex-col gap-4 w-full">
              <Text variation="h3">{item.title}</Text>
              <Text variation="p">{item.content}</Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

TextSection.defaultProps = {
  className: '',
};

export default TextSection;
