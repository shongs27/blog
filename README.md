# 블로그 프로젝트

[위키 테스트](https://github.com/CodeSoom/project-react-6-shongs27.wiki.git)

master 브랜치에 작업
main 브랜치에 통합

- [v][pr3] db 데이터에 따라 블로그 글 목록 렌더링
- [v][pr4] 글 목록에서 해당항목을 누르면 해당 페이지 내용 렌더링
- [v][pr5] 최근포스트 인기포스트 구현

  - [?] 리액트 라우팅 에러 - html에서 baseURL 설정

- [v][pr6] 검색창, 방문자수 통계 구현
  - [] 백엔드에서 searchField의 검색API를 어떻게 꾸며야 할까
- [v][pr7] 글쓰기 기능

  - [v] 로그인 시 글쓰기 버튼이 나타나고 입력하여 버튼을 누르면
  - [v] 글쓰기 버튼 클릭
  - [v] 파일을 등록할 수 있는 홈이 나타나고 거기다가 md파일을 추가해서 서버로 보냄
  - [] get해온 md파일 parse해서 react로 만든다
    클라이언트에서 react-markdown 이용
    md파일을 서버에 올리면 text로 md형식을 저장 - json으로 통신
    text를 받아와서 배열로 순환하면서 처리
    text를 가공해서 리액트 컴포넌트로 전환하고
    그 내용을 children 컴포넌트 형식으로 붙여준다

http://lab.naminsik.com/4011

- react-dropzone 적용
- antd 적용

- 애플 페이지 참조 할 것
- 제로초 트위터 강의 참조
