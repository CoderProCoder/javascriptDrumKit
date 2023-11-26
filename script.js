/**
 * Removes the "playing" class from the target element when the transition event occurs.
 * @param {Event} e - The transition event object.
 */

function removeTransition(e) {
  if (e.propertyName === "transform") return;
  e.target.classList.remove("playing");
}
