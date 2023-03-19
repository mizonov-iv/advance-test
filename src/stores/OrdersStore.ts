import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import {useRouter} from "vue-router";
import Order from "../interfaces/Order.js";

export const useOrdersStore = defineStore("orders", () => {
    const router = useRouter();
    const allOrders = ref<Order[]>([]);

    // GET ORDERS DATA FROM BACKEND
    const getAllOrders = () => {
         axios.get("http://localhost:3000/events")
            .then(response => {
                allOrders.value = response.data;
            })
             .catch((err) => {
                 console.log(err);
             })
    }
    // ADD NEW ORDER
    const addNewOrder = async (newOrder: any) => {
        const newOrderID = returnLastItem(allOrders.value) + 1;
        await axios.post("http://localhost:3000/events/", {...newOrder, id: newOrderID});
        getAllOrders();
        router.push('/orders');
    }

    // DEFINE THE LAST ORDER ID
    const returnLastItem = (arr: any) => {
        if(arr.length == 0) {
            return 0
        }
        return arr[arr.length - 1].id;
    }

    // DELETE SELECTED ORDER
    const deleteOrder = async (order: any) => {
        await axios.delete(`http://localhost:3000/events/${order.id}`);
        getAllOrders();
    }

    // MARK ORDER AS COMPLETED
    const completeTheOrder =  async (order: any) => {
        await axios.put(`http://localhost:3000/events/${order.id}`, {...order, status: "Выполнен"});
        getAllOrders();
    }

    return {
        allOrders,
        getAllOrders,
        addNewOrder,
        deleteOrder,
        completeTheOrder
    }
})