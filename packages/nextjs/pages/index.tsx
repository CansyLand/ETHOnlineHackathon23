import { useCallback, useEffect } from "react";
import { Account } from "./components";
import { useEthersSigner } from "./hooks";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { TokenboundClient } from "@tokenbound/sdk";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";

// import contracts from '~~/generated/deployedContracts'

// import { hardhat } from 'viem/chains'
// const {} = useScaffoldContract({
//     contractName: 'ERC6551Registry'
// })

// const tokenContract = fakeApe.data?.address

// console.log("TOKENCONRACT:")
// console.log(tokenContract)

// const tokenContract = deployedContracts.FakeApeCoin.address
// const implementationAddress = deployedContracts.SimpleERC6551Account.address
// const registryAddress = deployedContracts.ERC6551Registry.address

const chainId = 31337;
const tokenId = "1";

// const sendingTBA = '0x047A2F5c8C97948675786e9a1A12EB172CF802a1'
const recipientAddress = "0x9FefE8a875E7a9b0574751E191a2AF205828dEA4";
const ethAmount = 0.05;
const ethAmountWei = parseUnits(`${ethAmount}`, 18);

const Home: NextPage = () => {
  const { isConnected, address } = useAccount();

  const registryAddress = useScaffoldContract({
    contractName: "ERC6551Registry",
  }).data?.address;

  if (registryAddress) {
    console.log("✅ registryAddress:", registryAddress);
  } else {
    console.log("❌ registryAddress");
  }

  const implementationAddress = useScaffoldContract({
    contractName: "SimpleERC6551Account",
  }).data?.address;

  if (implementationAddress) {
    console.log("✅ Implementation:", implementationAddress);
  } else {
    console.log("❌ Implementation");
  }

  const tokenContract = useScaffoldContract({
    contractName: "GenericNFT",
  }).data?.address;

  if (tokenContract) {
    console.log("✅ NFT:", tokenContract);
  } else {
    console.log("❌ NFT");
  }

  let tokenBoundAccount = "0x" as `0x${string}`;
  function updateNewAccount(newAccount: string) {
    tokenBoundAccount = newAccount as `0x${string}`;
  }

  function logContractAddresses() {
    console.log("✅ registryAddress:", registryAddress);
    console.log("✅ Implementation:", implementationAddress);
    console.log("✅ NFT:", tokenContract);
    console.log("✅ TBA:", tokenBoundAccount);
  }

  // 0xf18260aB921d05567661f30c12c82BDD3c9A6751
  // 0xf18260aB921d05567661f30c12c82BDD3c9A6751

  const signer = useEthersSigner({ chainId: chainId });
  // or useSigner() from legacy wagmi versions: const { data: signer } = useSigner()

  const tokenboundClient = new TokenboundClient({
    signer,
    chainId: chainId,
    implementationAddress: implementationAddress as `0x${string}`,
    registryAddress: registryAddress as `0x${string}`,
    publicClientRPCUrl: "http://localhost:8545",
  });

  //   tokenboundClient.getNFT()

  useEffect(() => {
    async function testTokenboundClass() {
      const account = await tokenboundClient.getAccount({
        tokenContract: tokenContract as `0x${string}`,
        tokenId: tokenId,
      });

      const preparedExecuteCall = await tokenboundClient.prepareExecuteCall({
        account: account,
        to: account,
        value: 0n,
        data: "",
      });

      const preparedAccount = await tokenboundClient.prepareCreateAccount({
        tokenContract: tokenContract as `0x${string}`,
        tokenId: tokenId,
      });

      logContractAddresses();
      console.log("getAccount", account);
      console.log("prepareExecuteCall", preparedExecuteCall);
      console.log("preparedAccount", preparedAccount);

      // if (signer) {
      // signer?.sendTransaction(preparedAccount)
      // signer?.sendTransaction(preparedExecuteCall)
      // }
    }

    testTokenboundClass();
  }, [tokenboundClient]);

  // Get Account
  const getAccount = useCallback(async () => {
    if (!tokenboundClient || !address) return;
    const createdAccount = await tokenboundClient.getAccount({
      tokenContract: tokenContract as `0x${string}`,
      tokenId: tokenId,
      implementationAddress: implementationAddress as `0x${string}`,
      registryAddress: registryAddress as `0x${string}`,
    });
    logContractAddresses();
    console.log(`get account: ${createdAccount}`);
    updateNewAccount(createdAccount);
  }, [tokenboundClient]);

  const getNFT = useCallback(async () => {
    if (!tokenboundClient || !address) return;
    const createdAccount = await tokenboundClient.getAccount({
      tokenContract: tokenContract as `0x${string}`,
      tokenId: tokenId,
      implementationAddress: implementationAddress as `0x${string}`,
      registryAddress: registryAddress as `0x${string}`,
    });

    logContractAddresses();
    console.log(`get NFT: ${createdAccount}`);
    const nft = await tokenboundClient.getNFT({
      accountAddress: createdAccount,
    });
    console.log(nft);
  }, [tokenboundClient]);

  const prepareCreateAccount = useCallback(async () => {
    if (!tokenboundClient || !address) return;
    const preparedAccount = await tokenboundClient.prepareCreateAccount({
      tokenContract: tokenContract as `0x${string}`,
      tokenId: tokenId,
      implementationAddress: implementationAddress as `0x${string}`,
      registryAddress: registryAddress as `0x${string}`,
    });

    logContractAddresses();
    console.log(`prepare account:`);
    console.log(preparedAccount);
  }, [tokenboundClient]);

  const createAccount = useCallback(async () => {
    if (!tokenboundClient || !address) return;
    logContractAddresses();
    const createdAccount = await tokenboundClient.createAccount({
      tokenContract: tokenContract as `0x${string}`,
      tokenId: tokenId,
      implementationAddress: implementationAddress as `0x${string}`,
      registryAddress: registryAddress as `0x${string}`,
    });
    alert(`new account: ${createdAccount}`);
  }, [tokenboundClient]);

  const executeCall = useCallback(async () => {
    if (!tokenboundClient || !address) return;
    logContractAddresses();
    const executedCall = await tokenboundClient.executeCall({
      account: tokenBoundAccount,
      to: recipientAddress,
      value: ethAmountWei,
      data: "0x",
    });
    executedCall && alert(`Sent ${ethAmount} ETH to ${recipientAddress}`);
  }, [tokenboundClient]);

  return (
    <>
      <h1>Ethers 5 Signer + RainbowKit + Vite</h1>
      <ConnectButton />

      {isConnected && <Account />}
      {address && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            margin: "32px 0 0",
            maxWidth: "320px",
          }}
        >
          <button onClick={() => getAccount()}>GET ACCOUNT</button>
          <button onClick={() => getNFT()}>GET NFT</button>
          <button onClick={() => executeCall()}>EXECUTE CALL</button>
          <button onClick={() => prepareCreateAccount()}>PREPARE ACCOUNT</button>
          <button onClick={() => createAccount()}>CREATE ACCOUNT</button>
        </div>
      )}

      <Address address={address} />
    </>
  );
};
export default Home;
