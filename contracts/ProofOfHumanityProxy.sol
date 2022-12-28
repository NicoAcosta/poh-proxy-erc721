// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./IProofOfHumanity.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfHumanityProxy is Ownable {
    IProofOfHumanity public proofOfHumanity;

    constructor(address _proofOfHumanity) {
        proofOfHumanity = IProofOfHumanity(_proofOfHumanity);
    }

    function updateProofOfHumanity(
        address _proofOfHumanity
    ) external onlyOwner {
        proofOfHumanity = IProofOfHumanity(_proofOfHumanity);
    }

    function balanceOf(address human) external view returns (uint256) {
        // if registered returns 1
        // otherwise returns 0
        return proofOfHumanity.isRegistered(human) ? 1 : 0;
    }
}
