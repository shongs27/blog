import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faHome,
  faFile,
  faGamepad,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <div
        className="left-header"
        style={{
          display: 'flex',
          height: '5vh',
          backgroundColor: 'black',
          color: 'gray',
          fontWeight: 'bold',
        }}
      >
        <div className="header-home" style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faHome} />
        </div>

        <div className="header-resume" style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faFile} />
          <span> 소개</span>
        </div>

        <div className="header-game" style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faGamepad} />
          <span> 게임</span>
        </div>

        <div className="header-board" style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <span> 방명록</span>
        </div>
      </div>

      <div
        className="right-header"
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
        {/* <img src="../../assets/hongs.jpg" alt="홍원배" width="35" height="35" /> */}
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </>
  );
}
