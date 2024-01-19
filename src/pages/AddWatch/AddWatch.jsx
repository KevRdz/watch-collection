import { useState, useRef, useEffect } from "react"


function AddWatch() {
  const [formData, setFormData] = useState({
    brand: "",
    style: "",
    movement: "",
    features: "",
  })

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()
  console.log(formElement);

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = e => {
    console.log(e);
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <h1>Add Watch</h1>
      <form autoComplete="off" ref={formElement}>
        <div className="form-group mb-3">
          <label htmlFor="brand-name" className="form-label">
            Watch Brand
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="brand-name" 
            name="brand"
            value={formData.brand}
            onChange={handleChange}
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
            value={formData.style}
            onChange={handleChange}
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
            value={formData.movement}
            onChange={handleChange}
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
            name="features"
            value={formData.features}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary-btn-fluid" disabled={!validForm}>
            Add Watch
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddWatch