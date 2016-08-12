function go() {
  console.log("===");
  var obj = $("#jsonObj").val();
  if (obj.trim().length == 0) {
    console.error("Need input the string....");
    return false;
  }
  obj = JSON.parse(obj);
  var res = "";
  var resKey = "";
  for (var key in obj) {
    var con = obj[key];
    res += con;
    res += "\n";

    resKey += key;
    resKey += "\n";
  }
  $("#jsonObjOutKey").val(resKey);
  $("#jsonObjOutValue").val(res);
}
$("#button").bind("click",function() {
  go();
});
