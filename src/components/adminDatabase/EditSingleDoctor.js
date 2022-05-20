import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditSingleDoctor.css'

const EditSingleDoctor = () => {
    const params=useParams();
    const [doctor,setDoctor]=useState({});
    const [_id,set_id]=useState("");
    const [id,setId]=useState('');
    const [name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [img,setImg]=useState("");
    const [specialist,setSpecialist]=useState("");
    const [timeSlot1,setTimeSlot1]=useState("");
    const [timeSlot2,setTimeSlot2]=useState("");
    const [timeSlot3,setTimeSlot3]=useState("");
    const [availableDays,setAvailableDays]=useState("");
    const [visit,setVisit]=useState("");
    const [phone,setPhone]=useState("");
    const [website,setWebsite]=useState("");
    // const [username,setUsername]=useState(doctor.username);

    useEffect(()=>{
        fetch("https://floating-basin-02241.herokuapp.com/doctors")
        .then(res=>res.json())
        .then(data=>{
            for(const d of data){
                if(d._id===params.id){
                    console.log("Hello");
                    setDoctor(d);
                    set_id(d._id);
                    setId(d.id);
                    setName(d.name);
                    setUsername(d.username);
                    setEmail(d.email);
                    setImg(d.img);
                    setSpecialist(d.specialist);
                    setTimeSlot1(d.timeSlot1);
                    setTimeSlot2(d.timeSlot2);
                    setTimeSlot3(d.timeSlot3);
                    setAvailableDays(d.availableDays);
                    setVisit(d.visit);
                    setPhone(d.phone);
                    setWebsite(d.website);
                }
            }
           
        })
    },[params.id])

    const changeDoctorInfo=(e)=>{
        e.preventDefault();
        const newDoctor={id,name,username,email,img,specialist,timeSlot1,timeSlot2,timeSlot3,availableDays,visit,phone,website};
        setDoctor(newDoctor);
        const isConfirm=window.confirm("Are you sure to update the info?");
        if(isConfirm){
            fetch(
                `https://floating-basin-02241.herokuapp.com/doctors/${params.id}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newDoctor),
                }
            )
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    alert("Data is updated successfully");
                    window.location.reload();

                }
                
            })
        }
        
    }

    return (
        <div className='d-lg-flex d-md-flex justify-content-between align-items-center'>
        <div className='edit-single-doctor-form-container'>
            
        <form onSubmit={changeDoctorInfo}>
            <div className='edit-doctor-input-container' >
                <span className="doctor-key-name">Id : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>set_id(e.target.value)} value={_id} disabled/>
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Serial Number : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setId(e.target.value)} value={id} />

            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Name : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Username : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setUsername(e.target.value)} value={username} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Email : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Image Link : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setImg(e.target.value)} value={img} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Specialist Category : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setSpecialist(e.target.value)} value={specialist} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">First Timeslot : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setTimeSlot1(e.target.value)} value={timeSlot1} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Second Timeslot : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setTimeSlot2(e.target.value)} value={timeSlot2} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Third Timeslot : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setTimeSlot3(e.target.value)} value={timeSlot3} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Available Days : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setAvailableDays(e.target.value)} value={availableDays} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Visit : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setVisit(e.target.value)} value={visit} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Phone : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} />
            </div>
            <div className='edit-doctor-input-container'>
                <span className="doctor-key-name">Website : </span>
                <input className="edit-doctor-input" type="text" onChange={(e)=>setWebsite(e.target.value)} value={website} />
            </div>      
            <input type="submit" className='btn-edit-doctor-submit'/>
        </form>

        </div>
        <div className='edit-doctor-bg-image-container'>
    <img src="https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4876.jpg?w=740&t=st=1652989249~exp=1652989849~hmac=1c17bc90c0eec59e3d9e8162d9b9d322c1df32ea05c48778fec4974b3cbcdb82" alt="" className='edit-doctor-bg-image'/>
</div>
        </div>
    );
};

export default EditSingleDoctor;