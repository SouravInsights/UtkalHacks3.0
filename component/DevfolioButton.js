import React, { useEffect } from "react"


const DevfolioButton = (props) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://apply.devfolio.co/v2/sdk.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div 
            className="apply-button" 
            data-hackathon-slug="utkalhacks3" 
            data-button-theme="dark"
            style={{height: "50px", width: "312px"}}
            {...props}
        ></div>
    )
}

export default DevfolioButton