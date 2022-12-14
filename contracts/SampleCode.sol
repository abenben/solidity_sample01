// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SampleCode {

    uint v3;

    function set(uint v_) public {
        v3 = v_;
    }

    function get() public view returns (uint){
        return v3;
    }
}
