import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import {useRouter} from "vue-router";

export const useOrdersStore = defineStore("orders", () => {
    const router = useRouter()
    let allOrders: any = ref([])

    const getAllOrders = () => {
         axios.get("http://localhost:3000/events")
            .then(response => {
                allOrders.value = response.data
            })
             .catch((err) => {
                 console.log(err)
             })
    }

    const addNewOrder = async (newOrder: any) => {
        const newOrderID = returnLastItem(allOrders.value) + 1
        await axios.post("http://localhost:3000/events/", {...newOrder, id: newOrderID})
        getAllOrders()
        router.push('/orders')
    }

    const returnLastItem = (arr: any) => {
        return arr[arr.length - 1].id
    }

    const deleteOrder = async (order: any) => {
        await axios.delete(`http://localhost:3000/events/${order.id}`)
        getAllOrders()
    }

    const completeTheOrder =  async (order: any) => {
        console.log(order.status)
        await axios.put(`http://localhost:3000/events/${order.id}`, {...order, status: "Выполнен"})
        getAllOrders()
    }

    return {
        allOrders,
        getAllOrders,
        addNewOrder,
        deleteOrder,
        completeTheOrder
    }
})