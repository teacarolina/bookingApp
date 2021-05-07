import React, {useState} from 'react'
import axios from "axios"

function UploadFile() {

    const [fileData , setFileData] = useState();

    function FileUpload (e) {
        e.preventDefault();

        // FormData()

        axios.post("http://localhost:1337/upload", {
            img: fileData
        }).then( (response) => {
            console.log(response.data)
        }).catch( (error) => {
            console.log(error.data)
        })

        const formData = new FormData()

        console.log(formData)
    }

    return (
        <div>
            Upload file
            <form onSubmit={FileUpload}>
            <input type="file" name="file" />
            <button>Click to submit</button>
            </form>
        </div>
    )
}

export default UploadFile