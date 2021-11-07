onmessage = async function (e) {
  const rustModule = await require("../add.wasm");
  console.log(rustModule.add_one(10));
};
