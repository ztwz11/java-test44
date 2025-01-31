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
        console.log("버튼클릭", args);
        var show = !this.getWidget("transButton").getValue();

        this.getWidget("transButton").setValue(show);
      },

      onSaveClick: function (...args) {
        this.setTimeCheckStart("button");
        var test1Value = this.getWidget("test1").getValue();
        this.getWidget("test2").setValue(test1Value);
        this.getWidget("test3").setValue(test1Value);
        this.setTimeCheckEnd("button");

        this.getWidget("eventTime").setValue(
          this.getTimeCheck("button").duration
        );
      },

      onPagingChange: function (page) {
        console.log("Page changed to:", page);
        var pagingWidget = this.getWidget("paging");
        pagingWidget.setOption({ currentPage: page });

        var data = [];
        for (var i = 0; i < 5000; i++) {
          data.push({ col1: "data" + i, col2: "data" + i, col3: "data" + i });
        }
        this.getWidget("grid1").setValue({ props: data });
      },
    },
  },
});
