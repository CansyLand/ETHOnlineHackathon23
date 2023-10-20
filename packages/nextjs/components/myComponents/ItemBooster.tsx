import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const ItemBooster = ({ tokenIndex, TBAaddress }: { tokenIndex: bigint; TBAaddress: string }) => {
  const { data: tokenId } = useScaffoldContractRead({
    contractName: "ItemsNFT",
    functionName: "tokenOfOwnerByIndex",
    args: [TBAaddress, tokenIndex],
  });

  const { data: uri } = useScaffoldContractRead({
    contractName: "ItemsNFT",
    functionName: "tokenURI",
    args: [tokenId],
  });

  return (
    <div className="avatar">
      <div className=" rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={uri} />
      </div>
    </div>
  );
};

export default ItemBooster;
