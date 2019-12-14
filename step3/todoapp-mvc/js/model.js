
function createModelsModule() {
  // list of [description:string, index: number, visible:boolean, editable: boolean, done: boolean]
  let items = [];
  
  /**
   * @param  {string} todoDescription
   */
  function addItem(todoDescription, visible=true, editable=false, done=false) {
    if (!todoDescription) {
      return;
    }
    items.push([todoDescription, items.length, visible, editable, done]);
    return items.length -1 ; 
  }
  
  function removeItem(todoIndex) {
    items.splice(todoIndex, 1) ;
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