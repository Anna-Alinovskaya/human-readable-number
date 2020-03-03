module.exports = function toReadable (number) {
    
let str = number.toString();
let arr = str.split('');

let arrOfNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90];
let name = ['zero', 'one' , 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
             'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

return arr.length <=2 ? twoNumReadable() : threeNumRedable();

function twoNumReadable(){
    
    let index = arrOfNum.indexOf(number);

    if(arr.length === 1) return name[index];
    if(arr.length > 1){
        if(arr[1] == 0 || arr[0] == 1) return name[index];
        
    else {
        let item1 = parseInt(arr[0] + '0');
        let itemIndex = (arrOfNum.indexOf(item1));

        let item2 = parseInt(arr[1]);
        let item2Index = (arrOfNum.indexOf(item2));

        return `${name[itemIndex]} ${name[item2Index]}`;
        }
    }
}

function threeNumRedable(){
    
    let everyHundred = parseInt(arr[0]);
    
    let everyTen = parseInt(arr[1] + arr[2]);
    let everyTenIndex = arrOfNum.indexOf(everyTen);
    
    let everyOneIndex = arrOfNum.indexOf(parseInt(arr[2]));
    
    let everyMiddleIndex = arrOfNum.indexOf(parseInt(arr[1] + '0'));
    
    return (arr[1] == 0 && arr[2] == 0) ? `${name[everyHundred]} hundred` :
                (arr[1] !== 0 && arr[2] == 0) ? `${name[everyHundred]} hundred ${name[everyTenIndex]}` :
                    (arr[1] == 0 && arr[2] !== 0) ? `${name[everyHundred]} hundred ${name[everyOneIndex]}` :
                        (arr[1] > 1 && arr[2] !== 0) ? `${name[everyHundred]} hundred ${name[everyMiddleIndex]} ${name[everyOneIndex]}` :
                        (arr[1] == 1) ? `${name[everyHundred]} hundred ${name[everyTenIndex]}` : true;
    } 
}

//5 00 
//5 50
//5 03
//5 51
//5 15 -  middle
