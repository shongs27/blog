import ThreadForm from '../components/ThreadForm';

export default function GuestBoardModifyPage() {
  return (
    <>
      <h2
        style={{
          padding: '1em 0',
          borderBottom: '1px solid rgb(230, 230, 230)',
        }}
      >
        방명록
      </h2>
      <ThreadForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleMode={handleMode}
        threadField={threadField}
      />
    </>
  );
}
