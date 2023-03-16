import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("user", () => {
    const userInput = ref({
        user: "",
        password: "",
    })

    const updateUserInput = (user: string, password: any) => {
        userInput.value.user = user
        userInput.value.password = password
        console.log(userInput.value)
        loginAxios()
    }

    const validate = () => {
        let result = true
        if (userInput.value.user === '' || userInput.value.user === null) {
            result = false
            console.log("invalid username")
        }
        if (userInput.value.password === '' || userInput.value.password === null || userInput.value.password.length < 8) {
            result = false
            console.log("invalid password")
        }

        return result
    }

    const loginAxios = () => {
        if (validate()) {
            axios.get('http://localhost:3000/users/' + userInput.value.user)
                .then(resp => {
                    console.log(resp)
                    if (Object.keys(resp).length === 0) {
                        console.log('Please Enter valid username');
                    } else {
                        if (resp.data.password === userInput.value.password) {
                            console.log('Success');
                            // sessionStorage.setItem('username', userInput.value.user);
                            // sessionStorage.setItem('userrole',resp.data.role);
                        }else{
                            console.log('Please Enter valid credentials');
                        }
                    }
                }).catch(error => {
                console.log(error);
            });
        }
    }

    return {
        userInput,
        updateUserInput
    }
})