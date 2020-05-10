async function main() {
    const Contract = await ethers.getContractFactory("Greeter");
    const contract = await Contract.deploy("Hello world");

    await contract.deployed();

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
