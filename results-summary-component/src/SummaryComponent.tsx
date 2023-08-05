import React from "react";


const DataSummary = (props: any) => {

    return(
        <div style={{backgroundColor: `${props['b-color']}`}} className="flex flex-row justify-between rounded-md mt-2 p-3">
            <div className="flex flex-row">
                <img className="mr-3" src={`../src/${props['imagesrc']}`} alt="img"/>
                <h3 style={{color: `${props['t-color']}`}} className="font-HGBold text-sm w-auto m-auto">{props['category']}</h3>
            </div>
            <p className="font-HGBold text-sm text-dark-grey-blue-t">
                <span className="text-dark-grey-blue">{props['score']}</span>  / 100
            </p>
        </div>
    )

}

export default DataSummary;