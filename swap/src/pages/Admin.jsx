import React, {useRef, useEffect } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/swap.css";

    const Admin = () => {

        const adressRef = useRef("");
        const amountRef = useRef("");
    
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
                    <h2>Please type address</h2>
                    <div className="contact mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form_input">
                        <input 
                            type="text" 
                            placeholder='Type Address:' 
                            ref={adressRef}
                        />
                        </div>
    
                        <div className="row currencyInput">
                                    <div className="col-md-6 numberContainer">
                                        <input
                                            className="currencyInputField"
                                            placeholder="0.0"
                                        />
                                    </div>
                                    <div className="col-md-6 tokenContainer">
                                        <span className="tokenName">LINK</span>
                                        <div className="balanceContainer">
                                            <span className="balanceAmount">
                                                Balance:{" "}
                                            </span>
                                        </div>
                                    </div>
                                </div>
    
                        <div className="form_input">
                        <input 
                            type="text" 
                            placeholder='Amount' 
                            ref={amountRef}
                        />
                        </div>
    
                        <button 
                        className="send__btn" 
                        style={{
                            border:'none', 
                            padding:'7px 25px', 
                            borderRadius:'5px',
                            marginTop:'20px',
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