function guessCity(capital, coastal, famous, ancient) {
  if (capital === false && coastal && famous === false && ancient === false) {
    return "Zikim";
  } else if (capital && coastal === false && famous && ancient) {
    return "Jerusalem";
  } else if (capital === false && coastal && famous && ancient === false) {
    return "Tel Aviv";
  } else if (capital === false && coastal && famous === false && ancient) {
    return "Acre";
  } else if (
    capital === false &&
    coastal === false &&
    famous === false &&
    ancient
  ) {
    return "Katzrin";
  } else if (
    capital === false &&
    coastal === false &&
    famous === false &&
    ancient === false
  ) {
    return "Musmus";
  }
}

console.log(guessCity(true, false, true, true));
