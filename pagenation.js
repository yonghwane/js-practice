const data = [
    { title: '패턴', postNumber: 1 },
    { title: '마음가짐', postNumber: 2 },
    { title: 'HTML 기초', postNumber: 3 },
    { title: 'css 기초', postNumber: 4 },
    { title: 'CSSflex', postNumber: 5 },
    { title: 'Mac 계산기 클론하기', postNumber: 6 },
    { title: 'CSS grid', postNumber: 7 },
    { title: 'slice? splice', postNumber: 8 },
    { title: '함수를 정의하는 방법', postNumber: 9 },
    { title: '순열(Permutation) 구현하기', postNumber: 10 },
    { title: '문자열에서 특정 위치의 문자를 변경하고 싶은 경우', postNumber: 11 },
    { title: 'letIt const', postNumber: 12 },
    { title: 'nvm', postNumber: 13 },
    { title: '요소 노드의 텍스트 조작하기(nodeValue, textContent, innerHTML)', postNumber: 14 },
    { title: '자바스크립트의 배열은 배열이 아니다!', postNumber: 15 },
    { title: 'JSON 다루기(JSON.parse), JSON.stringify())', postNumber: 16 },
    { title: '원시 자료형과 참조 자료형', postNumber: 17 },
    { title: '[]===[]는 왜 false인가', postNumber: 18 },
    { title: 'this (동적 바인딩)', postNumber: 19 },
    { title: '유효성 검사를 포함한 간단한 회원가입 폼 페이지 만들기', postNumber: 20 },
    { title: '#fff와 #ffffff', postNumber: 21 },
    { title: '안다고 생각했지만, 헷갈렸던 문법들', postNumber: 22 },
    { title: 'DOM이 뭔가요?', postNumber: 23 },
    { title: '영화 좌석 예약 페이지 만들기 ', postNumber: 24 },
    { title: '테두리가 두 줄처럼 보이는 경우 (border)', postNumber: 25 },
    {
      title: 'IS0 형식의 날짜(yyyy-mm-ddThh:mm:ssz)를 현재 위치 시간대로 변경하기 # ',
      postNumber: 26,
    },
    { title: '페이지네이션', postNumber: 27 },
  ];




//페이지네이션 하는  총정리 비법  
//1. 페이지네이션에 필요한 변수선언(필요한 변수 총 7개)
// 1-1. 페이지당 보여줄 게시물 수
// 1-2. 총 몇개 있는지 보여줄  페이지 번호개수
// 1-3. 게시물을 담을 리스트 변수
// 1-4. 이전, 이후 페이지로 이동할 수 있게 하는 버튼 변수
// 1-5. 초기 세팅할 페이지 번호 

//2. 필요한 페이지 번호의 총개수를 구함
//2-1 총 표현될 페이지 개수는 총 게시물 수 / 페이지당 보여줄 게시물 수
//2-2 그리고 올림을 해주기 위한 Math.ceil()함수를 사용해줌

//3. 필요한 페이지 번호의 개수에 맞게 페이지 버튼을 구성해줌 
// 3-1 setPageButtons()함수를 만들어서 페이지 버튼을 구성해줌
// 3-2 우선 숫자를 표현할 html을 초기화 하고
// 3-3 반복문통해 필요한 페이지번호의 개수만큼 반복을 돌려서 페이지 숫자와 버튼을 만들어줌

//4. 페이지에 해당하는 게시물을 ul변수에다가 박아주기 
// 4-1 setPageOf()함수를 만들어서 페이지에 해당하는 게시물을 ul에다가 박아줌
// 4-2 우선 ul을 초기화 해주고
// 4-3 반복문을 돌려서 해당게시글의 현재 클릭되있는 번호부터 거기서부터 내가 보여주고싶은 
// 게시물의 개수만큼 반복을 돌려서 게시물을 박아줌

//5. 이전, 이후 버튼을 클릭 했을때 거기로 이동하는 함수 생성
// 이전 함수를 클릭했을때 로직 현재페이지가 1보다 클때 조건문을 사용해서 현재페이지의 변수값을 -1ㅇ를 하고
// setPageOf()함수를 호출해서 그 현재페이지의 값을 함수로 넣어서 바꿔준다 
// 그리고 moveSelectedPageHighlight()함수를 호출해서 css적용해줌

//6. 그 기능에 알맞는 css를 적용해줌


const COUNT_PER_PAGE = 6; // 페이지 당 보여줄 게시물 수
const numberButtonWrapper = document.querySelector('.number-button-wrapper'); // 페이지네이션 버튼 wrapper
const ul = document.querySelector('ul'); // 게시물을 담을 unordered list
const prevButton = document.querySelector('.prev-button'); // 이전 페이지 버튼
const nextButton = document.querySelector('.next-button'); // 이후 페이지 버튼
let pageNumberButtons; // 페이지 버튼들

let currentPage = 1; // 초기 페이지 번호




/**
 * 필요한 페이지 번호 개수 구하기
 * @returns {number} - 필요한 페이지 번호 개수
 */
const getTotalPageCount = () => {
  return Math.ceil(data.length / COUNT_PER_PAGE);
};

/**
 * 필요한 페이지 번호 수에 맞게 페이지 버튼 구성하기
 */
const setPageButtons = () => {
  numberButtonWrapper.innerHTML = '';

  for (let i = 1; i <= getTotalPageCount(); i++) {
    numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span`;
  }

  numberButtonWrapper.firstChild.classList.add('selected');
  pageNumberButtons = document.querySelectorAll('.number-button');
};

/**
 * 페이지에 해당하는 게시물 ul에 넣어주기
 * @param {number} pageNumber - 이동할 페이지 번호
 */
const setPageOf = (pageNumber) => {
  ul.innerHTML = '';

  for (
    let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;
    i <= COUNT_PER_PAGE * (pageNumber - 1) + 6 && i <= data.length;
    i++
  ) {
    const li = document.createElement('li');

    // 컨테이너
    const postContainer = document.createElement('div');
    postContainer.className = 'post-container';

    // 글 번호
    const postNumber = document.createElement('p');
    postNumber.className = 'post-number';

    // 글 제목
    const postTitle = document.createElement('p');
    postTitle.className = 'post-title';

    postNumber.textContent = data[i - 1].postNumber;
    postTitle.textContent = data[i - 1].title;

    postContainer.append(postNumber, postTitle);
    li.append(postContainer);
    ul.append(li);
  }
};

/**
 * 페이지 이동에 따른 css 클래스 적용
 */
const moveSelectedPageHighlight = () => {
  const pageNumberButtons = document.querySelectorAll('.number-button'); // 페이지 버튼들

  pageNumberButtons.forEach((numberButton) => {
    if (numberButton.classList.contains('selected')) {
      numberButton.classList.remove('selected');
    }
  });

  pageNumberButtons[currentPage - 1].classList.add('selected');
};

setPageButtons();
setPageOf(currentPage);

/**
 * 페이지 번호 버튼 클릭 리스너
 */
pageNumberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {
    currentPage = +e.target.innerHTML;
    console.log(currentPage);
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  });
});

/**
 * 이전 버튼 클릭 리스너
 */
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});

/**
 * 이후 버튼 클릭 리스너
 */
nextButton.addEventListener('click', () => {
  if (currentPage < getTotalPageCount()) {
    currentPage += 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});
