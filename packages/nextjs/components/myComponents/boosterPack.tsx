import React from "react";
import ItemBooster from "./ItemBooster";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

type BoosterPackProps = {
  TBAaddress: string | undefined;
  sendDataToParent: (value: boolean) => void;
};

const BoosterPack: React.FC<BoosterPackProps> = ({ TBAaddress, sendDataToParent }) => {
  // Does Tokenbound account hold items?
  const { data: itemBalance } = useScaffoldContractRead({
    contractName: "ItemsNFT",
    functionName: "balanceOf",
    args: [TBAaddress],
  });

  // Mint Booster Back
  const { writeAsync: mintBoosterPackOnChain } = useScaffoldContractWrite({
    contractName: "ItemsNFT",
    functionName: "mintSix",
    args: [TBAaddress],
  });

  function mintBoosterPack() {
    mintBoosterPackOnChain();
  }

  if (Number(itemBalance) > 0) {
    sendDataToParent(true);
  } else {
    sendDataToParent(false);
  }

  return Number(itemBalance) > 0 ? (
    <div className="container mx-auto  py-2 lg:px-12 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {itemBalance && TBAaddress
          ? Array.from({ length: Number(itemBalance) }, (_, index) => (
              <div key={index} className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <ItemBooster tokenIndex={BigInt(index)} TBAaddress={TBAaddress} />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  ) : (
    <button className="btn btn-accent" onClick={mintBoosterPack}>
      Buy Booster Pack
    </button>
  );
};

export default BoosterPack;
