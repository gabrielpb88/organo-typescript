import './Banner.css';

interface BannerProps {
  imgSrc: string;
  alternativeText?: string;
}

const Banner = ({ imgSrc, alternativeText }: BannerProps) => {
  // JSX
  return (
    <header className="banner">
      <img src={imgSrc} alt={alternativeText} />
    </header>
  );
};

export default Banner;
