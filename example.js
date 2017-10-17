var parser = require('./index');

// xml to json
var xml = "<root version=\"1.2\"><inventory serial=\"1234342\">My Inventory</inventory><tet id=\"1\">234</tet><tet id=\"2\">23234</tet></root>";
console.log("input -> %s", xml)

var optt = {
    alternateTextNode: "myValue"
}

var json = parser.toJson(xml, optt);
console.log("to json -> %s", json);

var xml = parser.toXml(json, optt);
console.log("back to xml -> %s", xml)
