import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className='grid-container'>
      <div className='header'>Header</div>
      <div className='menu'>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#tab-1">案一</a>
            <div className="collapse" id="tab-1">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link px-5" href="#" >輸入案件</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-5" href="#">輸入案件</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-5" href="#">輸入案件</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className='main'>3</div>
    </div>
  );
}

export default App;
