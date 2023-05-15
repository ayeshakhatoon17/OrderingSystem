import readline from "readline-sync";
import color from "cli-color";

function main(){
//colors declaration, writing xterm code of colors to variables 
const red = color.xterm(10);
const blue = color.xterm(153)
const white = color.xterm(15);
const yellow = color.xterm(227).bgXterm(235); //bgXterm - background color , xterm - font color
const orange = color.xterm(208).bgXterm(235);


console.clear()

let menu = ["Biryani- 320 \nButterChicken -180\nChicken65-150"]
let gst = 0.19
let costOfBiryani =320
let costOfChicken65 = 180
let costOfButterchicken = 150



console.log(yellow("WELCOME!!"))//printing WELCOME!! in yellow color
console.log("-----------------")
console.log(blue("Here is our Menu"))
console.log("-----------------")

for(let i=0; i<=menu.length-1;i++){
    console.log(menu[i])
}

let dish1 = readline.question(orange("what you would like to order: "))
console.log("------------------")

 if(dish1 == "Biryani"){
console.log(yellow(" Bill"))
console.log(dish1,costOfBiryani)
console.log(`GST ${gst}`)
console.log("Total: ", costOfBiryani+costOfBiryani *gst)
}
else if(dish1 == "Butterchicken") {
    console.log(dish1,costOfButterchicken)
    console.log(`GST ${gst}`)
    console.log("Total: ", costOfButterchicken+costOfButterchicken*gst)
}
else if(dish1 == "Chicken65") {
    console.log(dish1,costOfChicken65)
    console.log(`GST ${gst}`)
    console.log("Tota:  ", costOfChicken65+costOfChicken65*gst)
}
else{
console.log("--------------------")
console.log(red("we don't have that item presently sorry"))

}
}

main()