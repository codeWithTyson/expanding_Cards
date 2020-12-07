const panels = document.querySelectorAll(".panel");

const removeActiveClasses = () => {
    panels.forEach(panel => panel.classList.remove('active'))
}

panels.forEach((panel) => {
  const expandPanels = (event) => {
    removeActiveClasses();
    event.target.classList.add("active");
  };

  panel.addEventListener("click", expandPanels);
});
