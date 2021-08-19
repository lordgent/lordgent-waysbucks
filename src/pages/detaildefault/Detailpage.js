import React,{useState,useEffect} from 'react'
// import {Container} from 'react-bootstrap'

function Detailpage({ match }) {
    const id = match.params.id
    const [detailproduct,setDetailproduct] = useState([]);
    useEffect(() => {

        const detail = fetch(`https://my-json-server.typicode.com/lordgent/fakedata/product/${id}`);
            detail.then((response) => {
                return response.json()
            })
            .then(result => {
                setDetailproduct(result)
                console.log(result);
            } )
            .catch(err => {
                console.error(err + ' errrorrrrrr');
            } )

    } )

    return (
        <>
          
        </>
    )
}

export default Detailpage
