interface HeroProps {
  title: string;
  breadcrumb?: string;
  backgroundImage: string;
  height?: 'small' | 'medium' | 'large';
  overlayOpacity?: number;
}

export default function Hero({ 
  title, 
  breadcrumb, 
  backgroundImage, 
  height = 'large',
  overlayOpacity = 0.5 
}: HeroProps) {
  const heightClasses = {
    small: 'py-16',
    medium: 'py-24',
    large: 'py-32'
  };

  return (
    <section
      className={`relative bg-cover bg-center ${heightClasses[height]}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url('${backgroundImage}')`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {breadcrumb && (
          <p className="text-white text-lg">
            {breadcrumb}
          </p>
        )}
      </div>
    </section>
  );
}
