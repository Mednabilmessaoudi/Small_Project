import axios from 'axios'

export const addartcile = async (article)=>{
   const res =  await axios.post("http://localhost:4500/api/add",article);
   console.log(res);

}

export const getarticle = async ()=>{
    const data =  await axios.get("http://localhost:4500/api/articles");
    return data
 
 }


 export const editarticle = async (id,obj)=>{
   const edit =  await axios.put(`http://localhost:4500/api/edit/${id}`,obj);
   return edit

}

export const deletearticle = async (id)=>{
   const cut =  await axios.delete(`http://localhost:4500/api/delete/${id}`);
   return cut

}
export const createUser= async (newuser)=>{
   const user =  await axios.post("http://localhost:4500/api/create",newuser);
   return user

}

export const UserLogin= async (log)=>{
   const logged =  await axios.post("http://localhost:4500/api/login",log);
   return logged

}



