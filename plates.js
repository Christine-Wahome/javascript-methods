

const data = [
    "KAG 234P",
    "KAD 345I",
    "KAJ 324P",
    "KAR 563Y",
    "KAP 567K",
    "KAQ 233U",
    "KAT 111K",
    "KAO 678P",
    "KAS 576K",
    "KAW 498P",
    "KAX 567O",
    "KAZ 222I"
];

function findPlates() {
    let startPlate = document.getElementById("startPlate").value;
    let endPlate = document.getElementById("endPlate").value;
  
    let startIndex = data.indexOf(startPlate);
    let endIndex = data.indexOf(endPlate);
    let result = "";
  
    if (startIndex !== -1 && endIndex !== -1) {
        if (startIndex < endIndex) {
            result = data.slice(startIndex, endIndex + 1);
        } else {
            result = data.slice(endIndex, startIndex + 1);
        }
    } else {
        result = "Invalid Plate Number";
    }
  
    document.getElementById("result").innerHTML = result.length-2;
    console.log(result.length)
    alert(result.length-2)
}