import React from 'react';
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./forms.css";

function AddOwner() {
  return (
    <div>
      <section className='contact mb' cover={img}>
        <Back name='Welcome !' title='Start your Business by Renting Houses' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h2>Fillup The Form</h2> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Last Name' />
              <input type='text' placeholder='First Name' />
            </div>
            <div>
              <input type='email' placeholder='Email' />
              <input type='tel' placeholder='Phone Number' />
              <input type='text' placeholder='Zip Code' />
            </div>
            <input type='text' placeholder='Address' />
            <div>
              <input type='date' placeholder='Birthday' />
              <select name="sexe">
                <option value="">Sex</option>
                <option value="M">Male</option>
                <option value="F">Femal</option>
              </select>
            </div>
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddOwner