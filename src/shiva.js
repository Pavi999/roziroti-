const Shiva=(props)=>{
  const {details}=props
  const {title,author,topic,image_url}=details
  return(
    <div>
      <h1>{title}</h1>
      <img src={image_url} alt={title}/>
      <p>{topic}</p>
      <p>{author}</p>
    </div>
  )
}

export default Shiva