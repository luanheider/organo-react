import './Collaborator.css'

const Collaborator = ({inputName, inputPosition, inputImage, background}) => {
  return (
    <div className='collaborator'>
        <div className='header' style={{backgroundColor: background}}>
            <img src={inputImage} alt={inputName}/>
        </div>
        <div className='footer'>
            <h4>{inputName}</h4>
            <h5>{inputPosition}</h5>
        </div>
    </div>
  )
}

export default Collaborator