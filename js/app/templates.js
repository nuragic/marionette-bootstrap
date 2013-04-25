define(function(require) {

  return {

    applayout:  require('text!tmpl/applayout.html'),
    loading:    require('text!tmpl/loading.html'),
    home:       require('text!tmpl/home.html'),
    login:      require('text!tmpl/login.html'),

    user: {
      list:     require('text!tmpl/user/list.html'),
      item:     require('text!tmpl/user/item.html'),
      form:     require('text!tmpl/user/form.html') //create and update
    }
    
  };

});