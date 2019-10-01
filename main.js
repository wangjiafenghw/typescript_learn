var Name;
(function (Name) {
    Name[Name["Wang"] = 1] = "Wang";
    Name[Name["Li"] = 2] = "Li";
})(Name || (Name = {}));
var my_name = Name.Wang;
var my_name_code = Name[1];
console.log(my_name, my_name_code);
