import { useState } from "react"

// import { post } from "../../Backend/Tdos_api/TodosApi"
function CreateTdodo() {



    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")
    return (
        < div >
            <input placeholder='Title' onChange={val => setTitle(val.target.value)} /><br /><br />
            <input placeholder='Discription' onChange={val => setDesc(val.target.value)} /><br /><br />
            <button
                onClick={() => {
                    fetch("http://localhost:3000/TodoApis/POST_TODO", {
                        method: "POST",
                        body: JSON.stringify({
                            Title: Title,
                            Description: Desc

                        }),
                        headers: {
                            "Content-Type": "application/json",
                        }

                    })
                }}
            >Creat Todo</button>

        </div >)

}
export default CreateTdodo