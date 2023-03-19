import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import {useRouter} from "vue-router";


export const useAuthStore = defineStore("user", () => {
    const router = useRouter();

    // FORM DATA FROM LOGIN PAGE
    const userInput = ref({
        user: "",
        password: "",
    })

    // VALIDATION
    let inputIsValidated = false;
    let validationsErrors: any = ref([]);

    // USER WITH DEFAINED ROLE
    const authorizedUser = ref({
        name: "",
        role: ""
    })

    // UPDATE USERS INPUT
    const updateUserInput = (user: string, password: any) => {
        userInput.value.user = user;
        userInput.value.password = password;
    }

    // LOGIN VALIDATION
    const validate = () => {

        if (userInput.value.user === "" || userInput.value.user === null) {
            inputIsValidated = false;
            validationsErrors.value.push('Неправильный логин');
            return
        }

        if (userInput.value.password === '' || userInput.value.password === null || userInput.value.password.length < 8) {
            inputIsValidated = false;
            validationsErrors.value.push('Пароль должен быть не менее 8 символов');
            return
        }

        return inputIsValidated = true;
    }

    // LOGIN LOGIC
    const login = async (user: string, password: any) => {
        updateUserInput(user, password);

        if (validate()) {
            await axios.get('http://localhost:3000/users/' + userInput.value.user)
                .then(resp => {
                    if (Object.keys(resp).length === 0) {
                        validationsErrors.value.push('Неправильный логин');
                    } else {
                        if (resp.data.password === userInput.value.password) {
                            router.push('/orders');
                            authorizedUser.value.name = resp.data.name;
                            authorizedUser.value.role = resp.data.role;
                        } else {
                            validationsErrors.value.push('Неправильный пароль');
                        }
                    }
                }).catch(error => {
                    validationsErrors.value.push('Пользователь не найден');
                    console.log(error);
            });
        };
    };

    // BACK TO LOGIN PAGE
    const goToLoginPage = () => {
        authorizedUser.value.name = "";
        authorizedUser.value.role = "";
        router.push('/');
    };

    return {
        userInput,
        updateUserInput,
        login,
        validationsErrors,
        authorizedUser,
        goToLoginPage
    }
})