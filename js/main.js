var app = new Vue({
  el: "#root",
  data: {
    list: [],
    newtext: "",
  },
  methods: {
    addtext: function () {
      this.list.push(this.newtext);
      this.newtext = "";
    },
    removetext(index) {
      console.log(index);
      this.list.splice(index, 1);
    },
  },
});
