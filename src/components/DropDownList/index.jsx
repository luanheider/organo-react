import './DropDownList.css'
const DropDownList = ({ label, squadTitle, required, value, changeInputField }) => {

    const handleClick = (e) => {
        changeInputField(e.target.value)
    }

    return (
        <div className='drop-down-list'>
            <label>{label}</label>
            <select
                required={required}
                value={value}
                onChange={handleClick}>
                <option value=""></option>
                {squadTitle.map((squad) => (
                    <option key={squad}>{squad}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDownList