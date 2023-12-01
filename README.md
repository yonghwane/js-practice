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

16. **스크롤바 컨트롤 하는 방법 🎛️**

스크롤을 컨트롤 하고 싶다면 window.addEventListener('scroll', function() {});를 사용한다. 여기서 window는 화면 전체를 뜻하며, 이는 화면 전체의 이벤트 리스너에서 스크롤을 할 때 실행되는 코드를 의미한다. window.scrollY 값을 사용하면 유저가 얼마나 스크롤바를 내렸는지를 출력가능. 이를 통해 회원 약관을 다 읽었을 때 알림을 띄우거나 버튼을 활성화하는 등의 작업을 할 수 있다.

    scrollTo(x, y) -> 강제좌표이동
    scrollBy(x, y) 강제로 스크롤
    overflow-y : scroll은 넘치는 글자를 스크롤로 만들어주세요 하는거임
    var 스크롤양 = document.querySelector('.lorem').scrollTop;
    var 실제높이 = document.querySelector('.lorem').scrollHeight;
    var 높이 = document.querySelector('.lorem').clentHeight;
    공식으로써는
    div의 스크롤바 내린양 + 눈에보이는 div높이 == div의 실제높이 📏

17. **화면에서 특정 모달이나, 페이지를 강조하고 싶을 때 🎯**

    특정 요소를 강조하고 싶을 때는 z-index CSS 속성을 사용합. 이는 겹치는 요소들이 있을 때 특정 값을 위에 표시하는 속성으로, 3차원 공간에서의 z축을 나타낸다. 또한, 강조된 부분 이외를 눌렀을 때 모달창이 꺼지게 하는 기능을 구현도 가능.

    document.querySelector('.black-bg').addEventListener('click', () => {
    document.querySelector('.black-bg').classList.remove('show-modal');
    });📏

18. **이벤트 버블링 🎈**
<div>
  <div>
    <p>안녕</p>
  </div>
</div>
 이렇게 div > div > p의 형태로 작성하게 된 코드를 클릭하게되면 이를 웹브라우저에서는 총 3번 클릭했다고 인식하게된다,

<div class="black-bg"> 
  <div class="white-bg">
    모달창 내용
  </div>
</div>

그래서 여기서도 white-bg를 클릭했을때 무언가 작동을 하게 하고싶어도, black-bg에 있는거까지 딸려서 작동을 하게된다는 문제점이 있다.
그래서 이러한 브라우저내의 작동을 제어하려면 이벤트 버블링을 막는 여러 기능들을 써야하는데
(1)e.target;
(2)e.currentTarget;
(3)e.preventDefault();
(4)e.stopPropagation();

document.querySelector('.선택할 id값').addEventListener('click', function(e){
e.target;
e.currentTarget;
e.preventDefault();
e.stopPropagation();
})

여기서
e.target.은 실제 클릭한 요소를 파악하는데 사용
e.currentTarget은 지금 이벤트리스너가 달린곳을 알려줌
e.preventDefault()는 이벤트 기본동작을 막아줌
e.stopPropagation()을 실행하면
내 상위요소로의 이벤트 버블링을 중단해줌

<div class="black-bg"> 
  <div class="white-bg">
    모달창 내용
  </div>
</div>

그래서 다시 여기로 돌아와서
black-bg만의 특별한 동작을 제어하려면 JS로

document.querySelector('.black-bg').addEventListener('click', function(e) {
if(e.target == document.querySelector('.black-bg' {
document.querySelector('.black-bg').classList.remove('show-modal')
}))
})과 같은 식으로 제어를 할 수 있다.

19. **비동기로 제출을 하는 법**

function login() {
const memNickname = document.querySelector('#memNickname').value;

fetch('/login', {
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
},
body: `memNickname=${memNickname}`,
})
.then(response => response.json())
.then(data => {
// 로그인 성공 시 처리
})
.catch(error => {
// 로그인 실패 시 처리
});
}
async function login() {
const memNickname = document.querySelector('#memNickname').value;

try {
const response = await fetch('/login', {
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
},
body: `memNickname=${memNickname}`,
});

    const data = await response.json();

    // 로그인 성공 시 처리

} catch (error) {
// 로그인 실패 시 처리
}
}
function login() {
const form = document.createElement('form')
document.body.appendChild(form)
form.method = 'post'
form.action = '/login'
const memNickname = document.querySelector('#memNickname')
form.appendChild(memNickname)
form.submit()
}

이거는 고쳐야할 코드
이 코드는 await/ async를 사용한 비동기처리를 함

기본 틀

