function updatePopup() {
  chrome.storage.sync.get(["dataValue1"], function (data) {
    document.getElementById("Text").innerText = data.dataValue1;
    function copy() {
      navigator.clipboard.writeText(document.getElementById("Text").innerText);
    }
    function resize(){
      var width=500;
      var height=400;
      self.resizeTo(width,height);
      document.getElementById("resize").style.display = "none";
    }
    function edit(){
      var ele = document.getElementById("Text");
      ele.contentEditable='true';
      ele.focus();
    }
    document.getElementById("edit").addEventListener('click',edit);
    document.getElementById("copy").addEventListener('click',copy);
    document.getElementById("resize").addEventListener('click',resize);
    
  });
}
document.addEventListener("DOMContentLoaded", updatePopup);

