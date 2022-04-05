export interface IImageLoaderProps {
  src: string;
}

export function imageLoader({ src }: IImageLoaderProps) {
  return `/assets/${src}`;
}

module.exports = imageLoader;
