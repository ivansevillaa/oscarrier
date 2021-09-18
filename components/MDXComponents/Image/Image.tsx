import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height: number;
}

function Image({src, alt, width = 840, height}: Props): JSX.Element {
  return <NextImage src={src} alt={alt} width={width} height={height} />;
}

export default Image;
