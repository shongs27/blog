export default function ThreadForm({
  handleSubmit,
  handleChange,
  handleList,
  threadField,
}) {
  const { title, name, password, content } = threadField;

  function onChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  return (
    <>
      <div>
        <label htmlFor="board-name">작성자</label>
        <input
          type="text"
          id="board-name"
          name="name"
          onChange={onChange}
          value={name}
        />
      </div>

      <div>
        <label htmlFor="board-password">비밀번호</label>
        <input
          type="password"
          id="board-password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </div>

      <div>
        <label htmlFor="board-title">제목</label>
        <input
          type="text"
          id="board-title"
          name="title"
          onChange={onChange}
          value={title}
        />
      </div>

      <div>
        <label htmlFor="board-content">내용</label>
        <textarea
          id="board-content"
          rows="4"
          cols="50"
          name="content"
          onChange={onChange}
          value={content}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button
          style={{ marginRight: '.4em', backgroundColor: 'gray' }}
          type="button"
          onClick={handleList}
        >
          취소
        </button>
        <button
          style={{ marginRight: '2em' }}
          type="button"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </>
  );
}
