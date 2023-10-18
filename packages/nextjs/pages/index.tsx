// import { useCallback, useEffect } from "react";
import { Account } from "./components";
// import { useEthersSigner } from "./hooks";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { TokenboundClient } from "@tokenbound/sdk";
import { NextPage } from "next";
// import { parseUnits } from "viem";
import { useAccount } from "wagmi";
import NftGallery from "~~/components/myComponents/nftGallery";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContract, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

//  Get NFT balanceOf this wallet address ✅
//  get `token IDs` for this account (tokenOfOwnerByIndex) ✅
//  display nfts ✅
//  call registry to get tokenbound account address by `token ID` ✅
//  use tokenbound address to mint RPG NFT ✅
//  //  check if minting address is tokenbound account ✅
//  Move Character NFT as Tonkenbound account to parent account
//  try to transfer this RPG NFT -> Display conrtacts message

//  Read and display RPG stats

//  Display NFTs items
//  Select 6 items
//  Send NFT to arena
//  play
//  Get rewards
//  burn RPG NFT

//  buy booster erc 1155
//  move, equipment, potion

// const chainId = 31337;
// const tokenId = "1";

// const sendingTBA = '0x047A2F5c8C97948675786e9a1A12EB172CF802a1'
// const recipientAddress = "0x9FefE8a875E7a9b0574751E191a2AF205828dEA4";
// const ethAmount = 0.05;
// const ethAmountWei = parseUnits(`${ethAmount}`, 18);

const Home: NextPage = () => {
  const { isConnected, address } = useAccount();

  const { data: tokenBalance } = useScaffoldContractRead({
    contractName: "GenericNFT",
    functionName: "balanceOf",
    args: [address],
  });

  const registryAddress = useScaffoldContract({
    contractName: "ERC6551Registry",
  }).data?.address;

  if (registryAddress) {
    console.log("✅ registryAddress:", registryAddress);
  } else {
    console.log("❌ registryAddress");
  }

  const implementationAddress = useScaffoldContract({
    contractName: "Account",
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

  // let tokenBoundAccount = "0x" as `0x${string}`;
  // function updateNewAccount(newAccount: string) {
  //   tokenBoundAccount = newAccount as `0x${string}`;
  // }

  // function logContractAddresses() {
  //   console.log("✅ registryAddress:", registryAddress);
  //   console.log("✅ Implementation:", implementationAddress);
  //   console.log("✅ NFT:", tokenContract);
  //   console.log("✅ TBA:", tokenBoundAccount);
  // }

  // const signer = useEthersSigner({ chainId: chainId });
  // or useSigner() from legacy wagmi versions: const { data: signer } = useSigner()

  // const tokenboundClient = new TokenboundClient({
  //   signer,
  //   chainId: chainId,
  //   implementationAddress: implementationAddress as `0x${string}`,
  //   registryAddress: registryAddress as `0x${string}`,
  //   publicClientRPCUrl: "http://localhost:8545",
  // });

  const { isMining, writeAsync } = useScaffoldContractWrite({
    contractName: "GenericNFT",
    functionName: "notSoSafeMint",
    args: [address],
  });

  function mintNFT() {
    writeAsync();
  }

  return (
    <>
      {isMining ? (
        <button className="btn btn-active btn-warning m-4" onClick={mintNFT}>
          <span className="loading loading-spinner loading-xs"></span>
        </button>
      ) : (
        <button className="btn btn-active btn-warning m-4" onClick={mintNFT}>
          Mint PFP
        </button>
      )}

      <h1>Choose your character {tokenBalance?.toString()}</h1>
      <NftGallery tokenBalance={tokenBalance} address={address} />

      <ConnectButton />

      {isConnected && <Account />}

      <Address address={address} />
    </>
  );
};
export default Home;
