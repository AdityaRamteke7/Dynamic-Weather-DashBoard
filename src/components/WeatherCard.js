import React from 'react';

const WeatherCard = ({ weatherData, userGroup }) => {
  const { main, weather, name } = weatherData;
  const temperature = main.temp;
  const condition = weather[0].description;

  const renderUserGroupInfo = () => {
    switch (userGroup) {
      case 'eventPlanner':
        return <p>Ideal conditions for outdoor events.</p>;
      case 'farmer':
        return <p>Soil moisture is good for crops.</p>;
      case 'traveler':
      default:
        return <p>Great weather for exploring the city!</p>;
    }
  };

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
      {renderUserGroupInfo()}
    </div>
  );
};

export default WeatherCard;
