document.addEventListener("DOMContentLoaded", (fn) => {
    let enterElem = document.querySelector(".enter")
    let mainElem = document.querySelector(".hidden");

  getScreen();
  
  async function getScreen() {
    const url = "pop.html";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.text();
      //console.log(json);
      
      enterElem.innerHTML = json;

      let sub = document.querySelector('p, .subtitle');
      setTimeout(fn => {        
            sub.textContent = `Redirecting Now..`;
            
            setTimeout(nFn => {
                enterElem.remove();
                mainElem.classList.remove('hidden');
                mainElem.classList.add('main-container');
                setTimeout (y => {
                    animate ()

                }, 2000)
            },2000)

        }, 2000)        

    } catch (error) {
      console.error(error.message);
    }
  }

  function animate () {
      anime({
        targets: mainElem,
        translateX: 250,
        duration: 3000,
        loop: true,
        easing: 'easeInOutQuad'
      });
      console.log('anime')

  }

});
function exportasWORD() {
  var header =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  var sourceHTML =
    header + document.getElementById("content").innerHTML + footer;

  var source =
    "data:application/vnd.ms-word;charset=utf-8," +
    encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = "document.doc";
  fileDownload.click();
  document.body.removeChild(fileDownload);
}
