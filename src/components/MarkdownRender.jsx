import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeTranslateAside from '../rehypeTranslateAside';

const MarkDownStyle = styled.div({
  fontSize: '1rem',
  lineHeight: '2.5rem',
});

// const testMarkdown = `
// # 제목
// ## 부제목

// **주목**하세요
// \`\`\`
//     const a = 30
// \`\`\`

// ![이미지](https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTdfMjcx%2FMDAxNjQ1MTAyMDg5NTEz.5fL3pzGdTfzGj3pmmUlKOe1qfqOSZ3_YbPLKTDf8r_Yg.NqHbPHQ1GuHngC4B9LhZY85GDD2zgqgJ0Zjit46ncr0g.JPEG.869007%2F3%25BF%25F9_%25C0%25CE%25BB%25E7%25B8%25BB_%25282%2529.jpg&type=sc960_832)

// ~one~
// Just a link: https://reactjs.com.
// [네이버 사이트](https://www.naver.com)

// > 장강은 도도하게 흐른다
// `;

export default function MarkdownRender({ markdown }) {
  return (
    <MarkDownStyle>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeTranslateAside]}
        components={{
          blockquote: ({ ...props }) => (
            <blockquote
              style={{
                borderLeft: '.2rem solid',
                backgroundColor: '#e5eaee',
                marginLeft: 0,
                paddingLeft: '1em',
              }}
              {...props}
            />
          ),
          code: ({ node, ...props }) => (
            <pre
              style={{
                backgroundColor: '#e5eaee',
                padding: '1rem',
                lineHeight: '1.5rem',
                margin: '2rem auto',
                whiteSpace: 'pre-wrap',
              }}
              {...props}
            />
          ),
          aside: ({ ...props }) => (
            <blockquote
              style={{
                borderLeft: '.2rem solid',
                backgroundColor: '#74b9ff',
                marginLeft: 0,
                paddingLeft: '1em',
              }}
              {...props}
            />
          ),
        }}
      />
    </MarkDownStyle>
  );
}