20. **사용하면 유용한 라이브러리들** 1.이미지캐러셀을 쉽게 조작해주는 라이브러리 -> Swiper, Owl Carousel, Slick, Flickity 2.차트를 쉽게 만들어주는 라이브러리 -> Chart.js, D3.js 3.이메일 인증관련 라이브러리 -> Nodemailer, Jsonwebtoken, crypto, Passport.js 하지만 지금은 email.js를 썼음

21. **객체, 배열**

    ```var car = '소나타';
    var carPrice = 50000;
    var carColor = 'white';
    // 이러면 너무 변수선언이 많아서 불편하다.
    var car = ['소나타', 50000, 'white']; // 이렇게 배열로 선언하면 변수가 하나로 줄어든다.
    car[0] = '아반떼'; // 이렇게 하면 소나타가 아반떼로 바뀐다.
    car[3] = 'red'; // 이렇게 하면 새로운 값이 추가된다.
    var car2 = {
    name: '소나타',
    price: 50000,
    color: 'white'
    }; //이름을 붙혀서 저장가능한게 장점이고, 순서가 없어서 순서대로 불러올 수 없다는 단점이 있다.
    //배열은 []로, 객체는 {}로 선언한다.
    //객체는 key와 value로 이루어져있다.
    ```

    []로 된건 무조건 array자료형임

22. **데이터통신타입**

    -   **JSON (JavaScript Object Notation)**: JSON은 경량의 데이터 교환 형식으로, 사람이 읽고 쓰기에 쉽고, 기계가 분석하고 생성하기에도 쉽다. JSON은 웹 통신에서 가장 보편적인 형식
    -   **FormData**: FormData 객체는 key-value 쌍을 모아서 XMLHttpRequest를 사용해 서버로 전송가능. 주로 파일 업로드와 같은 경우에 사용.
    -   **URL-encoded**: 웹 서버와 통신할 때, ASCII 문자셋만을 사용해야 하는 경우에 데이터를 인코딩하는 방식입니다. 주로 HTTP GET 요청에서 쿼리 문자열을 생성할 때 사용된다.
    -   **Binary Data**: 웹 통신에서는 이미지, 오디오, 비디오 등의 바이너리 데이터를 전송하기도함 이 경우, Blob, ArrayBuffer, Stream 등의 형식을 사용할 수 있습니다.

특히, 이중에서도 가장 보편적인 방법은 JSON의 데이터교환방식이 보편적이다 읽고쓰기편하고, 기계도 또한 마찬가지인장점으로 웹api통신에서 주로 사용 자바스크립트쪽에서는 fetch나 axios같은 라이브러리를 사용하고 자바에서는 http요청을 json에 담아보내기도한다.

23. **서버사이드렌더링, 클라이언트사이드렌더링**

    Server Side Rendering(SSR)
    서버에서 모든 데이터를 준비하고 HTML을 완성하여 클라이언트에게 보내는 방식
    장점:초기 로딩후에는 빠른페이지렌더링이됨, SEO에 유리
    단점:서버부하가 커짐, 사용자의 인터랙션에 따른 화면변경이 느림

    Client Side Rendering(CSR)
    서버에서 최소한의 데이터와 함께 빈 HTML를 클라이언트에게 보내고 나머지는 클라이언트의 JS가 처리하는 방식.

    장점: 사용자의 인터랙션에 따른 화면변경이 빠름, 서버부하가 적음
    단점:초기 로딩이 느릴 수 있음, 검색 엔진 최적화에 불리함

    결론: 즉 SEO가 중요하거나 서버부하를 최소화하고싶은 경우에는 SSR을, 사용자 인터랙션에 따른 화면변경이 빈번하거나 초기 로딩속도를 최적화하고싶은경우에는 CSR을 선택,
    하지만 요즘에는 Universal JavaScript방식도 인기를 얻고 있음.

23. **페이지네이션 하는  총정리 비법**
 
1. 페이지네이션에 필요한 변수선언(필요한 변수 총 7개)
 1-1. 페이지당 보여줄 게시물 수
 1-2. 총 몇개 있는지 보여줄  페이지 번호개수
 1-3. 게시물을 담을 리스트 변수
 1-4. 이전, 이후 페이지로 이동할 수 있게 하는 버튼 변수
 1-5. 초기 세팅할 페이지 번호 

2. 필요한 페이지 번호의 총개수를 구함
2-1 총 표현될 페이지 개수는 총 게시물 수 / 페이지당 보여줄 게시물 수
2-2 그리고 올림을 해주기 위한 Math.ceil()함수를 사용해줌

