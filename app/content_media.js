Jidget.ui.Accordian = Object.spawn(Jidget.View, {
  className: "accordian",
  render: function () {
    this.initialize();
    var name, section;
    for (name in this.sections) {
      if (this.sections.hasOwnProperty(name)) {
        section = this.sections[name];
        this.el.append(section.render().el);
      }
    }
    return this;
  }
});

Jidget.ui.AccordianSection = Object.spawn(Jidget.View, {
  className: "accordian-section",
  render: function () {
    this.initialize();
    this.el.text()
  }
});
var accordian = Object.spawn(Jidget.ui.Accordian, {
  sections: {
    search: Object.spawn(Jidget.ui.AccordianSection, {

    }),
    tag: Object.spawn(Jidget.ui.AccordianSection, {

    }),
    site: Object.spawn(Jidget.ui.AccordianSection, {

    }),
    repository: Object.spawn(Jidget.ui.AccordianSection, {

    }),
    upload: Object.spawn(Jidget.ui.AccordianSection, {

    }),
    link: Object.spawn(Jidget.ui.AccordianSection, {

    }),
  }
})

$(function () {
  $('body').append(accordian.render().el);
});