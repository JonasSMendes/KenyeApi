'use client'
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";

function Home() {

    const [kenye, setKenye] = useState({ data: { quote: '' } })

    useEffect(() => {
        GetKenye()
    }, [])

    const GetKenye = () => {
        axios.get("https://api.kanye.rest")
            .then((res) => setKenye(res))
            .catch((err) => console.log(err))
    }

    return (
        <div className="">
            <div className="">

                <div className="">
                    <img width={300} height={300} src="https://e7.pngegg.com/pngimages/437/1000/png-clipart-kanye-west-yeezus-kanye-face-head.png" />
                </div>

                <div className="">
                    {kenye.data.quote}
                </div>

            </div>
        </div>
    )
}

export default Home