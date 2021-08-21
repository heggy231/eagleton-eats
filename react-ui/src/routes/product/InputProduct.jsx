import React, {useState} from 'react'

const InputProduct = () => {

  const [name, setName] = useState('')

  const handleInputChange = (e) => setName(e.target.value);

  return (
    <>
      <div className="container">
        <h1 className="text-center">input product</h1>
        <form className="d-flex mt-3">
          <input type="text" className="form-control" placeholder='Enter Product Name' onChange={handleInputChange}/>
          <button className="btn btn-warning">Add Product</button>
        </form>
      </div>
      
    </>
  )
}

export default InputProduct;