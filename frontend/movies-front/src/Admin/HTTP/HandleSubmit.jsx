import axios from "axios"

export const HandleSubmit = async (title, description, selectedRestriction, playtime, poster, BASE_URL) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('rating', selectedRestriction);
    formData.append('playtime', playtime);
    formData.append('poster', poster);
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post(BASE_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${token}`
            }
        });
        console.log(response.data);
        window.alert('Show added succesfully!');
    } catch (error) {
        console.error('There was an error posting the show!', error);
    }
}