3. 필요한 페이지 번호의 개수에 맞게 페이지 버튼을 구성해줌 
 3-1 setPageButtons()함수를 만들어서 페이지 버튼을 구성해줌
 3-2 우선 숫자를 표현할 html을 초기화 하고
 3-3 반복문통해 필요한 페이지번호의 개수만큼 반복을 돌려서 페이지 숫자와 버튼을 만들어줌

4. 페이지에 해당하는 게시물을 ul변수에다가 박아주기 
 4-1 setPageOf()함수를 만들어서 페이지에 해당하는 게시물을 ul에다가 박아줌
 4-2 우선 ul을 초기화 해주고
 4-3 반복문을 돌려서 해당게시글의 현재 클릭되있는 번호부터 거기서부터 내가 보여주고싶은 
 게시물의 개수만큼 반복을 돌려서 게시물을 박아줌

5. 이전, 이후 버튼을 클릭 했을때 거기로 이동하는 함수 생성
 이전 함수를 클릭했을때 로직 현재페이지가 1보다 클때 조건문을 사용해서 현재페이지의 변수값을 -1ㅇ를 하고
 setPageOf()함수를 호출해서 그 현재페이지의 값을 함수로 넣어서 바꿔준다 
 그리고 moveSelectedPageHighlight()함수를 호출해서 css적용해줌

6. 그 기능에 알맞는 css를 적용해줌
24. **문자와 정수, 변수등을 꽂아넣는방법팁**

꿀팁1. 문자 + 정수는 문자를 반환하므로 그냥 문자를 표현하고싶을때는
'가격' + (정수숫자)5 를 하면 '가격5' 가 출력이된다.
꿀팁2. '문자' + a + '문자' 를 하면 정수가 중간에 넣을수 있다
그런데 중간중간에 +를 넣으면 너무 가독성이 안좋으므로
꿀팁3. 백틱을 쓴다 `사이에 아무거나 써두고 ${}이렇게 변수를 집어넣는다`

26. **<select>사용법**
    무언가를 고를 수 있는 선택상자인데
    예를 들어 옷의 사이즈 -> 95, 100, 105등을 고를 수있게하는등
    좋다
    그러면 <input>을 놔두고 왜 <select>를 쓰느냐
    <input>은 기상천외한것을 다 넣을 수 있기 때문에 그렇다

27. **자바스크립트로 html 생성법**
    생성법(1)
    3Step 1.내가원하는 html태그를 선언
    var a = document.createElement('원하는태그') 2.선언한 변수에다가 내가 원하는 html내용을 집어넣음
    a.innerHTML = '안녕'; 3.내가 선언한 id값이나 class값에다가 추가를 해줌(appendChild로)
    document.querySelector('#test').appendChild(a);
    생성법(2)

    1. 템플릿을 생성
       var template = '<p>안녕</p>';
    2. 그 탬플랫을 inserAdjacentHTML('beforeend', template);
       으로 해서 직접 넣음
       document.querySelector('#test').insertAdjacentHTML('beforeend', template);

    성능적으로는 생성법(1) -> .createElement()가 더 빠르나, 실은 큰차이는 없기때문에 마음에 드는것을 쓴다.
28. **for문대신 작성하는 foreach문**
  좀더 편하게 쓰려고 쓰는건데
  반복하고싶은변수.foreach((array안의데이터, i) => {

  })
  이렇게 쓴다. 여기서 매개변수안에 들어가는 array안의 데이터는 배열의값들이며 두번째 매개변수 

  object문도 반복문을 돌릴 수 있는데, 이 때는 
  for (var key in obj) {

  }
  여기서 key값은 객체의 키값이 되고 
  key값의 밸류값을 쓰고싶으면 obj[key]값을 쓸 수 있다.


28. **arrow function을 쓸때의 주의점**

  arrowwfunction은 
  function name(){}으로 쓰는데 이것을 () => {} 으로 바꿔서도 사용할 수 있다. 이때의 주의점은 
  arrowfunction을 사용하면 함스안의 this뜻이 달라 질 수 있다. 바깥의 this를 그대로 가져다 쓴다.

