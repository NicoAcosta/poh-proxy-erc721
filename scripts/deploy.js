const hre = require('hardhat')
const proofOfHumanity = process.env.POH_MAINNET

async function main() {
	const ProofOfHumanityProxy = await hre.ethers.getContractFactory(
		'ProofOfHumanityProxy'
	)
	const proxy = await ProofOfHumanityProxy.deploy(proofOfHumanity)

	await proxy.deployed()

	console.log(`ProofOfHumanityProxy deployed to ${proxy.address}`)
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
