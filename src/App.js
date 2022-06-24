import './App.css';

function App() {
  return (
    <div className="App">
      <div className="section"></div>
      <div className="preview-card">
        <div className="text-part">
          <h2>Get <span>insights</span> that help your business grow.</h2>
          <p>Discover the benefits of data analytics and
            make better decisions regarding revenue, customer
            experience, and overall efficieny.
          </p>
          <div className="review-part">
            <div className="review">
              <span className="first">10k+</span>
              <span className="last">COMPANIES</span>
            </div>
            <div className="review">
              <span className="first">314</span>
              <span className="last">TEMPLATES</span>
            </div>
            <div className="review">
              <span className="first">12M+</span>
              <span className="last">QUERIES</span>
            </div>
          </div>
        </div>
        <div className="image-part">
          <img src="images/image-header-desktop.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
