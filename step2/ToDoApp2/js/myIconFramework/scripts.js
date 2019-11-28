function createIconModule() {
  var iconHtml =  `
  <svg viewBox="0 0 300 100" class="icf-svg" >
      <circle cx="75" cy="50" r="45" stroke="black" stroke-width="5" fill="white" />
      <circle cx="150" cy="50" r="45" stroke="black" stroke-width="5" fill="white" />
      <circle cx="235" cy="50" r="45" stroke="black" stroke-width="5" fill="white" />
  </svg>  
      `;

  function updatePage() {
    var elements = document.getElementsByClassName("actions-icon");
    for (var element of elements) {
      // icf stands for : icon framework. icon framework is mine!
      element.innerHTML = iconHtml;
    }
  }

  function renderSpecificElement(elementId) {
    document.getElementById(elementId);
  }
  var api = {
    triggerRendering: updatePage
  };
  return api;
}