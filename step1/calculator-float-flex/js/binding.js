
function create_one_way_binding(object, property, ui_element) {
  let backing_variable = object[property]
  Object.defineProperty(object, property, {
    get: function() {
      return backing_variable;
    },
    set: function(value) {
      backing_variable = value;
      ui_element.innerText = value;
    }
  })
}