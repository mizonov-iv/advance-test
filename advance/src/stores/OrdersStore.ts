import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";

export const useOrdersStore = defineStore("orders", () => {

    const getUsers = async () => {
        await axios.get("http://localhost:3000/users")
            .then(response => {
                console.log(response.data)
            })
    }

})