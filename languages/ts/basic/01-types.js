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
  */
var rgb;
var colors = [];
var c1 = rgb = [10, 20, 66];
var c2 = rgb = [20, 20, 66];
var c3 = rgb = [30, 20, 66];
colors.push(c1, c2, c3);
// (08) Enum Type
var COLOR;
(function (COLOR) {
    COLOR[COLOR["RED"] = 0] = "RED";
    COLOR[COLOR["GREEN"] = 1] = "GREEN";
    COLOR[COLOR["BLUE"] = 2] = "BLUE";
})(COLOR || (COLOR = {}));
;
var getRGB = function (color) {
    switch (color) {
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
};
console.log(getRGB(COLOR.GREEN));
// (09) Never Type
