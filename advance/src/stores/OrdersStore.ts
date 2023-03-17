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

    const addNewOrder = (newOrder: any) => {
        const newOrderID = returnLastItem(allOrders.value)
        const order = {...newOrder, id: newOrderID}
        console.log(order)
        allOrders.value.push(order)
        console.log(allOrders.value)
        router.push('/orders')
    }

    const returnLastItem = (arr: any) => {
        return arr[arr.length - 1]
    }

    // const deleteOrder = (order: any) => {
    //     allOrders.value = allOrders.value.filter((element: any) => element.id !== order.id)
    // }

    const deleteOrder = async (order: any) => {
        await axios.delete(`http://localhost:3000/events/${order.id}`)
        getAllOrders()
        // allOrders.value = allOrders.value.filter((element: any) => element.id !== order.id)
    }

    const completeTheOrder = (order: any) => {
        console.log(order.status)
        order.status = "Выполнен"
        console.log(order.status)
    }

    return {
        allOrders,
        getAllOrders,
        addNewOrder,
        deleteOrder,
        completeTheOrder
    }
})