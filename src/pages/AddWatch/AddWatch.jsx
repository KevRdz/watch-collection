

function AddWatch() {
  return (
    <div>
      <h1>Add Watch</h1>
      <form autoComplete="off">
        <div className="form-group mb-3">
          <label htmlFor="brand-name" className="form-label">
            Watch Brand
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="brand-name" 
            name="brand" 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="style-input" className="form-label">
            Watch Style
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="style-input" 
            name="style" 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="movement-input" className="form-label">
            Watch Movement
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="movement-input" 
            name="movement" 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="feature-input" className="form-label">
            Other Features
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="feature-input" 
            name="feature" 
            required 
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary-btn-fluid">
            Add Watch
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddWatch