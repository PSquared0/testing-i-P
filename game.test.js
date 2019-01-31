const game = require("./game.js");

const item = {
  name: "Needle",
  type: "weapon",
  durabilty: 70,
  enhancements: 'PEN'
};

const newItem = game.success(item);

describe("Success", () => {

  test("item type ", () => {
    expect(newItem.type).toBe( 'weapon');
  });

  test("item durability ", () => {
    expect(newItem.durabilty).toBeLessThanOrEqual(100);
  });

  test("item enhancement", () => {
    expect(newItem.durabilty).toBeLessThanOrEqual('PEN');
  });


});

describe("Fail", () => {

});

describe("Repair", () => {
  test("repair item ", () => {
    expect(item.durabilty).toBe(100);
  });
});
