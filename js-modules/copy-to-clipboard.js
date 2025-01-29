export default function copyToClipboard() {
  const text = document.getElementById("euphemisms")
  const copyToClipboardBtn = document.getElementById("copy-to-clipboard-btn")

  if (!copyToClipboardBtn) return
  copyToClipboardBtn.addEventListener("click", () => {
    copyText(text)
  })

  async function copyText(htmlElement) {
    if (!htmlElement) {
      return
    }

    let elementText = htmlElement.textContent

    try {
      await navigator.clipboard.writeText(elementText)
      alert("Text copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy text: ", err)
      alert("Failed to copy text to clipboard.")
    }
  }
}
