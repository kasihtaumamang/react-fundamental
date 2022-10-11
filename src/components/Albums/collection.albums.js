import Axios from "axios";
import { Button, ButtonGroup, Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Loaders from "../Utilities/loaders";

const Collection = () => {

    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let flush = false

        if (!flush) {
            Axios({
                methods: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        // Clean Up Render
        return () => { flush = true }

    }, [limit])
    
    const handleLimit = (props) => {
        (props === "+") ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
    }

    if (loading) return <Loaders />

    return (
        <React.Fragment>
            <h3>{limit} Collection</h3>
            <Carousel>
                {/* Mapping Data Start */}
                {datas.map((data, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={data.url}
                                alt="First slide"
                                width={450}
                                height={450}
                            />
                            <Carousel.Caption>
                                <h3>{data.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
                {/* Mapping Data End */}
            </Carousel>
            <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
                <Button 
                    variant="outline-success"
                    onClick={() => handleLimit("+")}
                >+</Button>
                {limit > 1 && 
                    <Button 
                        variant="outline-danger"
                        onClick={() => handleLimit("-")}
                        >-</Button>
                }
            </ButtonGroup>
        </React.Fragment>
    )
}

export default Collection