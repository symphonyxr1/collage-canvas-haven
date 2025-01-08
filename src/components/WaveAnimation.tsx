const WaveAnimation = () => {
  return (
    <div className="text-center mb-8">
      <div className="center_div">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div className="wave" key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
          ))}
      </div>
    </div>
  );
};

export default WaveAnimation;