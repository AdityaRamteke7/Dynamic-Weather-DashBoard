import React from 'react';

const Custom = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main } = weatherData;
  const theme = main.temp > 20 ? 'warm' : 'cool';

  return (
    <div className={`custom-feature ${theme}`}>
      {theme === 'warm' ? (
        <p>Enjoy the warm weather! Perfect for outdoor activities.</p>
      ) : (
        <p>Stay cozy with a warm drink. It's a bit chilly outside.</p>
      )}
    </div>
  );
};

export default Custom;
