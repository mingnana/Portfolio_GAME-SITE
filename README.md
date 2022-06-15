
# [Game_site](https://mingnana.github.io/Portfolio_GAME-SITE/index.html) 


#### 1. 프로젝트 소개
```md
* Electronic Arts의 ui를 게임이라는 주제에 맞춰 고도화하여 개발한 첫번째 포트폴리오입니다.
```

#### 2. 프로젝트 기간
```md
* 2022.02.05 ~ 2022.05.25
```

#### 3. 사용 stack 및 tool
```md
1) Front-end stack 
  - HTML5, CSS3, JQuery JavaScript 으로 구현 

2) IDE
  - Visual Studio Code
```

#### 4. 프로젝트 url

1) [mainPage](https://mingnana.github.io/Portfolio_GAME-SITE/index.html)
2) [subPage1](https://mingnana.github.io/Portfolio_GAME-SITE/mass.html)
3) [subPage2](https://mingnana.github.io/Portfolio_GAME-SITE/lost_in_Random.html)
4) [subPage3](https://mingnana.github.io/Portfolio_GAME-SITE/nhl.html)
5) [subPage4](https://mingnana.github.io/Portfolio_GAME-SITE/it_takes_two.html)


#### 5. Electronic Arts 사이트 분석
<img src="https://user-images.githubusercontent.com/96216178/171073385-d04aaed5-2c71-4eab-890a-5d9492c8cbda.JPG" width="800" >

```md
* 게임이라는 컨셉을 고려했을때 메인 비주얼의 정적인 이미지가 다소 역동적인 느낌 부족
* 핵심이 되는 local-nav가 비주얼에 비해 적은 비중을 차지하며 폰트의 크기가 작아 사용자접근성이 낮음
* network-nav는 검정색, local-nav는 흰색으로 통일감 부족, 구조의 단조로움, 비주얼과의 조화가 어우러지지 않음
```

<img src="https://user-images.githubusercontent.com/96216178/171073604-a13f2bc1-62fa-43e6-9604-53c22d2a55a7.JPG" >

```md
크게 나뉘어진 두개의 section의 ui가 매우 유사한 형태를 띄어 구조상 다채롭지 못함
```

#### 6. 프로젝트 설명
```md
* HomePage
  처음 접속하면 나오는 메인페이지로 html과 css만으로 드롭메뉴 구현
  햄버거 버튼을 클릭하면 사이트맵 역할을 하는 영역이 나오며, 가장 상단 메뉴들은 각 서브페이지를 연결시켜 놓음
  이때, 스크롤 불가능하도록 막아둠
```
<img src="https://user-images.githubusercontent.com/96216178/171074892-a6f2c802-5525-4e8a-a022-2359dcb8d4f9.gif">

```md
* 타이핑 효과
  split함수로 전체 텍스트를 여러개의 문자열로 분리한후 전체 텍스트의 길이만큼 반복해서 나오도록 if문을 사용
  setInterval 함수로 반복하는 형태
```
<img src="https://user-images.githubusercontent.com/96216178/171075233-305860f5-b4a0-48dd-a910-3e7965c1ddab.gif">

```md
* 숨겨진 영역 등장
  more Game를 눌렀을때 숨겨져있던 영역이 자연스럽게 열리고, 다시 버튼을 눌렀을때 숨겨짐
```
<img src="https://user-images.githubusercontent.com/96216178/171075706-faa20bd3-d984-4ff7-9277-298e08cf75ee.gif">

```md
* 이미지 슬라이딩
  방향버튼을 누르면 해당방향으로 이동
* 큰 이미지 mouseover시 비디오 자동재생
```
<img src="https://user-images.githubusercontent.com/96216178/171076057-42c190e0-4c8d-4430-82ff-a2abde19b3cb.gif">

```md
* 탭메뉴
  버튼을 누르면 해당 콘텐츠가 보여지는 탭메뉴 구현
  웹접근성을 준수하여 tab키 적용 가능
```
<img src="https://user-images.githubusercontent.com/96216178/171076198-e0ec043c-548c-42f2-b9a0-ab537e868aa2.gif">

--------

#### 7. 프로젝트 Review

```md
 1) 프론트엔드 지식이 전무한 상태에서 html5를 통한 마크업구축과 css를 이용해 정적인 뷰페이지를 구현하고
    개선할 수 있는 단계까지 발전할 수 있었으며, 기본이 되는 html5과 css에 대한 이해도를 높였음
 2) ui를 따라하는 단순 기능 구현을 넘어, 사용자의 접근성을 고려한 ui 개발과 코드에 가치를 담고자 노력했음
```
