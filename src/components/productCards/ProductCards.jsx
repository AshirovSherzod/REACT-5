import React, { useState } from 'react'
import './productCards.scss'

const ProductCards = () => {
  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [tel, setTel] = useState("")
  const [address, setAddress] = useState("")
  const [select, seTSelect] = useState("")
  const [students, setStudents] = useState([])
  const [editStudent, setEditStudent] = useState(null)
  
  const hendleSubmit = e => {
    e.preventDefault()
    if(editStudent){
      let index = students.findIndex(el => el.id === editStudent.id)
      let updateStudent = {
        id: editStudent.id,
        name: name,
        birthdate: birthdate,
        tel: tel,
        address: address,
        select: select
      }
      let editedStudent = students
      editedStudent.splice(index, 1, updateStudent)
      setStudents(editedStudent)
      setEditStudent(null)
    }
    else {
      let student = {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        tel: tel,
        address: address,
        select: select
      }
      setStudents(prev => [...prev, student])
    }

    setName("")
    setBirthdate("")
    setTel("")
    setAddress("")
    seTSelect("")

  }

  const hendleDeleteStudent = id => {
    if(confirm("Are you sure?")) {
      let filteredStudent = students?.filter(student => student.id !== id)
      setStudents(filteredStudent)
    }
  }
  
  const hendleEditStudent = student => {
    setEditStudent(student)
    setName(student.name)
    setBirthdate(student.birthdate)
    setAddress(student.address)
    setTel(student.tel)
    seTSelect(student.select)
  }

  const mapCard = students?.map(e => {
    return (
      <div className="product__card" key={e.id}>
          <div className="product__card__img">
          </div>
          <div className="product__card__desc">
            <h1>{e.name}</h1>
            <p>{e.birthdate}</p>
            <p>{e.address}</p>
            <p>{e.select}</p>
          </div>
          <div className="product__card__btns">
            <button onClick={() => hendleDeleteStudent(e.id)}>Delete</button>
            <button onClick={() => hendleEditStudent(e)}>Edit</button>
          </div>
        </div>
    )
  })

  return (
    <section className='product container'>
      <form action="" className='product__form' onSubmit={hendleSubmit}>
        <div className="product__form__input">
          <label htmlFor="fulname">Full Name</label>
          <input id='fulname' type="text" placeholder='Full Name' required value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="product__form__input">
          <label htmlFor="birthdate">Birthdate</label>
          <input id='birthdate' type="date" placeholder='Birthdate' required value={birthdate} onChange={e => setBirthdate(e.target.value)}/>
        </div>
        <div className="product__form__input">
          <label htmlFor="tel">Phone number</label>
          <input id='tel' type="number" placeholder='Phone Number' required value={tel} onChange={e => setTel(e.target.value)}/>
        </div>
        <div className="product__form__input">
          <label htmlFor="address">Address</label>
          <input id='address' type="text" placeholder='Address' required value={address} onChange={e => setAddress(e.target.value)}/>
        </div>
        <div className="product__form__select">
          <select name="" id="" value={select} onChange={e => seTSelect(e.target.value)}>
            <option hidden disabled value="">Gender</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button>{editStudent ? "Save" : "Create"}</button>
      </form>
    <div className="product__cards">
      {mapCard}
    </div>
    </section>
  )
}

export default ProductCards