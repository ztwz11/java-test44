widgetStart({
  p: "chj.page.bookClub",
  id: "home",
  v: {
    // component init
    init: function () {
      console.log("Initialization");
    },
    // component 렌더링
    render: function () {
      console.log("Rendering");
    },
    events: {
      onTransButtonClick: function (...args) {
        console.log("Trans button clicked");
        var show = !this.getWidget("transButton").getValue();

        this.getWidget("transButton").setValue(show);
        if (!this.aa) {
          this.aa = 0;
        }
        this.aa += 10;
      },

      onSaveClick: function (...args) {
        console.log("onSaveClick");
        var show = !this.getWidget("Save").getValue();

        alert(this.aa);

        this.getWidget("Save").setValue(show);
      },
      onSearchInputChange: function (event) {
        console.log("Search input changed", event.target.value);
      },
      // 기타 이벤트 핸들러...
    },
  },
});
