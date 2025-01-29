export default function convertSwearwords() {
  let textAreaVal = document.querySelector("textarea").value
  const euphemisms = document.getElementById("euphemisms")

  const swearWords = [
    "Fuck",
    "fuck",
    "Cunt",
    "cunt",
    "Twat",
    "twat",
    "Prick",
    "prick",
    "Wanker",
    "wanker",
    "Arsehole",
    "arsehole",
  ]

  let vocab = swearWords.join("|")

  // Create a dynamic regular expression
  const regex = new RegExp(vocab, "g")

  // Use the dynamic regex in the replace function
  textAreaVal = textAreaVal.replace(regex, (match) => {
    // Handle replacements for matched swear words
    switch (match) {
      case "Fuck":
        return "Feck"
      case "fuck":
        return "feck"
      case "Cunt":
        return "Clot"
      case "cunt":
        return "clot"
      case "Twat":
        return "Twerp"
      case "twat":
        return "twerp"
      case "Prick":
        return "Prong"
      case "prick":
        return "prong"
      case "Wanker":
        return "Wally"
      case "wanker":
        return "wally"
      case "Arsehole":
        return "Ass"
      case "arsehole":
        return "ass"
    }
  })
  euphemisms.textContent = textAreaVal
}
