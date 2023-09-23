import { color } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";

const Data = () => {
    const newTab = url => {
        window.open(url)
    }
    return (

        <div>
            <center>
                <button className="button" onClick={() => newTab('https://clear-goat-97.deno.dev/quiz/render')}
                    style={{
                        background: "blue", color: "white",
                        display: "flex", position: "relative",
                        margin: "10px", padding: "10px",
                        justifyContent: "center", alignContent: "center",
                        borderRadius: "5px", width: "10%"
                    }}>

                    Quiz Data
                </button>
                <br />
                <button className="button" onClick={() => newTab('https://clear-goat-97.deno.dev/goal/render')}
                    style={{
                        background: "blue", color: "white",
                        display: "flex", position: "relative",
                        padding: "10px", justifyContent: "center",
                        alignContent: "center", borderRadius: "5px", width: "10%"
                    }}>
                    Goal Challenge Data
                </button>
            </center>
        </div>
    )

};
export default Data;

