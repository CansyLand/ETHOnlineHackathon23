// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract CharacterTables is ERC721Holder {
    // The table token ID, assigned upon `TablelandTables` minting a table
    uint256 private _tableId;
    // Table prefix for the table (custom value)
    string private constant _TABLE_PREFIX = "c"; // c = character

    // using single letter characters to save on gas
    

    // stats table
    // level
    // xp coins (ApeCoin)
    //  winn - loss counter


    // win loss table
    // who played
    // when ? block number
    // calculate total of difficulty over the 255 blocks
    // block 345665 - 255 -> select all plays
    // retunr portion of xp to player


    /*  Item ideas
    *
    *   overlays -> shiny, glitter, hollogram
    *   ability -> kick, fiffe apes punch
    *   usables -> potion, bandage,
    *   wearables -> old helmet, sword, nikes
    *   
    */

    modifier onlyThisContract() {
        require(msg.sender == address(this), "Caller is not this contract");
        _;
    }


    // constructor() {}

    function _create() public payable {
        /*  Under the hood, SQL helpers formulates:
        *
        *  CREATE TABLE {prefix}_{chainId} (
        *    id integer primary key,
        *    val text
        *  );
        *
        *   //  n = name ens? dcl-names?
        *       t = type BAYC, Pudgy, Waifu
        *   x = xp
        *       l = level
        *   s = strength
        *   e = endurance
        *
        */
        _tableId = TablelandDeployments.get().create(
            address(this), //msg.sender,
            SQLHelpers.toCreateFromSchema(
                string.concat(
                    "i int primary key,", // "id integer primary key," // Notice the trailing comma
                    "x int,",   // xp
                    "s int,",   // strength
                    "e int,",    // endurance
                    "w int,",    // wins
                    "l int"),   // losses
            _TABLE_PREFIX
            )
        );
    }

    function _initCharacter(uint256 tokenId) public payable {
        /*  Under the hood, SQL helpers formulates:
        *
        *  INSERT INTO {prefix}_{chainId}_{tableId} (id,val) VALUES(
        *    1
        *    'msg.sender'
        *  );
        */
        TablelandDeployments.get().mutate(
            address(this),
            _tableId,
            SQLHelpers.toInsert(
            _TABLE_PREFIX,
            _tableId,
            "i,x,s,e,w,l",
            string.concat(
                Strings.toString(tokenId), // Convert to a string
                ",0,3,3,0,0"
            )
            )
        );
    }

    function _updateCharacter(
        uint256 tokenId, 
        bool win,uint256 
        reward) public payable 
        {

        string memory wins;
        string memory losses;

        if (win) {
            wins = "w=w+1,";
            losses = "";
        } else {
            wins = "";
            losses = "l=l+1";
        }

        string memory setters = string.concat(
            "x=x+", Strings.toString(reward), ",",
            wins,
            losses
        );

        // Only update the row with the matching `id`
        string memory filters = string.concat(
            "i=",
            Strings.toString(tokenId)
        );

        /*  Under the hood, SQL helpers formulates:
        *
        *  UPDATE {prefix}_{chainId}_{tableId} SET val=<myVal> WHERE id=<id>
        */
        TablelandDeployments.get().mutate(
            address(this),
            _tableId,
            SQLHelpers.toUpdate(
            _TABLE_PREFIX,
            _tableId,
            setters,
            filters
            )
        );
    }

}