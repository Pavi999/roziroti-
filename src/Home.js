const Home=(props)=>{
    const {details}=props
    const {title,body,userId}=details
    return(
        <div>
            <h1>{userId}</h1>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Home