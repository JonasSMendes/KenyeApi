'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios"

function pageOnePiece() {

    const [onePiece, setOnePiece] = useState({ responseData: [] })

    useEffect(() => {
        GetOnePiece()
    }, [])

    const GetOnePiece = () => {
        axios.get("https://kenye-api.vercel.app/api/onePiece")
            .then((res) => setKenye(res))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Link href="/" >
                home
            </Link>

            {onePiece.responseData[1].name}

            <h2>one piece</h2>
        </div>
    )
}

export default pageOnePiece