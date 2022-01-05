/**
 * @file comm_frm.js
 * <p>comm_frm.js : 공통 프레임</p>
 */

 $(function(){
   $(".mente").typed({
     strings: [
       "안녕하세요.",
       "김경은입니다.",
       "감사합니다."
     ],
     typeSpeed: 50,
     backDelay: 1500,
     loop: true
   });
 });

/*********************************************************
 * <b>FUNCTION</b>
 * <p>
 * Function Name : frmfn_header<br />
 * Description : Header include 처리<br />
 * </p>
 *
 * <p>[수정이력]</p>
 * <ul>
 * <li>2022.01.05 / 김경은(kimkyungeun@kakao.com) / 최초작성</li>
 * </ul>
 *********************************************************/
function frmfn_header(callback) {
  var z, i, elmnt, file, xhr;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-header");
    //console.log(file);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-header");
          includeHTML(callback);
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      /*exit the function:*/
      return;
    }
  }
  setTimeout(function() {
    callback();
  }, 0);
}
