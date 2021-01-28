const handleChange =  (event, formData, setFormData) => {
    const value = event.currentTarget.value
    const name = event.currentTarget.name

    setFormData({...formData, [name]: value})
}

export default {
    handleChange,
};