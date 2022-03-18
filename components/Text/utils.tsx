interface IGetParsedChildrenProps {
  children: string;
  config?: {
    strong: {
      className: string;
    }
  };
}

const defaultGetParsedChildrenConfig = {
  strong: {
    className: 'relative before:absolute before:w-full before:h-1/4 before:md:h-2/6 before:bottom-1.5 before:left-0 before:bg-primary z-0 before:-z-10',
  },
};

export function getParsedChildren({
  children, config = defaultGetParsedChildrenConfig,
}: IGetParsedChildrenProps) {
  if (typeof children === 'string') {
    const textParts = children.split(/(\*.*?\*)/g);
    const newChildren = textParts.map((textPart) => {
      if (textPart.match(/((\*)(.*?)(\*))/g)) {
        return <strong className={config?.strong.className}>{textPart.replace(/\*/g, '')}</strong>;
      }

      return textPart;
    });

    return newChildren;
  }

  return children;
}
