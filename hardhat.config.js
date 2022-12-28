require('@nomicfoundation/hardhat-toolbox')

require('hardhat-contract-sizer')
require('hardhat-abi-exporter')
require('hardhat-gas-reporter')
require('solidity-coverage')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17'
}
