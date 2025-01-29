export default function convertBtnEnable() {
  const textArea = document.querySelector("textarea")
  const convertButton = document.getElementById("convert-text-btn")

  textArea.addEventListener("input", () => {
    if (textArea.value.trim() !== "") {
      convertButton.removeAttribute("disabled")
    }
  })
}
