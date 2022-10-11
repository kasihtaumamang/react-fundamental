import { Spinner } from "react-bootstrap"

const Loaders = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div>
                <Spinner className="me-1" animation="grow" variant="success" />
                <Spinner className="me-1" animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
            </div>
        </div>
    )
}

export default Loaders