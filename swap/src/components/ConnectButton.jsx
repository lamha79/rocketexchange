import React from "react"
import PageButton from "./../components/PageButton"

const ConnectButton = (props) => {
    const { isConnected, signerAddress, getSigner, provider } = props
    const displayAddress = `${signerAddress?.substring(0, 10)}...`

    return (
        <>
            {isConnected() && displayAddress !== "undefined..." ? (
                <div className="buttonContainer">
                    <PageButton name={displayAddress} />
                </div>
            ) : (
                <div
                    className="group-button"
                    onClick={() => getSigner(provider)}
                >
                    <span>Wallet Connect</span>
                </div>
            )}
        </>
    )
}

export default ConnectButton
