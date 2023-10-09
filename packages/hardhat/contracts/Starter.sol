// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
// Needed if the contract must own the table
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract Starter is ERC721Holder {
  // The table token ID, assigned upon `TablelandTables` minting a table
  uint256 private _tableId;




  // Table prefix for the table (custom value)
  string private constant _TABLE_PREFIX = "my_smart_contract_table";


function create() public payable {
    /*  Under the hood, SQL helpers formulates:
  *
  *  CREATE TABLE {prefix}_{chainId} (
  *    id integer primary key,
  *    val text
  *  );
  */
    _tableId = TablelandDeployments.get().create(
      address(this),
      SQLHelpers.toCreateFromSchema(
        "id integer primary key," // Notice the trailing comma
        "val text",
        _TABLE_PREFIX
      )
    );
  }



// Insert data into a table
function insert() public payable {
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
      "id,val",
      string.concat(
        Strings.toString(1), // Convert to a string
        ",",
        SQLHelpers.quote("MyMessage") // Wrap strings in single quotes
        //SQLHelpers.quote(Strings.toHexString(msg.sender)) // Wrap strings in single quotes
      )
    )
  );
}

//http://localhost:8080/api/v1/query?statement=select%20val%20from%20my_smart_contract_table_31337_3

// Update data in the table
function update(uint256 myId, string memory myVal) public payable {
  // Set values to update, like the "val" column to the function input param
  string memory setters = string.concat(
    "val=",
    SQLHelpers.quote(myVal) // Wrap strings in single quotes
  );
  // Only update the row with the matching `id`
  string memory filters = string.concat(
    "id=",
    Strings.toString(myId)
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



