import convertSwearwords from "./convert-swearwords.js"
import convertBtnEnable from "./convert-btn-enable.js"
import copyBtnEnable from "./copy-to-clipboard-btn-enable.js"
import autoResizeTextArea from "./auto-resize-textarea.js"

export default function replaceSwearwords() {
  const replaceSwearwords = document.getElementById("replace-swearwords")

  if (!replaceSwearwords) return
  replaceSwearwords.addEventListener("submit", (e) => {
    e.preventDefault()
    const euphemismsP = document.querySelector(".euphemisms p")
    euphemismsP.style = "border-style: solid;"
    convertSwearwords()
    copyBtnEnable()
  })
  convertBtnEnable()
  autoResizeTextArea()
}
