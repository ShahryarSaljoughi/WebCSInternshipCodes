function createIconModule() {
  
  var icons = [
    {
      cssClass: "actions-icon",
      svgHtml: `
      <svg viewBox="0 0 300 100" class="icf-svg" >
          <circle cx="75" cy="50" r="45" stroke="black" stroke-width="5" fill="white" />
          <circle cx="150" cy="50" r="45" stroke="black" stroke-width="5" fill="white" />
          <circle cx="235" cy="50" r="45" stroke="black" stroke-width="5" fill="white" />
      </svg>  
          `
    },
    {
      cssClass: "remove-icon",
      svgHtml: `
      <svg preserveAspectRatio="none" class="icf-svg" viewBox="0 0 100 100" viewPort>
          <polyline points="30,100 60,100 70,40 20,40 30,100" style="stroke: red;stroke-width:2;color: red;fill:  red;"></polyline>
          <polygon points="14,40, 76,40 73,32 17,32" style="stroke: red;stroke-width: 3;fill: #ff9292;"></polygon>
          <rect x="42" y="29" width="6" height="6" style="stroke: red;fill:  red;"></rect>
          <line x1="33" y1="50" x2="33" y2="75" style="stroke: #ff9292; stroke-width: 3;"></line>
          <line x1="43" y1="50" x2="43" y2="75" style="stroke: #ff9292; stroke-width: 3;"></line>
          <line x1="53" y1="50" x2="53" y2="75" style="stroke: #ff9292; stroke-width: 3;"></line>
        </svg>
      `
    },
    {
      cssClass: "edit-icon",
      svgHtml: `
      <svg viewBox="15 165 115 135" style="width:  100%; height: 100%;">
        <polygon points="15,245 50,280 5,300" style="fill:rgba(42, 129, 89, 0.486);stroke:purple;stroke-width:4"></polygon>
    	  <polygon points="25,235 60,270 130,200 95,165" style="fill:rgba(42, 129, 89, 0.486);stroke:purple;stroke-width:4"></polygon>
    </svg>
    `
    }
  ]

  function updatePage() {
    for(var icon of icons) {
      var elements = document.getElementsByClassName(icon.cssClass);
      for (var element of elements) {
        // icf stands for : icon framework. icon framework is mine!
        element.innerHTML = icon.svgHtml;
      }
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