const allParagraph: NodeListOf<HTMLParagraphElement> =
  document.querySelectorAll('p');
for (let i = 0; i < allParagraph.length; i++) {
  if (i < 3) {
    allParagraph[i].append(allParagraph[3].innerText);
    //allparagraph[i].innerHTML += allparagraph[3].innerHTML;
  }
}

allParagraph.forEach((element: HTMLParagraphElement, index: number) => {
  if (index < 3)
    element.innerHTML += allParagraph[allParagraph.length - 1].innerHTML;
});
