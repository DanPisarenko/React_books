import axios from "axios";


export const getBooks = async () => {
    try {
        const res = await axios.get(`https://fakerapi.it/api/v1/books?_quantity=12`);
        return res.data.data;
    } catch (e) {
        console.log('Error get books =>' ,e);
    }
};
