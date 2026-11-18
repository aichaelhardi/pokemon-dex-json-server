const API_URL = "http://localhost:3000";
export async function request(method, route, body) {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json" ,
        }
    };
    const url =`${API_URL}${route}` 
    if (body){
       options.body = JSON.stringify(body);
    }
    const response = await fetch( url ,options)
   const data = await response.json();
   return data;
}

export async function getCreatures(){
return await request("GET", "/creatures");

}

