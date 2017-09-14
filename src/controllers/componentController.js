const ComponentController = {
  addComponent: async component => {
    console.log(component);
    return true;
    // const {name, author, componentString, jsx, description, tags} = component;
  },

  getComponent: async id => {
    return id;
  },
};

module.exports = ComponentController;
