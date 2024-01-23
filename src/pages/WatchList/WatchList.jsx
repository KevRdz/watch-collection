

function WatchList(props) {
  return (
    <>
      <h1>Watch List</h1>
      <div>
        {props.watches.map(watch => {
          <div key={watch._id}>
            <p>Watch Brand: {watch.brand}</p>
            <p>Style: {watch.style}</p>
            <p>Movement: {watch.movement}</p>
            <p>Functionality: {watch.functionality}</p>
            <p>Features: {watch.features}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default WatchList