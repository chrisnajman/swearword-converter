export default function copyBtnEnable() {
  const convertedText = document.getElementById("euphemisms")
  const copyBtn = document.getElementById("copy-to-clipboard-btn")

  if (convertedText.textContent.trim() !== "") {
    copyBtn.removeAttribute("disabled")
  }
}
