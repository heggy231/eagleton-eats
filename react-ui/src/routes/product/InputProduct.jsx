import React, {useState} from 'react'

const InputProduct = () => {

  const [name, setName] = useState('')

  const handleInputChange = (e) => setName(e.target.value);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {name};
      const response = await fetch('http://localhost:8080/product', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log('my input response', response);
    } catch (error){
      console.error(error.message);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center">input product</h1>
        <form className="d-flex mt-3" onSubmit={onSubmitForm}>
          <input type="text" className="form-control" placeholder='Enter Product Name' onChange={handleInputChange}/>
          <button className="btn btn-warning">Add Product</button>
        </form>
      </div>
      
    </>
  )
}

export default InputProduct;