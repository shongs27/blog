import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faHome,
  faFile,
  faGamepad,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export default function HeaderBar() {
  return (
    <>
      <div
        className="left-HeaderBar"
        style={{
          display: 'flex',
          height: '5vh',
          backgroundColor: 'black',
          color: 'gray',
          fontWeight: 'bold',
        }}
      >
        <div className="HeaderBar-home" style={{ marginRight: '20px' }}>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>

        <div className="HeaderBar-resume" style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faFile} />
          <span> 소개</span>
        </div>

        <div className="HeaderBar-game" style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faGamepad} />
          <span> 게임</span>
        </div>

        <div className="HeaderBar-board" style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <span> 방명록</span>
        </div>
      </div>

      <div
        className="right-HeaderBar"
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          right: 5,
          height: '5vh',
          backgroundColor: 'black',
          color: 'gray',
          fontWeight: 'bold',
        }}
      >
        <span> Hong WonBae </span>
        <img src="img/hongs.jpg" alt="홍원배" width="35" height="35" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </>
  );
}
