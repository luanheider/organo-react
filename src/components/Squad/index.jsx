import './Squad.css'
import Collaborator from '../Collaborator'

const Squad = ({ title, primaryColor, secondaryColor, collaborators }) => {
    const backgroundColorCss = { backgroundColor: secondaryColor }
    const borderColorCss = { borderColor: primaryColor }

    return (
        collaborators.length > 0 && (
            <section className='squad' style={backgroundColorCss}>
                <h3 style={borderColorCss}>{title}</h3>
                <div className='collaborators'>
                    {collaborators.map(collaborator => <Collaborator 
                        key={collaborator.inputName} 
                        inputName={collaborator.inputName} 
                        inputPosition={collaborator.inputPosition} 
                        inputImage={collaborator.inputImage} 
                        background={primaryColor}
                    />)}
                </div>
            </section>
        )
    )
}

export default Squad