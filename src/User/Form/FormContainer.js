import FormInput from "./FormInput"

const FormContainer = props => {
    const newUserHandler = newUser => {
        props.updateUsers(newUser)
    }

    return <FormInput addUser={newUserHandler} />
}

export default FormContainer