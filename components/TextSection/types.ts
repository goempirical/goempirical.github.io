export interface ITextSectionProps {
  className?: string;
  items: {
    highlight: string;
    title: string;
    content: string;
  }[];
  title: string;
}
