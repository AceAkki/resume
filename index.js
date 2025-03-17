document.addEventListener("DOMContentLoaded", (fn) => {
  console.log(400000 / 12);

  let mainElem = document.querySelector(".main-container");
  let todayDate = new Date().toISOString().split('T')[0];
  console.log(todayDate)


  setTimeout((fn) => {
    let createElem = document.createElement("div");
    createElem.classList.add("pop-up-container");
    let createElm = document.createElement("div");
    createElm.classList.add("download-wrap");

    let creatdiv = document.createElement("div");
    let creatdivT = document.createElement("div");
    let createH4 = document.createElement("h4");
    let creatI = document.createElement("i");
    creatI.classList.add("ph", "ph-file-arrow-down");
    createH4.textContent = "Download Resume";

    mainElem.appendChild(createElem);
    createElem.appendChild(createElm);
    createElm.appendChild(creatdiv);
    createElm.appendChild(creatdivT);
    creatdiv.appendChild(createH4);
    creatdivT.appendChild(creatI);

    
    createElem.addEventListener("click", (fn) => {
      const downloadLink = document.createElement("a");

      let fileUrl;
      if (window.location.href.includes('github')) {
        fileUrl = 'https://raw.githubusercontent.com/AceAkki/resume/main/res/Resume-2025.pdf';
      } else {
        fileUrl = 'res/resume-2025.pdf';
      }

      fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `Akshay-P-Resume-${todayDate}.pdf`;
        downloadLink.click();      
      })
      .catch((error) => {
          console.error('Download Failer', error)
      })
    });

    document.addEventListener('click', fn => {
      animate()
    })

    
  }, 5000);

  function animate() {
    let elem = document.querySelector( ".pop-up-container")

    if (elem) {
      anime({
        targets:elem,
        opacity:0,
        translateY: 250,
        duration: 3000,
        loop: true,
        easing: "easeInOutQuad",
        complete: function() {
          elem.remove();
        }
      });
      setTimeout(time => {
        elem.remove()

      }, 3000)
      console.log("anime");
    } 
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
