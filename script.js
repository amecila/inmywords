var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            changeText(node);
        }
    }
}

function changeText(textNode){
  var text = textnode.nodeValue;
  
  text = text.replace(/\brabbit\b/g, "bunnnnnyyyy");
  text = text.replace(/\brabbits\b/g, "bunnnnieeessssss");

  textNode.nodeValue = v;
  
}