import { Link } from "react-router-dom"

function WatchCard({watch, handleDeleteWatch, user}) {
return (
    <div className="card">
      <div className="card-body">
        <p>Watch Brand/Name: {watch.brand}</p>
        <p>Style: {watch.style}</p>
        <p>Movement: {watch.movement}</p>
        <p>Functionality: {watch.functionality}</p>
        {watch.features ? <p>Features: {watch.features}</p> : <p></p> }
      </div>
      {user?.profile === watch.owner._id &&
        <div>
          <Link 
            className="btn btn-sm btn-warning"
            to="/edit"
            state={{watch}}
          >
            Edit
          </Link>
          <button className="btn btn-sm btn-warning" onClick={() => handleDeleteWatch(watch._id)}>Delete</button>
        </div>
      }
    </div>
  )
}

export default WatchCard