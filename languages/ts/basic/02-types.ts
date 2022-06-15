/*
  TS Types:
  ---------
    (01) Number Type
    (02) String Type
    (03) Boolean Type
    (04) Object Type
    (05) Array Type
    (06) Any Type
    (07) Tuple Type
    (08) Enum Type
    (09) Never Type
    (10) Union Type
    (11) Dynamic Type
  */


////////////////////
// (07) Tuple Type
////////////////////
type color = [number, number, number];
let rgb: color;
const colors: color[] = [];

const c1 = rgb = [10, 20, 66];
const c2 = rgb = [20, 20, 66];
const c3 = rgb = [30, 20, 66];
colors.push(c1, c2, c3);


////////////////////
// (08) Enum Type
////////////////////
enum COLOR {
  RED,
  GREEN,
  BLUE
};

const getRGB = (color: COLOR) => {
  switch(color) {
    case COLOR.RED:
      rgb = [255, 0, 0];
      return rgb;
    
    case COLOR.GREEN:
      rgb = [0, 255, 0];
      return rgb;
    
    case COLOR.BLUE:
      rgb = [0, 0, 255];
      return rgb;
    
    default:
      rgb = [0, 0, 0];
      return rgb;
  }
}
console.log(getRGB(COLOR.GREEN));


////////////////////
// (09) Never Type
////////////////////
const raiseError = (message: string): never => {
  throw new Error(message);
}


////////////////////
// (10) Union Type
////////////////////
let mixed: (string | number | boolean)[] = [];
mixed.push(10);
mixed.push("string");
mixed.push(true);


////////////////////
// (11) Dynamic Type
////////////////////
let user1;
let user2: any;

user1 = {};
user1.name = "rahim";
user1.age = 27;

user1 = "rahim";
user1 = 27;
