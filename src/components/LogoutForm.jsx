import { getKeyThenIncreaseKey } from 'antd/lib/message';
import { useSelector } from 'react-redux';

export default function LogoutForm({
  form: { userId, title, description, category = 'js' },
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

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);

    const reader = new FileReader();
    reader.onload = function () {
      formData.append('md', this.result);
      handleUpload(formData);
    };

    const files = e.target[3].files;
    let i = 0;
    while (i < files.length) {
      var file = files[i];
      if (/(jpg|png)/.test(file.type)) {
        formData.append('image', file);
      } else {
        reader.readAsText(file);
      }
      i++;
    }
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
            <select
              name="category"
              id="select-category"
              onChange={onChange}
              value={category}
            >
              <option value="js">자바스크립트</option>
              <option value="react">리액트</option>
              <option value="computer">CS</option>
            </select>
          </div>

          {/* react-dropzone으로 바꾸기 */}
          <div className="file">
            <label htmlFor="input-file">파일</label>
            <input type="file" name="file" id="input-file" multiple />
          </div>

          <button type="submit">제출</button>
        </form>
      </div>
    </>
  );
}
