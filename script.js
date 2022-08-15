let revealButton = document.getElementById("reveal-button");

let brandLogo = document.getElementById("placeholder-logo");
let label = document.getElementById("label");
let placeholder = document.getElementById("placeholder-logo");

let mtnLogo = document.getElementById("MTN");
let airtelLogo = document.getElementById("AIRTEL");
let nineMobileLogo = document.getElementById("NINEMOBILE");
let gloLogo = document.getElementById("GLO");
let brandLogos = document.querySelectorAll(".carrier-logo");

for (const scanThrough of brandLogos) {
  scanThrough.classList.add("hide-logo");
}

// if(phoneNumber == ""){
//     label.innerHTML = "Enter phone number"
//     label.style.color = "#9DB7F8"
// }

revealButton.addEventListener("click", () => {
  let phoneNumber = document.getElementById("phone-number").value;
  let phoneStarts = "";

  // check if the number has country code but with no zero
  if (phoneNumber.substring(0, 4) === "2340") {
    phoneStarts = phoneNumber.substring(0, 7);
  } else if (phoneNumber.substring(0, 3) === "234") {
    phoneStarts = `${phoneNumber.substring(0, 3)}0${phoneNumber.substring(3,6)}`;
    // check if the number doesn't have country code
  } else {
    phoneStarts = `234${phoneNumber.substring(0, 4)}`;
  }

  // let phoneStarts = `+234 + $phoneNumber.substring(0,4)`

  // let pattern = /((\+234?)|0)?[ -]?(?<network>\d{4})[ -]?(\d{3})[ -]?(\d{4})/;

  const mtnNumbers = /2340803|2340806|2340703|2340706|2340810|2340813|2340814|2340816|2340903|2340906|2340916/;
  const gloNumbers = /2340805|2340807|2340811|2340705|2340815|2340905/;
  const airtelNumbers = /2340802|2340808|2340812|2340701|2340708|2340902|2340907|2340901/;
  const nineMobibleNumbers = /2340809|2340817|2340818|2340908|2340909/;

  // const found = phoneStarts.match(mtnNumbers);

  // console.log(found);
  if(phoneNumber.toString().length < 11){
      for (const scanThrough of brandLogos){
          scanThrough.classList.add('hide-logo')
      }
      label.innerHTML = "Invalid number, try again"
      label.style.color = "#F23C3C"
      placeholder.classList.remove('hide-logo')
  }

  else if(phoneStarts.match(mtnNumbers) && !(phoneNumber.toString().length < 11)){
      // console.log("I am an mtn number")
      placeholder.classList.add('hide-logo')
      for (const scanThrough of brandLogos){
          scanThrough.classList.add('hide-logo')
      }
      label.innerHTML = "Success! carrier identified"
      label.style.color = "#5D87F4"
      mtnLogo.classList.remove('hide-logo')
  }
  else if(phoneStarts.match(gloNumbers) && !(phoneNumber.toString().length < 11)){
      placeholder.classList.add('hide-logo')
      for (const scanThrough of brandLogos){
          scanThrough.classList.add('hide-logo')
      }
      label.innerHTML = "Success! carrier identified"
      label.style.color = "#5D87F4"
      gloLogo.classList.remove('hide-logo')
  }
  else if(phoneStarts.match(airtelNumbers) && !(phoneNumber.toString().length < 11)){
      placeholder.classList.add('hide-logo')
      for (const scanThrough of brandLogos){
          scanThrough.classList.add('hide-logo')
      }
      label.innerHTML = "Success! carrier identified"
      label.style.color = "#5D87F4"
      airtelLogo.classList.remove('hide-logo')
  }
  else if(phoneStarts.match(nineMobibleNumbers) && !(phoneNumber.toString().length < 11)){
      placeholder.classList.add('hide-logo')
      for (const scanThrough of brandLogos){
          scanThrough.classList.add('hide-logo')
      }
      label.innerHTML = "Success! carrier identified"
      label.style.color = "#5D87F4"
      nineMobileLogo.classList.remove('hide-logo')
  }

//   if(mtnLogo.id == "MTN"){
//       console.log("I DEY WORK")
//   }

//   for(const objectScan in carrierPrefixes){

//       // let carrierName = carrierPrefixes[objectScan].includes(phoneNumber.substring(0, 4))
//       let carrierName = carrierPrefixes[objectScan]

//       // console.log(objectScan[0])
//       console.log(carrierPrefixes[objectScan])
//       // console.log(carrierName);
//       // if(carrierName.includes(phoneNumber.substring(0, 4))){
//       //     console.log(phoneNumber.substring(0, 4));
//       //     if(mtnLogo.id == "MTN" && objectScan == "MTN"){
//       //         console.log("HMMMMM")
//       //     }
//       // }

//       // if the fisrt 4 digits match a particular sample data in the object.. it should append a particular html tag
//       // step one: get user input
//       // step two: compare the first four digit in the input with the sample data in the object

//       // if(phoneNumber.substring(0, 4) === carrierName){
//       //     console.log("Hello")
//       // }else{
//       //     console.log("not working")
//       // }
//   }
});

let phoneNumber = document.getElementById("phone-number");

phoneNumber.addEventListener("blur", () => {
  label.innerHTML = "Enter phone number";
  label.style.color = "#9DB7F8";
  for (const scanThrough of brandLogos) {
    scanThrough.classList.add("hide-logo");
  }
  placeholder.classList.remove("hide-logo");
});

// function getFirstFourDigit(){
//     let phoneNumber = number.value;
//     console.log(phoneNumber.substring(0, 4))

// }

// getFirstFourDigit()

// const carrierPrefixes = {
//     MTN: [
//         "0803",
//         "0806",
//         "0703",
//         "0706",
//         "0810",
//         "0813",
//         "0814",
//         "0816",
//         "0903",
//         "0906",
//         "0916",
//     ],

//     GLO: [
//         "0805",
//         "0807",
//         "0811",
//         "0705",
//         "0815",
//         "0905"],

//     AIRTEL: [
//         "0802",
//         "0808",
//         "0812",
//         "0701",
//         "0708",
//         "0902",
//         "0907",
//         "0901"],

//     NINEMOBILE: [
//         "0809",
//         "0817",
//         "0818",
//         "0908",
//         "0909"],
//     };

// function get
// document.body.style.background = "red"
// revealButton.addEventListener(onclick)
