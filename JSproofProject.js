const NFTs=[];

// create a variable to hold your NFT's

function mintNFT (Name, Age,Gender, Nationality, Bling) {
    const NFT={
        "name":Name,
        "age":Age,
        "gender":Gender,
        "nationality":Nationality,
        "bling":Bling,
    }
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
function listNFTs () {
    for(let i=0; i<NFTs.length;i++){
        console.log("\nID: \t\t" +(i+1))
        console.log("Name: \t\t" +NFTs[i].name)
        console.log("Age: \t\t" +NFTs[i].age)
        console.log("Gender:\t\t" +NFTs[i].gender)
        console.log("Nationality:" +NFTs[i].nationality)
        console.log("Bling: \t\t" +NFTs[i].bling)
        
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length)
}

// call your functions below this line
mintNFT("Harsh","20","Male","Indian","Titan Watch");
mintNFT("Akash","22","Male","Indian","Silver Chain");
mintNFT("Sahil","21","Male","Indian","Goggles");
mintNFT("Ishan","20","Male","Indian","Air Jordans");
mintNFT("Sanjusha","19","Female","Indian","Golden Ring");
mintNFT("Risha","19","Female","Indian","Diamond bracellet");


listNFTs();
getTotalSupply()
