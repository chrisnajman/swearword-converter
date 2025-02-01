import setAndToggleAttribute from "./set-and-toggle-attribute.js"

export default function revealHideVocab() {
  const toggleRevealBtn = document.getElementById("toggle-reveal-btn")

  if (!toggleRevealBtn) return

  const wordsObscured = document.querySelectorAll("[data-word-obscured]")
  const wordsInFull = document.querySelectorAll("[data-word-full]")

  toggleRevealBtn.addEventListener("click", () => {
    const revealBtnTxt = document.getElementById("reveal-btn-txt")
    revealBtnTxt.textContent =
      revealBtnTxt.textContent === "Reveal" ? "Hide" : "Reveal"

    setAndToggleAttribute(
      wordsObscured,
      "style",
      "display:inline",
      "display:none"
    )

    setAndToggleAttribute(
      wordsInFull,
      "style",
      "display:none",
      "display:inline"
    )
  })
}
