import React ,{ useState }from 'react'


const Home = () => {
    
    const [fullName, setFullName ] = useState ({
        fname : '',
        lname : ''
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        setFullName(event.target.value);
    }
    const onSubmits = (event) => {
        event.preventDefault();
        alert('form submitted');
    }

    return (
    <>
    <form onClick={onSubmits}>
    <h1>Hello {fullName.fname} {fullName.lname}</h1>
        
            <input type="text" placeholder='enter your name' onChange={inputEvent} name='fname' value={fullName.fname}/><br/>
            <input type="text" placeholder='enter your name' name='lname' onChange={inputEvent} value={fullName.lname}/>
    </form>
    <button onClick={onSubmits} type='submit'>Submit</button>
    </>
  )
}

export default Home;