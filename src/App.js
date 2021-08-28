import './App.scss';

const App = () => {
  return (
    <div className="App">
      <h1>Learning Sass</h1>

      <div className="card">
        <div className="card__image">
          image
        </div>
        <div className="card__heading">
          heading
        </div>
        <div className="card__para--normal">
          paragrap normal
        </div>
        <div className="card__para--italic">
          paragrap
        </div>
      </div>
      <button className="btn btn--primary">primary</button>
      <button className="btn btn--secondary">secondary</button>
    </div>
  )
}

export default App;
