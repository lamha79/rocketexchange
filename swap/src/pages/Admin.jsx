import React, { useEffect } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/swap.css";

const Admin = () => {
    const addressRef = useRef("");
    const priceRef = useRef("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <>
        <CommonSection tittle={"Admin add collection"} />
        <section>
            <Container>
            <Row>
                <Col lg='6' md='6' className="m-auto text-center">
                <h2>Please type address collection</h2>
                <div className="contact mt-4">
                    <form onSubmit={handleSubmit}>
                    <div className="form_input">
                        <input 
                            type="text" 
                            placeholder='Address Collection:' 
                            ref={addressRef}
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
                        Add Adress
                    </button>
                    </form>
                </div>
                </Col>
                <Col lg='6' md='6' className="m-auto text-center">
                <h2>Token</h2>
                <div className="contact mt-4">
                    <form onSubmit={handleSubmit}>
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
                    <button 
                        className="send__btn" 
                        style={{
                            border:'none', 
                            padding:'7px 25px', 
                            borderRadius:'5px',
                            marginTop:'20px',
                        }}
                    >
                        Accept
                    </button>
                    </form>
                </div>
                </Col>
                <Col lg='6' md='6' className="m-auto text-center">
                <h2>Please add price</h2>
                <div className="contact mt-4">
                    <form onSubmit={handleSubmit}>
                    <div className="form_input">
                        <input 
                            type="text" 
                            placeholder='Price collection:' 
                            ref={priceRef}
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
                        Accept
                    </button>
                    </form>
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
                        Add Collection
                    </button>
                </Col>
            </Row>
            </Container>
        </section>
        </>
    );
    };

export default Admin;