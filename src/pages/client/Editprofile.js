import React,{useState} from 'react'
import {Container,Row,Col,Form,Button, Alert} from 'react-bootstrap'
import NavUser from '../../components/navbar/Navuser'
import {API} from '../../config/api'
import {useQuery,useMutation} from 'react-query'
import {useParams} from 'react-router-dom'
import './indexclient.css'
function Editprofile() {

    const {id} = useParams()
    

    // =============== get user by id
    let api = API()
    const {data: profile} = useQuery('UserCache', async () => {

        const config = {
            method: "GET",
            headers: {
                Authorization: "Basic " + localStorage.token,
            }
        }
        const response = await api.get(`/user/${id}`, config)
        return response.data
    } )

    console.log(profile);
  
    // ================ update user
    const [preview, setPreview] = useState(null);
    const [message,setmessage] = useState(false)
    const [form,setform] = useState({
    fullname: "",
    email: "",
    image: ""
    })

    const handleChange = (e) => {

        setform({
            ...form,
            [e.target.name] : e.target.type ===  'file' ? e.target.files : e.target.value
        })
        if(e.target.type === 'file') {
            setPreview(e.target.files)
        }
    }

    const handleSubmit = useMutation( async (e) => {

        try {
            e.preventDefault()
            const profile = new FormData()
            if (preview) {
                profile.set("image", preview[0], preview[0]?.name);
              }
              profile.set("fullname", form.fullname)
              profile.set("email", form.email)

              const config  = {
                  method: 'PUT',
                  headers: {
                    Authorization: "Basic " + localStorage.token,
                  }
                  ,body: profile
              }
              
              const response = await api.patch(`/user/${id}`, config);
              if(response.status === 'success') {

                const alert = (
                    <Alert variant="success" className="py-1">
                      Update Profile Success
                    </Alert>
                  );
                  setmessage(alert);
                  


              }


            
        } catch (error) {



            
        }


    } )



    return (
        <>
        <NavUser/>
        <Container>
            <br/>
            <br/>
        <Row>
            <Col md={4}>
                <h2>Update Profile</h2>
                <Form onSubmit={(e) => handleSubmit.mutate(e)} >
                {message && message}
                <Form.Group>
                     
                            <Form.Control type="text" className="ipt" 
                            name="fullname"
                            onChange={handleChange}
                            value={form.fullname}
                            placeholder="Ex: fullname.." />
                          
                        </Form.Group>

                        <Form.Group>
                          
                            <Form.Control className="ipt" type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Ex: userxx@mail.com.." />
                        </Form.Group>
                        {!preview 
                        ? 
                        <p></p>
                        :
                          <img src={URL.createObjectURL(preview[0])} alt="imgpreview" height="120" />
                        }
                        <Form.Group >
                            <Form.Control className="ipt"
                            name="image"
                            onChange={handleChange}
                            type="file" placeholder="jpg | JPG | Png | PNG | jpeg" />
                        </Form.Group>

                        <Button variant="danger" className="btnadd" type="submit">
                            Update
                        </Button>

                        
                    
                </Form>
            </Col>

            <Col md={6}>
            
                    <Row className="profileprev">
                        <Col md={3}>
                <img src={"http://localhost:4005/uploads/"+profile?.image} alt="imageprofile" height="180" />
                        
                        </Col>
                        <Col md={3} className="colname">

                    <p>Name : <br/> {profile?.fullname} </p>
                    <p>Email: <br/> {profile?.email} </p>

                        </Col>

                    </Row>
            </Col>


        </Row>
        </Container>
            
        </>
    )
}

export default Editprofile
