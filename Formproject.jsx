export default function Form(){

    return(
        <div className="container">
              <h1>React Hook Form Validation  </h1>
            <form>
    
                  
                
                

                <div className="Col">
                    <label for="cars">Title</label>
                    <select  name="cars" id="cars" className='form-control'>
                    
                    <option value="volvo"></option>
                    <option value="saab">Saab</option>
                    
                    
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    
                    </select>
                    
                </div>

                <div className="Col">
                    <label htmlFor="Text">First Name</label>
                    <input type="text" className='form-control' />
                </div>
                
                <div className="Col">
                    <label htmlFor="Text">Last Name</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="Col">
                    <label htmlFor="Text">Date of Birth</label>
                    <input type="date" className='form-control date' />
                </div>
                <div className="Col">
                    <label htmlFor="Text">Email</label>
                    <input type="email" className='form-control date' />
                </div>
                <div className="Col">
                    <label htmlFor="Text">Password</label>
                    <input type="Pass" className='form-control date' />
                </div>
                <div className="Col">
                    <label htmlFor="Text">Comfirm Password</label>
                    <input type="Pass" className='form-control date ' />
                </div>
                <div className="Col">
                <input type="Checkbox" className='checkbox' />
                    <span htmlFor="Text">accept Terms and Conditions</span>
                    
                </div>
                <div>
                <button className='btn-register'>Register</button>
                <button className='btn-reset'>Reset</button>
                </div>
             </form>

        </div>
    )

}