
function createModelsModule() {
  let items = [];
  
  /**
   * @param  {string} todoDescription
   */
  function addItem(todoDescription) {
    if (!todoDescription) {
      return;
    }
    items.push([description, items.length]);
    return items.length -1 ; 
  }
  
  function removeItem(todoIndex) {
    items.splice(todoIndex, todoIndex) ;
  }
  function getLastItem() {
    return items[items.length - 1];
  }
  return {
    removeItem: removeItem,
    addItem: addItem,
    getLastItem: getLastItem,
    getAll: () => items,
  }
  
}