import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("YourContract", {
    from: deployer,
    // Contract constructor arguments
    args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  await deploy("FakeApeCoin", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const registry = await deploy("ERC6551Registry", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const account = await deploy("ERC6551Account", {
    from: deployer,
    log: true,
    autoMine: true,
  });
  console.log("ACCOUNT:");
  console.log(account.address);

  await deploy("Tableland", {
    from: deployer,
    // Contract constructor arguments
    // args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  const nft = await deploy("GenericNFT", {
    // from: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    // args: ["0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"],
    from: deployer,
    args: [deployer],
    log: true,
    autoMine: true,
  });

  await init(hre, {
    nft: nft,
    registry: registry,
    account: account,
  });
  // Get the deployed contract
  // const yourContract = await hre.ethers.getContract("YourContract", deployer);
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];

async function init(hre: HardhatRuntimeEnvironment, tx: any) {
  /**
   * 0. SUPER IMPORTANT STUFF
   */
  function randomFace() {
    const animalFaces = ["😺", "🐶", "🦁", "🐯", "🐻", "🐮", "🐵", "🐼", "🐷", "🐸", "🐨"];
    return animalFaces[Math.floor(Math.random() * animalFaces.length)];
  }

  /**
   * 1. MINT SOME NFTS
   */

  // Get the contract instance
  const GenericNFT = await hre.ethers.getContractFactory("GenericNFT");
  const nft = GenericNFT.attach(tx.nft.address);

  // Define the recipient and URI
  const recipient = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
  const uri = ""; // you can leave it empty as the contract generates URIs

  const txNFT = await nft.safeMint(recipient, uri);
  await txNFT.wait();
  console.log(`Minted NFT ${randomFace()} #${0} Contract Owner`);

  // Mint the NFTs to my wallet
  for (let i = 0; i < 5; i++) {
    // change 5 to the number of NFTs you want to mint
    const tx = await nft.safeMint(recipient, uri);
    await tx.wait();
    console.log(`Minted NFT ${randomFace()} #${i + 1}`);
  }

  /**
   * 2. MINT TOKENBOUND ACCOUNT
   */
  // Provided data
  const registryAddress = tx.registry.address;
  const implementationAddress = tx.account.address;
  const chainId = 31337;
  const tokenContractAddress = tx.nft.address;
  const tokenId = 1; // Creator owns 0, I own 1 - 5
  const salt = 0;
  const initData = "0x"; // replace with your initialization data if any

  // Get signer (account) to interact with the contract
  const [signer] = await hre.ethers.getSigners();
  console.log("Using account:", signer.address);

  // Get the contract instance
  const ERC6551Registry = await hre.ethers.getContractFactory("ERC6551Registry");
  const registry = ERC6551Registry.attach(registryAddress);

  // Create token-bound account
  const txTokenBound = await registry
    .connect(signer)
    .createAccount(implementationAddress, chainId, tokenContractAddress, tokenId, salt, initData);
  const receipt = await txTokenBound.wait();

  // Log the created account address from the emitted event
  const event = receipt.events.find((e: any) => e.event === "AccountCreated");
  if (event) {
    console.log("Token-bound account created at:", event.address);
  } else {
    console.error("Failed to create token-bound account");
  }
}

//  Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
//  Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

//  Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
//  Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

//  🍕
//  Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
//  Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

//  Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000 ETH)
//  Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

//  Account #4: 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 (10000 ETH)
//  Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19
