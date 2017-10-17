var parser = require('./index');

// xml to json
var xml = "<root version=\"1.2\"><inventory serial=\"1234342\">My Inventory</inventory><tet id=\"1\"><otro attraa=\"23423\"><ll>1</ll><la>134</la></otro></tet><tet id=\"2\">23234</tet></root>";
console.log("input -> %s", xml)

var json = parser.toJson(xml);
console.log("to json -> %s", json);

var xml1 = parser.toXml(json);
console.log("back to xml -> %s", xml1)

console.log(xml == xml1)
