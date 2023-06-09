export default ChangeProfile=()=>{
    const [newuserName, setnewUserName]
    return (
        <div>
            <input onChange={(event)=> {setnewUserName(event.target.value)}}/>
            <button onClick={}>Change username</button>
        </div>
    )
}