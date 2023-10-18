import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const MintNftCard = () => {
  const { address } = useAccount();

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "GenericNFT",
    functionName: "notSoSafeMint",
    args: [address],
  });

  function mintNFT() {
    writeAsync();
  }

  return (
    <div
      className="card bg-accent bg-cover bg-center shadow-xl flex flex-col justify-center items-center p-8"
      style={{ backgroundImage: "url('nfts/4.png')", aspectRatio: "1/1.6" }}
    >
      <button className="btn btn-accent shadow-xl w-full" onClick={mintNFT}>
        Mint Dinosaur
      </button>
    </div>
  );
};

export default MintNftCard;
