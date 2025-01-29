export default function autoResizeTextArea() {
  const text = document.querySelector("textarea")
  text.addEventListener(
    "input",
    () => {
      text.style.height = text.scrollHeight / 16 + "rem"
    },
    false
  )
}
