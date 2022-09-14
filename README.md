# 블로그 프로젝트

ec2 : 52.78.168.219

- 로그인 해서 markdown을 직접 등록하여 포스트하는 방식
- AWS EC2와 CloudFront등을 활용해 **https 프로토콜** **적용**
- express 활용, Restfull 한 설계를 통한 **‘좋아요’**, **‘방명록’, ‘검색’** 기능 [[백엔드 참조코드]](https://github.com/shongs27/blog/tree/back/back)
- Google Analytics API(Data v1)  등을 활용한 **실시간 방문자 집계** 지원
- *저는 이렇게 고민하고 해결합니다!*
    - **이슈1 - AST를 이용한 관련 플러그인을 직접 제작하여 해결**
        - Notion으로 작성되어서 export되어진 markdown파일은 <aside />라는 특정한 요소가 남아 있고, 해당 요소는 [react-markdown](https://github.com/remarkjs/react-markdown)으로 렌더링이 되지 않는 이슈 발생
        - markdown 파일의 특정 형식 (<aside />)만을 제거하기 위해 AST를 이용해 특정 태그만을 수정하는 플러그인을 다른 플러그인들과 비교하며 직접 만들어서 이슈를 해결 [**[참조코드]**](https://github.com/shongs27/blog/blob/master/src/rehypeTranslateAside.js)
            
            
    - **이슈2 - AmazonS3를 이용하지 않고 base64 인코딩을 통해 서버에 이미지 저장**
        - 블로그 포스트에 이미지를 등록하기 위해서는 AWS S3를 사용해야 했고 고정 비용이 지출되어야 하는 이슈 발생
        - express server(ec2)에서 이미지를 buffer 형태로 MongoDB에 바로 저장하여 S3를 이용하지 않는 방법으로 비용지출을 0으로 만들 수 있었습니다.
        - 포스트를 불러올 때, 클라이언트는 response로 받은 buffer 이미지를 base64 디코딩을 한 뒤 렌더링합니다.
        
        ⇒ base64인코딩을 통해 파일을 text형태로 저장할 수 있다는 작은 CS지식으로 새로운 방법을 찾았습니다
        
        [[클라이언트 전송 참조 코드]](https://github.com/shongs27/blog/blob/master/src/components/LogoutForm.jsx) / [[백엔드 참조 코드]](https://github.com/shongs27/blog/blob/back/back/routes/post.js) / [[base64로 렌더링코드]](https://github.com/shongs27/blog/blob/master/src/components/MarkdownRender.jsx)
