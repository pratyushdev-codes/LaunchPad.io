import React from 'react'

const Appointments = () => {
  return (
    <div >
      <h2 style={{color:"white", fontSize:"30px"}}>Book an Appointment</h2>
      <br/>

<form>
  {/* Name */}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{color:"white"}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" style={{color:"grey"}}>Enter a valid Email Address.</div>
  </div>

  {/* Name */}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{color:"white"}}>Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" style={{color:"grey"}}>We'll never share your email with anyone else.</div>
  </div>

  {/* Time SLot */}
 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{color:"white"}}>Time Slot</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='slot' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" style={{color:"grey"}}>We'll never share your email with anyone else.</div>
  </div>

{/* Describle your illness */}

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"style={{color:"white"}}>Describe Your Illness</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name='describe' rows="3"></textarea>
</div>




 
  <button type="submit" class="btn btn-primary" style={{borderRadius:"20px"}}>Submit</button>
</form>


    </div>
  )
}

export default Appointments