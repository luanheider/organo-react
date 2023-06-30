import { useState } from "react"
import Banner from "./components/Banner"
import Form from './components/Form'
import Squad from "./components/Squad"

const App = () => {

  const squads = [
    {
      title: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      title: 'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      title: 'Data-Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      title: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      title: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      title: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      title: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const squadTitle = squads.map(({ title }) => title)

  const [collaborators, setCollaborators] = useState([])

  const newRegisterCollaborator = (collaborator) => {
    debugger
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <>
      <Banner />
      {/* passando uma função como prop pra resgatar os dados do input e trazer */}
      <Form squadTitle={squadTitle} registerCollaborator={collaborator => newRegisterCollaborator(collaborator)} />

      {squads.map(squad => <Squad 
        key={squad.title}
        title={squad.title}
        primaryColor={squad.primaryColor}
        secondaryColor={squad.secondaryColor} 
        collaborators={collaborators.filter(collaborator => collaborator.inputSquad === squad.title)}/>)}
    </>
  )
}

export default App