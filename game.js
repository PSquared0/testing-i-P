const item = {
  name: "Needle",
  type: "weapon",
  durabilty: 70,
  enhancements: 'PEN'
};

module.exports = {
  success: (item) => {

  },

  fail: (item) => {},

repair: (item) => {

if (item.durabilty < 100){
  
  return item.durabilty = 100;
}

  }
};
