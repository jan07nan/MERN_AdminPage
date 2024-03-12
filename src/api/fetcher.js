import axios  from "axios";


const fetcher = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + "/api",
})


export async function login ({ username, password }) {
   const {data} =  await fetcher.post("/login", { username, password });
    return data.user;
}




export async function getAllusers () {
    const {data} =  await fetcher.get("/users");
     return data;
 }



export async function createNewUser (body) {
    const {data} =  await fetcher.post("/adduser" , body);
     return data;
 }
