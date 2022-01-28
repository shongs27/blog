import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faHome } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        height: '5vh',
        backgroundColor: 'black',
        color: 'gray',
        fontWeight: 'bold',
      }}
    >
      <div class="header-home" style={{ marginRight: '10px' }}>
        <FontAwesomeIcon icon={faHome} />
      </div>

      <div class="header-resume" style={{ marginRight: '10px' }}>
        <img
          height="50"
          width="50"
          style={{ backgroundColor: 'white' }}
          src="https://unpkg.com/simple-icons@v6/icons/notion.svg"
        />
        <span>소개</span>
      </div>

      <div class="header-game" style={{ marginRight: '10px' }}>
        <img
          height="50"
          width="50"
          style={{ backgroundColor: 'white' }}
          src="https://unpkg.com/simple-icons@v6/icons/nintendogamecube.svg"
        />
        <span>게임</span>
      </div>

      <div class="header-game" style={{ marginRight: '10px' }}>
        {/* <img
          height="50"
          width="50"
          style={{ backgroundColor: 'white' }}
          src="https://unpkg.com/simple-icons@v6/icons/nintendogamecube.svg"
        /> */}
        <i class="fab fa-accessible-icon"></i>
        <span>게임</span>
      </div>

      <div class="header-board" style={{ marginRight: '10px' }}>
        <FontAwesomeIcon icon={faChalkboardTeacher} />
        <span>방명록</span>
      </div>
    </div>
  );
}
