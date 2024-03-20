import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import BarChart from './BarChart';

const ItemCompeny = (props) => {
const [count,setCount] =useState(0);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className={`col-md-3 m-4 border border-3 ${(count >= 5 ? 'bg-danger' : 'bg-success')}`}>
                <div onClick={handleShow} className="d-block text-center">
                    <h2>{props.name}</h2>
                    <h3>erorrs: <span>{count}</span></h3>
                </div>
                    <button onClick={() => { setCount(count + 1) }}>+++++</button>
            </div>
            <Modal
        show={show}
        size="xl"
        fullscreen="xxl-down"
        onHide={handleClose}
        backdrop="true"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
            <div className="col-4 border border-1 border-dark rounded-2">
                <p>nohjnlknjnl</p>
            </div>
            <div className="col-4 border border-1 border-dark rounded-2">
                <p>jbkbkbnjknlk</p>
            </div>
            <div className="col-4 border border-1 border-dark rounded-2">
                <p>kbkjbk</p>
            </div>
            <div className="col-8 border border-1 border-dark rounded-2">
                <BarChart/>
            </div>
            <div className="col-4 border border-1 border-dark rounded-2">
                <p>erorr</p>
                <ul>
                    <li>ygfyhvbjn</li>
                    <li>lnhlhnl</li>
                    <li>jbhkhbkbn</li>
                    <li>kjbkbn</li>
                    <li>lknkhhnl</li>
                    <li>ljnnlkn</li>
                </ul>
            </div>
            </div>
        </Modal.Body>
      </Modal>
        </React.Fragment>
    )
}

export default ItemCompeny