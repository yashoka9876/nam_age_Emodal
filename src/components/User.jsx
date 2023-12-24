import { useState } from 'react';
import styles from './User.module.css'; 
import ErrorModal from '../UI/ErrorModal';
export default function User(props){
    let [error,setError]=useState()

    const [formData,setFormData]=useState({
        userName:'',
        age:''
    })

  function  handleInputChange(event){
   const{name,value}=event.target;
   setFormData({
    ...formData,
    [name]:value
   })
  }

    function add(e){
        e.preventDefault();
        if(formData.userName.trim()==='' || formData.age.trim()===''){
           setError({
            title:'Invalid input',
            message:'Please enter a valid name and age (non-empty values)'
           })
            
            return;
        }
        props.onAddValue(formData);
        formData.userName='';
        formData.age='';
    }

    function handleError(){
        console.log("kyo pendi dhak.......");
        setError(null)
    }

    return <>
   { error && <ErrorModal title='an error occure' message='ashoka this one is error'  onError={handleError}/>}
        <div className={styles.User}>
            <form>
                <div className={styles.Dinput}>
                    <label>User Name</label>
                    <input
                     type='text'
                     name='userName'
                     onChange={handleInputChange}
                     value={formData.userName}
                     ></input>
                </div>
                <div className={styles.Dinput}>
                    <label>Age(Years)</label>
                    <input 
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleInputChange}
                    ></input>
                </div>
                <button onClick={add}>Add Item</button>
            </form>
        </div>
        <div className={styles.User}>
            <ul>
                {props.Value.map((obj)=>{
                    return <li key={obj.id}>{`${obj.name} (${obj.age}) years old`}</li>
                })} 
            </ul>
        </div>
    </>
}