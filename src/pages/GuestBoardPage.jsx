import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeFormMode,
  changeThread,
  changeThreadField,
  getGuestBoard,
  registerThreadField,
} from '../actions';

import ThreadList from '../components/ThreadList';
import ThreadForm from '../components/ThreadForm';

export default function GuestBoardPage() {
  const dispatch = useDispatch();

  const formMode = useSelector((state) => state.guestBoard.formMode);
  const guestBoard = useSelector((state) => state.guestBoard.board);
  const threadField = useSelector((state) => state.guestBoard.threadField);

  useEffect(() => {
    dispatch(getGuestBoard());
  }, []);

  function handleWriting() {
    dispatch(changeFormMode('writing'));
  }
  function handleList() {
    dispatch(changeFormMode(false));
  }

  function handleChange(name, value) {
    dispatch(changeThreadField(name, value));
  }

  function handleSubmit() {
    if (formMode === 'writing') {
      dispatch(registerThreadField());
    }

    if (formMode === 'modify') {
      dispatch(changeThread());
    }

    handleList();
  }

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
      {formMode ? (
        <ThreadForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleList={handleList}
          threadField={threadField}
        />
      ) : (
        <ThreadList guestBoard={guestBoard} handleWriting={handleWriting} />
      )}
    </>
  );
}
