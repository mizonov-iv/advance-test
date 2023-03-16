import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("user", () => {
    const userInput = ref({
        user: "",
        password: "",
    })

    const role = ref("")

    const updateUserInput = (user: string, password: any) => {
        userInput.value.user = user
        userInput.value.password = password
        console.log(userInput.value)
        checkRole()
        // login()
    }

    const checkRole = async () => {
        const resp = await axios.post("http://localhost:3000/users", userInput.value).then(response => {
            console.log(response)
        })
        // console.log(resp.data)
        // resp.data.forEach((user: any) => {
        //     console.log(user)
        // })
    }

    const login = () => {
        axios.post("http://localhost:3000/", JSON.stringify(userInput.value))
            .then(response => {
                console.log(response)
            })
    }

    return {
        userInput,
        updateUserInput
    }
})
