

function WatchCard({watch}) {
return (
    <div className="card">
      <div className="card-body">
        <p>Watch Brand: {watch.brand}</p>
        <p>Style: {watch.style}</p>
        <p>Movement: {watch.movement}</p>
        <p>Functionality: {watch.functionality}</p>
        <p>Features: {watch.features}</p>
      </div>
    </div>
  )
}

export default WatchCard