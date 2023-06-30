import { useState } from 'react'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import Button from '../Button'
import './Form.css'

const Form = ({ registerCollaborator, squadTitle}) => {

    const [inputName, setInputName] = useState('')
    const [inputPosition, setInputPosition] = useState('')
    const [inputImage, setInputImage] = useState('')
    const [inputSquad, setInputSquad] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        registerCollaborator({ inputName, inputPosition, inputImage, inputSquad })
        formClear()
    }

    const formClear = () => {
        setInputName('')
        setInputPosition('')
        setInputImage('')
        setInputSquad('')
    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={inputName}
                    changeInputFiled={value => setInputName(value)} />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={inputPosition}
                    changeInputFiled={value => setInputPosition(value)} />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={inputImage}
                    changeInputFiled={value => setInputImage(value)} />
                <DropDownList
                    required={true} label='Time'
                    squadTitle={squadTitle}
                    value={inputSquad}
                    changeInputField={value => setInputSquad(value)} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form