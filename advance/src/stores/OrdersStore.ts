import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";

export const useOrdersStore = defineStore("orders", () => {
    const router = useRouter()
    let allOrders: any = ref([])

    const getAllOrders = () => {
         axios.get("http://localhost:3000/events")
            .then(response => {
                console.log(response.data)
                allOrders.value = response.data
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

    const deleteOrder = (order: any) => {
        allOrders.value = allOrders.value.filter((element: any) => element.id !== order.id)
    }

    const returnLastItem = (arr: any) => {
        return arr[arr.length - 1]
    }

    return {
        allOrders,
        getAllOrders,
        addNewOrder,
        deleteOrder
    }
})