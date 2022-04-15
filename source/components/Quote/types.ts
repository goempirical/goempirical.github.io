export interface IQuoteProps {
  className?: string;
  quote: string;
  author: {
    name: string;
    company: string;
    link?: string;
  }
}
