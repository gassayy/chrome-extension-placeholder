export const PopperoverCss = `
/* popover */
details[data-popover] {
  display: inline;
  position: relative;
}
details[data-popover] > summary:focus {
  outline: none;
}
details[data-popover] > summary::-webkit-details-marker {
  display: none;
}
details[data-popover] > summary {
  list-style: none;
  text-decoration: underline dotted teal;
}
details[data-popover] > summary + * {
  position: absolute;
  display: block;
  z-index: 1;
  width: 350%;
  border: solid 1px teal;
  border-radius: 5%;
  padding: 10px;
  background: white;
}
details[data-popover] > * + * {
  /* hide detail elements that would ruin the popover */
  display: none;
}
details[data-popover='up'] > summary + * {
  bottom: calc(0.5rem + 100%);
  right: 50%;
  transform: translateX(50%);
}
details[data-popover='down'] > summary + * {
  top: calc(0.5rem + 100%);
  right: 50%;
  transform: translateX(50%);
}
details[data-popover='left'] > summary + * {
  right: calc(1rem + 100%);
  bottom: 50%;
  transform: translateY(50%);
}
details[data-popover='right'] > summary + * {
  left: calc(1rem + 100%);
  bottom: 50%;
  transform: translateY(50%);
}

/* wrapper setup */
.wrapper {
  width: 100%;
  padding: 250px;
}
`
