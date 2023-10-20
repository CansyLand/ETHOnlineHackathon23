import { NextPage } from "next";
import { useAccount } from "wagmi";
import NftGallery from "~~/components/myComponents/nftGallery";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

//  Get NFT balanceOf this wallet address ✅
//  get `token IDs` for this account (tokenOfOwnerByIndex) ✅
//  display nfts ✅
//  call registry to get tokenbound account address by `token ID` ✅
//  use tokenbound address to mint RPG NFT ✅
//  //  check if minting address is tokenbound account ✅

//  Read and display RPG stats ✅

//  Items contract
//  Mint Booster Items
//  Place inside Wallet
//  Display wallet content 🤏 if address owns more than 0 disolay table

// sustinable rewards system
// decentralize arenas

//  items table mint
//  Display NFTs items
//  Select 6 items
//  Send NFT to arena
//  play

//  Get rewards
//  burn RPG NFT
//  Move Character NFT as Tonkenbound account to parent account
//  try to transfer this RPG NFT -> Display conrtacts message

const Home: NextPage = () => {
  const { isConnected, address } = useAccount();
  console.log("Is connected:", isConnected);

  const { data: tokenBalance } = useScaffoldContractRead({
    contractName: "GenericNFT",
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <>
      <NftGallery tokenBalance={tokenBalance} address={address} />
    </>
  );
};
export default Home;
