const getState = ({getStore,getActions, setStore})=>{
    return{
        store:{
            peoples:null,
            vehicles:null,
            planets:null
        },
        actions:{
            getPeoples: url=>{
                return(
                    fetch(url,{
                        method:'GET',
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    .then(resp =>resp.json())
                    .then(data=>{
                        setStore({
                            peoples:data
                        });
                    })
                    .catch(error=> {
                        console.log(error)
                    })
                )
            },
            getVehicles: url=>{
                return(
                    fetch(url,{
                        method:'GET',
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    .then(resp =>resp.json())
                    .then(data=>{
                        setStore({
                            vehicles:data
                        });
                    })
                    .catch(error=> {
                        console.log(error)
                    })
                )
            },
            getPlanets: url=>{
                return(
                    fetch(url,{
                        method:'GET',
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    .then(resp =>resp.json())
                    .then(data=>{
                        setStore({
                            planets:data
                        });
                    })
                    .catch(error=> {
                        console.log(error)
                    })
                )
            }

        }
    }
}

export default getState;