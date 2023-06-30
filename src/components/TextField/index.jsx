import './TextField.css'
const TextField = ({ label, placeholder, required, value, changeInputFiled }) => {
  const modifyPlaceholder = `${placeholder}...`

  const getInputValue = (e) => {
    changeInputFiled(e.target.value)
  }

  return (
    <div className='text-field'>
      <label>{label}</label>
      <input
        value={value}
        required={required}
        placeholder={modifyPlaceholder}
        onChange={getInputValue} />
    </div>
  )
}

export default TextField