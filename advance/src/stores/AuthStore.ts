import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("user", () => {
    const userInput = ref({
        username: "",
        password: "",
    })

    const updateUserInput = (username: string, password: any) => {
        userInput.value.username = username
        userInput.value.password = password
        console.log(userInput.value)

        checkRole()
    }

    const checkRole = () => {

        // const response = axios.post(
        //     "/api/secondary/accident/save/",
        //     userInput.value
        // );
        // if (response) {
        //     let role = response
        // } else {
        //     console.log('error')
        // }


        axios.post(`https://advanse-mizonov-default-rtdb.firebaseio.com/roles.json`, userInput.value)
            .then((response) => {
                if(response.status === 200) {
                    console.log('status 200')
                }
            })
            .catch(error => {
                console.log('что-то пошло не так', error)
            })

    }

    return {
        userInput,
        updateUserInput
    }
})
