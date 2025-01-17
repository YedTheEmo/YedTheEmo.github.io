export const getRandomColor = () => {
  const colors = ['#ff00ff', '#7f00ff', '#00ffff', '#ff6600'];
  return colors[Math.floor(Math.random() * colors.length)];
};

