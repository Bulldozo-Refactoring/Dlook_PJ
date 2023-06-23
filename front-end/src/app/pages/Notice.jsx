import 'app/style/Tab.css';
import FreeBoard from 'app/components/Board/FreeBoard';
import 'app/style/style.css';

function notice() {
  return (
    <div className="container">
      <h1>공지사항</h1>
      <FreeBoard />
    </div>
  );
}

export default notice;
