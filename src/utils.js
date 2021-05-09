export const copyToClipboard = (text) => {
  const ta = document.createElement("textarea");
  ta.innerText = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  ta.remove();
};
