import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../../api/contracts";
import DetailStyle from "./DetailStyle";
import { getContractByName } from "../../../../api/connectContract";
import { dealMethod } from "../../../../utils/contractUtil";
import ethereum from "../../../../imgs/ethereum.png";
import addressMap from "../../../../api/addressMap";
import develop from "../../../../env"

const Detai = (props) => {
    const { closeDialog, updateData } = props
    let { state, dispatch } = useConnect();

    return (
        <DetailStyle>
            <div className="mask" onClick={closeDialog}>

            </div>
            <div className="dialog-content">
                <div className="header">
                    <div className="title">
                        Details
                    </div>
                    <div className="close" onClick={closeDialog}>
                        <svg t="1681179633627" className="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2615" width="26" height="26">
                            <path
                                d="M753.365333 843.861333a64 64 0 0 0 90.496-90.496L602.496 512l241.365333-241.365333a64 64 0 0 0-90.496-90.496L512 421.504 270.634667 180.138667a64 64 0 1 0-90.496 90.496L421.504 512l-241.365333 241.365333a64 64 0 0 0 90.496 90.496L512 602.496l241.365333 241.365333z"
                                fill="#ffffff" p-id="2616"></path>
                        </svg>
                    </div>

                </div>
                <div className="nft-detail">

                    <div className="content-item">
                        <div className="name">
                            Contract Address
                        </div>
                        <div className="value address"
                            style={{
                                background: 'rgba(205,158,87,0.1)',
                                borderRadius: '50px',
                                color: 'rgba(205, 158, 87, 1)',

                                // opacity: 1,
                                border: '1px solid rgba(205,158,87,0.5)',
                            }}
                        >
                            <a target="_blank" style={{ margin: '5px 10px' }}
                                href={develop.ethScan + "address/" + addressMap.user.address}>{addressMap.user.address.substr(0, 6) + "..." + addressMap.user.address.substr(addressMap.user.address.length - 3, addressMap.user.address.length)}</a>
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="name">
                            Token Standard
                        </div>
                        <div className="value">
                            ERC721
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="name">
                            Chain
                        </div>
                        <div className="value">
                            <img style={{ margin: '0px 10px', width: '28px' }} src={ethereum} />{develop.Name}
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="name">
                            NFT Features
                        </div>
                        <div className="value">
                            Each wallet can only mint one passport,
                            and it cannot be transferred, soul binding.
                        </div>
                    </div>
                </div>
            </div>

        </DetailStyle>
    )
}
export default Detai