module.exports.handler = () => {
  console.log(process.env.THIS_IS_A_TEST);

  return process.env.THIS_IS_A_TEST;
};