29. **서버와 데이터 통신을 하는 법**
  1.데이터의url을 기재해야함
  2.GET/POST 둘중 하나를 선택해야함 
  특정url로 GET요청하는 법 
  <form action="/asd" method="post"></form>
  보통 이렇게 해서 보내는게 옛날의 일반적인 요청이었는데. GET/POST 요청을 하면 브라우저가 새로고침이 된다. 이것이 싫으면 ajax기능을 이용해서
  get이랑 post요청을 보낼 수 있다.

  3.ajax로 get요청하는 법

   ajax의 경우
    $.get('url').done(function(data) {
      원하는 코드가 실행이 됨
    })
    여기서 data 매개변수에 실제 데이터가 담겨있음
    $.post('주소', {name: 'kim'}).done(function(data) {
      console.log(data)
    }).fail(function() {

    })
    ajax가 실패하는경우 
    url이 잘못입력되있거나, 인터넷이끊켜있을때 원하는 코
    특정코드를 실행하고 싶으면.fail(function() {})로 작성을 해주면 된다. 
    404error- ajax요청을 보내는 주소가 잘못되어있다.

30. **array에서 자주 쓰이는 map, filter, sort**

  array를 정렬하는 방법 
  var array = [1,5,2,4,3,7];
  array.sort() 라고 하면 정렬이 된다. 근대 이거는 문자순으로 정렬을 하는 것이기 때문에, 정수타입의  순서대로 정렬을 하고 싶으면, 
  array.sort((a, b) {
    a - b
    })로 쓸 수 있다.
  숫자 역순으로 정렬을 하려면 반대로
  array.sort((a, b) {
    b - a 로 하면 된다.
  })
    왜 이렇게 되냐하면  여기서 매개변수 a와 b는
    array안에 있던 자료임
    array자료 원하는 것만 필터하려면 .filter(
    )
    array.filter(function(a) {
      return a < 4;
    });
    console.log(array);
    근대 원본을 훼손하면 안되기 때문에 
    var 새어레이 = 어레이.filter((a)  {
      console.log(새어레이)
    })

    .sort() 는 원분변형
    .filter()는 원본 변형 x

    array자료 전부 변형하려면 .map() {
      
    }

30. **DOM용어의 개념정리, .load이벤트**

DOM(Document Object Model)이라는 뜻으로
  자바스크립트가 html에 대한 정보들을 object자료로 정리한걸 DOM이라한다.
여기서 특징은 브라우저는 HTML문서를 위에서부터 읽으며 DOM을 생성한다. 읽을때 마다 HTML을 발견하면 DOM에 추가해준다. 여기서 문제가 
<script>
  document.getElementById('test').innerHTML = '안녕'
</script>

<p id="test">임시글자</p>
이런 코드가 있을 경우에 아직 p태그를 읽기전이라 DOM에 p태그가 생성잉 안되있어서 에러가 난다. 이렇듯 자바스크립트는 DOM이 생성된 경우에만 HTML을 변경할 수 있다.

<script>
  document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('test').innerHTML = '안녕'
  })
</script>

<p id="test">임시글자</p>
이러한 식으로 코드를 작성해주면 다 해결을 할 수 있다.

31. **장바구니 기능과같은 구현을 위한 local storage**

    개발자도구에서 Application의 local storage이 있는데
    이곳에 임시저장을 할 수 있는 저장소가 있다.


    localStorage, sessionStorage은
    key: value 형태로 저장이 가능하다. 
    IndexedDB는 구조화된대용량데이터 저장시 사용한다.
    Cookies에는보통 로그인정보를 저장한다.
    Cache Storage는 보통 html,css,js를 쓸 수 있다.

    여기서 localStorage와 sessionStorage의 용량은 5MB이며 
    문자/숫자만 저장가능하다. 
    여기서 localStorage는 사이트를 재접속을 해도 유지가 되며 
    sessionStorage는 사이트를 나가면 자동삭제가 된다.

    여기서
    localStorage에 저장을 하려면 
    localStorage.setItem('이름', '값')
    이 저장된 값을 출력하려면
    localStorage.getItem('이름');
    을 쓸 수 있다.
    localStorage.removeItem('이름')
    하면은 삭제를 할 수 있다.
    localStorage에 array형태나, object형태를 사용할 수도 있는데 
    localStorage.setItem('num', '');
    var arr = [1,2,3];
    var newArr = JSON.stringify(arr);
    localStorage.setItem('num', newArr);


    sessionStorage사용법은 
    위에서session으로 바꿔주면된다.

32. **indexOf()의 사용법**

indexOf()메소드는 배열에서 특정요소를 찾고 그 위치를 반환하는데 사용한다.
indexOf()메소드는 배열에서 지정된 요소를 찾을 수 있는 첫번째 값을 반환하는데
없다면 -1을 반환한다. 그러므로 
index() > -1 이라는 뜻은 은 그 요소에 내가원하는값이 존재한다는 뜻이다. 

33. **position:sticky의 사용법**

    position: fixed와 유사하게 작동하나, 
    조건부 fixed로써 부모박스를 넘어서면 해제가 된다.
    

## ⚠️ 주의사항
