import { useSelector } from 'react-redux';

export default function LogoutForm({
  form: { userId, title, description },
  handleChange,
  handleLogout,
  handleUpload,
}) {
  function onChange(e) {
    const {
      target: { name, value },
    } = e;

    handleChange(name, value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const category = e.target[2].value;
    const file = e.target[3].files[0];

    const reader = new FileReader();
    reader.onload = function () {
      const data = {
        writer: userId,
        title,
        description,
        category,
        content: reader.result,
      };

      handleUpload(data);
    };
    reader.readAsText(file);

    // const formData = new FormData();
    // formData.append('category', e.target[0].value);
    // formData.append('file', e.target[1].files[0]);
    // handleUpload(formData);
  }

  return (
    <>
      <div className="btn-logout">
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      </div>

      <div className="form-upload">
        <form onSubmit={onSubmit}>
          <div className="title">
            <label htmlFor="input-title">타이틀</label>
            <input
              type="text"
              name="title"
              id="input-title"
              value={title}
              onChange={onChange}
            />
          </div>

          <div className="description">
            <label htmlFor="textArea-description">설명</label>
            <textarea
              name="description"
              id="textArea-description"
              rows="4"
              cols="50"
              value={description}
              onChange={onChange}
            />
          </div>

          <div className="category">
            <label htmlFor="select-category">카테고리</label>
            <select name="category" id="select-category">
              <option value="js">자바스크립트</option>
              <option value="react">리액트</option>
              <option value="computer">CS</option>
            </select>
          </div>

          {/* react-dropzone으로 바꾸기 */}
          <div className="file">
            <label htmlFor="input-file">파일</label>
            <input type="file" name="file" id="input-file" />
          </div>

          <button type="submit">제출</button>
        </form>
      </div>
    </>
  );
}
