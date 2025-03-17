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
      if (window.location.href.includes('github')) {
        downloadLink.href = 'https://github.com/AceAkki/resume/raw/81c76b748bc28a96c756900c3c587a12b8df90ac/res/Resume-2025.pdf';
      } else {
        downloadLink.href = 'res/resume-2025.pdf';
      }
      downloadLink.download = `Akshay-P-Resume-${todayDate}.pdf`;
      downloadLink.click();      
    });
  }, 5000);

  function downloadOption() {
    let value = undefined;
    let height = "";
    document.addEventListener("scroll", (fn) => {
      if (scrollY > 600) {
        value = scrollY;
      }
      console.log(scrollY, value);
      console.log((height = window.outerHeight * window.innerHeight));
    });
    if ((value = !undefined)) {
      let elem = document.createElement("div");
      bodyElem.appendChild(elem);
      elem.style = `position:absolute; z-index:10; background:white; top: 250px`;
      elem.innerHTML = `
        <div> Download </div>
        `;
      console.log(scrollY);
    }
  }

  function animate() {
    anime({
      targets: createElem,
      translateX: 250,
      duration: 3000,
      loop: true,
      easing: "easeInOutQuad",
    });
    console.log("anime");
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
