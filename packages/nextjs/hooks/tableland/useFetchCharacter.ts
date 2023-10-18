import { useEffect, useState } from "react";
import { useScaffoldContractRead } from "../scaffold-eth";
// import { useConditionalScaffoldContractRead } from "../myHooks";
import { Database } from "@tableland/sdk";

//  http://localhost:8080/api/v1/query?statement=select%20x%20i%20from%20c_31337_9

interface Character {
  i: number;
  x: number;
  s: number;
  e: number;
  w: number;
  l: number;
}

function useFetchCharacter(balance: bigint | undefined, tbaAddress: string | undefined) {
  const [character, setCharacter] = useState<Character | null>(null);

  // Get tokenId from Character token
  const { data: characterTokenId } = useScaffoldContractRead({
    contractName: "Character",
    functionName: "tokenOfOwnerByIndex",
    args: [tbaAddress, BigInt(0)],
  });

  // Get Tableland data (table ID is for whole Character contract)
  const { data: tableId } = useScaffoldContractRead({
    contractName: "Character",
    functionName: "tableId",
  });

  const tableName: string = "c_31337_" + tableId;
  console.log(tableName);

  useEffect(() => {
    async function fetchData() {
      if (balance != 1n || tableId == undefined) return; // Exit early because no Character NFT owned

      const db: Database<Character> = new Database();

      try {
        const characters = await db.prepare(`SELECT * FROM ${tableName} WHERE i = ${Number(characterTokenId)};`).all();
        setCharacter(characters.results[0]);
      } catch (error) {
        // Log error for debugging
        console.error(error);

        // Check if the error is a "Too Many Requests" error
        if (error instanceof Error) {
          if (error.message.includes("Too Many Requests")) {
            setTimeout(fetchData, 1000); // Retry after 1 second
          }
        }
      }
    }

    fetchData();
  }, [characterTokenId, balance]);

  return character;
}

export default useFetchCharacter;
