var position = 2;
var title = "Custome plugin row";
var callback = function(changeNo) {
  var widget = document.createElement("button");
  widget.innerHTML = "click me!";
  widget.onclick = function() {
	  alert("Welcome in change: " + changeNo);
  };
  return widget;
}

gerrit.onChangeScreen.insertRowToChangeInfoTable(position, title, callback);