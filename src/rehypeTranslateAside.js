import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export default function () {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type === 'raw') {
        // aside로 끝나는 항목이면 해당 index 노드를 삭제
        // aside로 시작하는 항목이면 원래 노드 안에 있는 내용을 복사하고 hastscript 라이브러리의 h()를 이용해서
        // { type: 'element', tagName: 'aside', children: Array(1) ... }로 바꾼다
        // {position: {start: {…}, end: {…}}} 도 가지게 하고 내용을 바꿈

        if (/<\/aside>$/.test(node.value)) {
          parent.children.splice(index, 1);
        }

        if (/^<aside>/.test(node.value)) {
          const text = node.value.replace(/^<aside>/, '');
          const position = node.position || {};

          const context = {
            type: 'text',
            value: text,
          };
          const element = h('aside', context);
          element.position = position;

          //부모가 없으면 tree 객체 전체가 선택됨
          parent.children[index] = element;
        }
      }
    });
  };
}
