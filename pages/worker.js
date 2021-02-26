onmessage = async function (e) {
  const rustModule = await import("../add.wasm");
  console.log(rustModule.add_one(10));
};
