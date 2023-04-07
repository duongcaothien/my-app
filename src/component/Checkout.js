import React from 'react'

const handlesubmit = () => {
    alert('Succesful');
}




const Checkout = () => {
  return (
    <div className='container'>
        <br></br>
        <label for="basic-url" class="form-label mb-2">Your FullName</label>
        <div class="input-group mb-3">
  <input
    type="text"
    class="form-control"
    aria-label="Username"
    aria-describedby="basic-addon1"
  required/>
</div>


<label for="basic-url" class="form-label">Address</label>
<div class="input-group mb-3">
  <input
    type="text"
    class="form-control"
    id="basic-url1"
    placeholder='Address'
    aria-describedby="basic-addon3"
  />
</div>

<label for="basic-url" class="form-label">Phone Number</label>
<div class="input-group mb-3">
  <input
    type="text"
    class="form-control"
    placeholder="Phone Number"
   required/>
</div>
<label for="basic-url" class="form-label">Email</label>
<div class="input-group mb-3">
  <input
    type="text"
    class="form-control"
    placeholder="Email"
   required/>
</div>
<button className='btn btn-outline-dark me-2' onClick={handlesubmit} > Submit</button>
    </div>
  )
}

export default Checkout