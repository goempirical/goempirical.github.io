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
    className: 'relative before:absolute before:w-full before:h-2/6 before:bottom-1/6 before:left-0 before:bg-primary z-0 before:-z-10',
  },
};

export function getParsedChildren({
  children, config = defaultGetParsedChildrenConfig,
}: IGetParsedChildrenProps) {
  if (typeof children === 'string') {
    const textParts = children.split(/(\*.*?\*)/g);
    const newChildren = textParts.map((textPart) => {
      if (textPart.match(/((\*)(.*?)(\*))/g)) {
        return <strong key={textPart} className={config?.strong.className}>{textPart.replace(/\*/g, '')}</strong>;
      }

      return textPart;
    });

    return newChildren;
  }

  return children;
}
