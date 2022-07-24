let revealButton = document.getElementById("reveal-button");
let number = document.getElementById('phone-number')
let brandLogo = document.getElementById('placeholder-logo')
let label = document.getElementById('label') 

const mtnLogo = document.getElementById('MTN') 
const airtelLogo = document.getElementById('AIRTEL') 
const nineMobileLogo = document.getElementById('NINEMOBILE') 
const gloLogo = document.getElementById('GLO') 

revealButton.addEventListener("click", () =>  {
    let phoneNumber = number.value;

    // if(mtnLogo.id == "MTN"){
    //     console.log("I DEY WORK")
    // }

    for(const objectScan in carrierPrefixes){
        
        
        // let carrierName = carrierPrefixes[objectScan].includes(phoneNumber.substring(0, 4))
        let carrierName = carrierPrefixes[objectScan]

        // console.log(carrierName);
        if(carrierName.includes(phoneNumber.substring(0, 4))){
            console.log(phoneNumber.substring(0, 4));
            if(mtnLogo.id == "MTN" && objectScan == "MTN"){
                console.log("HMMMMM")
            }
        }


        // if(phoneNumber.substring(0, 4) === carrierName){
        //     console.log("Hello")
        // }else{
        //     console.log("not working")
        // }
    }

})

// function getFirstFourDigit(){
//     let phoneNumber = number.value;
//     console.log(phoneNumber.substring(0, 4))
    
// }

// getFirstFourDigit()

const carrierPrefixes = {
    MTN: [
        "0803",
        "0806",
        "0703",
        "0706",
        "0810",
        "0813",
        "0814",
        "0816",
        "0903",
        "0906",
        "0916",
    ],

    GLO: [
        "0805",
        "0807",
        "0811",
        "0705",
        "0815",
        "0905"],

    AIRTEL: [
        "0802",
        "0808",
        "0812",
        "0701",
        "0708",
        "0902",
        "0907",
        "0901"],

    NINEMOBILE: [
        "0809",
        "0817",
        "0818",
        "0908",
        "0909"],
    };

// function get 
// document.body.style.background = "red"
// revealButton.addEventListener(onclick)