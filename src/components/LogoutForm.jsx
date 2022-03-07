export default function LogoutForm({ handleLogout, handleUpload }) {
  function onSubmit(e) {
    e.preventDefault();
    const category = e.target[0].value;
    const file = e.target[1].files[0];

    const reader = new FileReader();
    reader.onload = function () {
      const form = {
        category: category,
        markdown: reader.result,
      };
      handleUpload(form);
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
          <div>
            <label htmlFor="select-category">카테고리</label>
            <select name="category" id="select-category">
              <option value="js">자바스크립트</option>
              <option value="react">리액트</option>
              <option value="computer">CS</option>
            </select>
          </div>

          {/* react-dropzone으로 바꾸기 */}
          <div>
            <label htmlFor="input-file">파일</label>
            <input type="file" name="file" id="input-file" />
          </div>

          <button type="submit">제출</button>
        </form>
      </div>
    </>
  );
}
