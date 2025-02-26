export default function clearText() {
  const clearTextBtn = document.getElementById("clear-text-button")
  const textArea = document.getElementById("swearwords-textarea")
  const euphemisms = document.getElementById("euphemisms")

  document.addEventListener("input", () => {
    if (textArea.value.trim() !== "") {
      clearTextBtn.removeAttribute("disabled")
    } else {
      clearTextBtn.addAttribute("disabled", "")
    }
  })

  clearTextBtn.addEventListener("click", () => {
    textArea.value = ""
    euphemisms.textContent = ""
  })
}
