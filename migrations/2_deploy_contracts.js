var TodoList = artifacts.require('./todolist.sol');

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
