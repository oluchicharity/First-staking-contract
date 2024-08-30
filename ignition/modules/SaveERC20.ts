import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xf679615375667DE105473FF3c4dC8EA835712590";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x6EA7E9c1a068C7145BF086753B065f86e78DEE7B
