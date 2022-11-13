// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SampleCode {

    uint v2;

    function set(uint v_) public {
        v2 = v_;
    }

    function get() public view returns (uint){
        return v2;
    }
}
