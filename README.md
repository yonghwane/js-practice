# 🚀 JS-Practice

## 🎯 목적

이 프로젝트의 주 목적은 HTML 조작 기능을 위한 자바스크립트 학습입니다. 📚

## 📝 학습 내용

1. **ID 사용:** `document.getElementById('??').?? = ??;` 형식으로 ID 값을 사용합니다. 🔑

2. **UI 생성 단계:**

    - HTML/CSS를 미리 디자인합니다. 🎨
    - 필요할 때 자바스크립트로 코드를 작성합니다. 💻

3. **화면 표시:** 화면을 보이게 하려면 `display: block;`, 숨기려면 `display: none;`을 사용합니다. 👀

4. **함수 작성법:**

    - 함수는 `function 함수이름(매개변수) { 실행할 코드 }` 형식으로 작성합니다. 📜
    - 함수 이름은 소문자로 시작하며, 카멜케이스 표기법을 사용합니다. 🐫

5. **파라미터 문법:** `function(파라미터) { 2 * 파라미터 }` 형식으로 사용하면, `function(3)`은 `2 * 3`을 계산하여 값을 반환합니다. 🧮

6. **script 태그:** script 태그는 사용할 HTML 아래에 작성합니다. 📌

7. **addEventListener 사용법:** `addEventListener('이벤트', function() { 실행할 함수 })` 형식으로 사용하면, onclick 없이도 이벤트를 처리할 수 있습니다. 🖱️

8. **이벤트:** 클릭, 키 입력, 스크롤, 드래그 등의 동작을 이벤트라고 합니다. 이벤트는 사용자의 행동을 감시합니다. 👁️

9. **콜백 함수:** 함수의 파라미터 자리에 또 다른 함수를 넣는 것을 콜백 함수라고 합니다. 함수를 순차적으로 진행하고 싶을 때 사용합니다. 🔄

10. **querySelector 사용법:** `getElementById`, `getElementsByClassName[인덱스]` 대신 CSS 셀렉터를 그대로 사용할 수 있는 `querySelector`를 주로 사용합니다. 예를 들어, `querySelector('#id')`는 id라는 ID 값을 가진 요소를 선택하고, `querySelector('.className')`는 className이라는 클래스를 가진 요소를 선택합니다. 🎯

11. **JQuery**
    JQuery뿐만 아니라 html조작하는게 JS로 너무 힘들어서 React, jQuery, Vue등이 나오게 된 것이다. 🌐

12. **라이브러리 설치시 주의사항**
    거의 모든 자바스크립트 라이브러리는 <body>끝나기 전에 넣는거 권장 📚

13. **내가 원하는 움직이는 ui 만드는 고찰** 1.시작스타일(css만들기) 2.최종스타일(css만들기) 3.원할때 최종스타일로 바뀌라고 주문넣기(JS) 4.시작지점에 Transition 추가. 🎢

14. **이미지 슬라이드 구현방법**
    13번의 내용을 토대로 1. 사진들을 쭈욱 이어붙혀넣기 -> vh를 -100%씩 감소시키는 함수를 만들고 시작지점에 Transition을 1초주고 만들면 끝 🖼️

15. **함수의 return을 사용하는 이유**

    1. 함수를 쓰고 그자리에 뭔가를 반환하고 싶을 때사용 -> 퉤 뱉는 문법
       예를 들어
       function practice() {
       return 123;
       }
       var returnvalue = practice; 하면
       return값을 반환한다! 🎁
    2. return은 함수 종료기능도 가지고 있어서 return이후의 코드는 실행이 되지 않는다. 🚫
    3. 소수점 있는 숫자 연산시 주의점이 필요한데
       function vat(a) {
       return a _ 1.1
       }
       인데
       console.log(vat(55555))를 해보면
       61110.5000000001 이라는 이상한 값이 도출되는 것을 확인할 수 있다.
       그래서 소숫점값을 할떄는
       function vat(a) {
       var num = parseInt((a _ 1.1).toFixed(1));
       }
       이런식으로 계산이 된다. 🧮

16. **스크롤바 컨트롤 하는 방법**
    scroll을 컨트롤 하고싶으면
    window.addEventListener('scroll', function() {

    });
    여기서 window.란 그냥 화면전체를 지칭한다
    그래서 화면전체의 이벤트리스너에서 scroll을 할때 실행이 되는 코드라는 뜻
    여기서 window.scrollY값을 쓰면 유저가 얼마나 스크롤바를 내렸나를 출력해준다
    이거를 통해서 회원약관을 다읽었을때 알럿을띄우거나 버튼을 활성화를 가능하게 한다.

    scrollTo(x, y) -> 강제좌표이동
    scrollBy(x, y) 강제로 스크롤
    overflow-y : scroll은 넘치는 글자를 스크롤로 만들어주세요 하는거임
    var 스크롤양 = document.querySelector('.lorem').scrollTop;
    var 실제높이 = document.querySelector('.lorem').scrollHeight;
    var 높이 = document.querySelector('.lorem').clentHeight;
    공식으로써는
    div의 스크롤바 내린양 + 눈에보이는 div높이 == div의 실제높이 📏

17. **화면에서 특정 모달이나, 페이지를 강조하고 싶을때**

    꿀팁1.z-index를 줘서 겹치는 요소들이 있을때 특정 값을 위에 표시하는 css속성으로,3차원 공간에서의 z축을 나타낸다.
    꿀팁2.그 강조된 부분 이외를 눌렀을 때 모달창이 꺼지게 하는 법 -> 뒤에 배경부분을 클릭했을때 그 해당하는 모달창을 닫도록 코드를 짠다 예를들면 다음과 같다.
    document.querySelector('.black-bg').addEventListener('click', () => {
    document.querySelector('.black-bg').classList.remove('show-modal');
    })

18. **이벤트 버블링 **

## ⚠️ 주의사항
