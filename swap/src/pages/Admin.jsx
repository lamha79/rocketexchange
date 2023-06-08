import React, {useRef, useEffect, useState } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/swap.css";

    const Admin = () => {

        const adressRef = useRef("");
        const amountRef = useRef("");

        const [tokenState, setTokenState] = useState("LINK");
    
        const handleSubmit = (e) => {
        e.preventDefault();
        };
    
        useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }, []);
    
        return (
        <>
            <CommonSection tittle={"Admin"} />
            <section>
            <Container>
                <Row>
                <Col lg='6' md='6' className="m-auto text-center">
                    <h1>Add Collection</h1>
                    <div className="contact mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form_input">
                        <input 
                            type="text" 
                            placeholder='Type Address:' 
                            ref={adressRef}
                        />
                        </div>  
                        <div className="form_input">
                        <input 
                            type="text" 
                            placeholder='Amount' 
                            ref={amountRef}
                        />
                        </div>
                        <div className="token_input">
                            <p className="token_input_describe">Choose type token</p>
                            <select
                                className="token_input_custom"
                                value={tokenState}
                                onChange={(e) => {
                                    const selectedToken = e.target.value;
                                    setTokenState(selectedToken);
                                }}
                            >
                                <option value="LINK">LINK</option>
                                <option value="ETH">ETH</option>
                            </select>
                            <br/><br/>
                            {tokenState}
                            </div>
    
                        <button 
                        className="send__btn" 
                        style={{
                            border:'none', 
                            padding:'7px 15px', 
                            borderRadius:'5px',
                            marginTop:'20px',
                            background: '#495057',
                            color: '#fff'
                        }}
                        >
                        Confirm
                        </button>
                    </form>
                    </div>
                </Col>
                </Row>
            </Container>
            </section>
        </>
        );
    };
    export default Admin;
