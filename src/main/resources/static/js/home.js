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
    // 클릭이벤트
    onExampleClick: function () {
      console.log("Example component clicked");
    },
    // component 초기화 및 기초 데이터 할당
    oninitControl: function () {
      console.log("Initializing control");
    },
    // API 호출 함수
    callSearchApi: function () {
      console.log("Calling search API");
    },
  },
});
