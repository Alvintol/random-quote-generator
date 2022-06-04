export const changeColors = () => {
  const colors = [
    '#16a085',
    '#27ae60',
    '#3d85c6',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#b83475',
    '#cf5e00',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  return colors[Math.floor(Math.random() * 12)]
};
