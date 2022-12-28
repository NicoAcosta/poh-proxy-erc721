const hre = require('hardhat')

async function main() {
	const DummyPoH = await ethers.getContractFactory('DummyPoH')
	const proofOfHumanity = await DummyPoH.deploy()
	await proofOfHumanity.deployed()

	const ProofOfHumanityProxy = await hre.ethers.getContractFactory(
		'ProofOfHumanityProxy'
	)
	const proxy = await ProofOfHumanityProxy.deploy(
		await proofOfHumanity.getAdress()
	)

	await proxy.deployed()

	console.log(`ProofOfHumanityProxy deployed to ${proxy.address}`)
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
