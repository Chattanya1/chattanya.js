/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create an array to hold your NFT's
const arr=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name ,skinColor,shirt_type,age,bling) {
    const obj_nft = {
        "Name" :name,
        "Skin_Color":skinColor,
        "Shirt_type":shirt_type,
        "Age":age,
        "Bling":bling,
    }
    arr.push(obj_nft);
    console.log("Name : "+name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i=0;i<arr.length;i++){
        console.log("\nNFt ID :"+(i+1));
        console.log("Name-> "+arr[i].Name);
        console.log("Skin_Color-> "+arr[i].Skin_Color);
        console.log("Shirt_type-> "+arr[i].Shirt_type);
        console.log("Age-> "+arr[i].Age);
        console.log("Bling->"+arr[i].Bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return arr.length;
}

// call your functions below this line
mintNFT("Hari","Golden","Stripped","45","Gold chain");
mintNFT("Jaggi","Sand","Printed","14","Silver ring");
mintNFT("Raman","Fair","Linen","22","Diamond ring");
mintNFT("Aynab", "Beige", "Hoddy", "26", "Platinum chain");
listNFTs();
console.log("\nNumber of NFTs created is: "+getTotalSupply())
