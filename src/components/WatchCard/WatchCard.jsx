

function WatchCard({watch, handleDeleteWatch}) {
return (
    <div className="card">
      <div className="card-body">
        <p>Watch Brand: {watch.brand}</p>
        <p>Style: {watch.style}</p>
        <p>Movement: {watch.movement}</p>
        <p>Functionality: {watch.functionality}</p>
        <p>Features: {watch.features}</p>
      </div>
      <div>
        <button onClick={() => handleDeleteWatch(watch._id)}>Delete</button>
      </div>
    </div>
  )
}

export default WatchCard