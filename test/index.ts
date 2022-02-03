import { expect } from "chai"
import { ethers } from "hardhat"

describe("NobleArt", function () {
  it("Should return the new address once contract is safely minted", async function () {
    const Contract = await ethers.getContractFactory("NobleArt")
    const contract = await Contract.deploy()

    await contract.deployed()

    const safeMint = await contract.safeMint(
      "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    )

    await safeMint.wait()

    expect(contract.address).to.equal(
      "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    )
  })
})
