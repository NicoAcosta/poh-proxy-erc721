// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IProofOfHumanity {
    function isRegistered(address human) external view returns (bool);
}
