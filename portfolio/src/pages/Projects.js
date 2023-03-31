import React from 'react'

export default function Projects() {
  return (
    <>
     <div className="col-3 m-3">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{text.substring(0, 24) + "..."}</p>
            <Button variant="primary" onClick={handleShow}>
              Show Blog
            </Button>
          </div>
        </div>
      </div>
    
    
    </>
  )
}
