44({
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

    onInitWidget: function () {
      var pagingWidget = this.getWidget("paging");
      var pagingOptions = {
        totalItems: 300,
        pageSize: 20,
        maxPages: 10,
        currentPage: 1,
        firstAndLastPaginationHide: false,
      };

      pagingWidget.setOption(pagingOptions);
    },

    events: {
      onTransButtonClick: function (...args) {
        var show = !this.getWidget("transButton").getValue();

        this.getWidget("transButton").setValue(show);
      },

      onSaveClick: function (...args) {
        var test1Value = this.getWidget("test1").getValue();
        this.getWidget("test2").setValue(test1Value);
      },

      onPagingChange: function (page) {
        console.log("Page changed to:", page);
        var pagingWidget = this.getWidget("paging");
        pagingWidget.setOption({ currentPage: page });
      },
    },
  },
});
