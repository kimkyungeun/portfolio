/**
 * @file kkePortfolio.js
 * <p>SCREEN_NAME: 포트폴리오</p>
 */
console.log.bind("JS Connection START : kkePortfolio.js");

M.onReady(function(event){
	// 화면 로딩이 최종 완료시 한번만 호출
	// 데이타 초기화, 서버로의 데이타 요청 등에 사용
	// iframe 등 으로 외부 페이지 오픈시 iframe 내 페이지까지 모두 완료되야 호출됨
	// DOM Content Loaded 와는 별개로 동작함
	// TODO : ready event handle code here
}).onHide(function(event) {
	// 화면 이동 바로 현재 페이지에서 호출
	// 현재 화면의 데이타 저장 및 처리 등에 사용
	// TODO : hide event handle code here
}).onResume(function(event) {
	// Bakcground 상태의 앱이 다시 Forground 상태로 바뀔때 현재 화면에 호출
	// TODO : resume event handle code here
}).onPause(function(event) {
	// 현재 앱이 Background 상태로 바뀔때 현재 화면에서 호출
	// TODO : pause event handle code here
}).onRestore(function(event) {
	// 해당 화면으로 다시 돌아왔을 때 호출
	// 데이타 갱신 등에 사용
	// TODO : restore event handle code here
}).onDestroy(function(event) {
	// 화면이 메모리에서 제거될때 마지막으로 호출
	// 데이타 보존이나 마무리를 위한 처리 등에 사용
	// 단, 앱의 종료시에는 호출되지 않음
	// TODO : destroy event handle code here
}).onBack(function() {
	// 단말기에서 Back 키가 눌려졌을때 호출 (Only Android)
	// TODO : back event handle code here
});

 console.log.bind("END ----------------------------------------- kkePortfolio.js");
