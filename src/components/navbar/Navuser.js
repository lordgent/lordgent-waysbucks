import React,{useContext} from 'react'
import {Navbar,Container, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../image/icons.png'
import style from './Navuser.module.css'
import cart from './cart.png'
import {useHistory} from 'react-router-dom'
import { HiOutlineUser,HiOutlineExternalLink } from "react-icons/hi";
import {UserContext} from '../../context/contextuser'
import {API} from '../../config/api'
import {useQuery} from 'react-query'
import { BsPeopleCircle } from "react-icons/bs";


function Navuser() {
 
    let render = useHistory()

    const [state,dispatch] = useContext(UserContext)
    function logout() {
        
        dispatch({
            type: "LOGOUT"
        })
        localStorage.removeItem('login')
        render.push("/")
    }


const id = parseInt( state?.user.id)

document.title = 'Welcome waysbucks'
let api = API()
let {data: user } = useQuery("UserCache", async () => { 
    const config = {
        method: 'GET',
        headers: {
            Authorization: "Basic " + localStorage.token,
        }
    
    }
    const response = await api.get(`/user/${id}`, config);


    return response.data
})

//   let user = JSON.parse(localStorage.getItem('userlogin'))
  let cartuser = JSON.parse(localStorage.getItem('mycart'))
    return (
        <>
            
            <Navbar expand="lg" variant="" bg="">
                    <Container>
                            <Link to="/client">
                                <img id="collasible-nav-dropdown" src={logo} alt="logowaysbucks" height="40" />
                            </Link>

                            <div  className={style.dv}>
                             <Link to="/client/mycart">         
                                {cartuser === null ? 
                                            (
                                                <>
                                                      <img src={cart} alt="cartlogo" height="27" className={style.cart} />
                                                </>
                                            )

                                        : 
                                        <>
                                        <img src={cart} alt="cartlogo" height="25" className={style.cart} />
                                        <span class={style.lg}>{cartuser.length}</span>
                                    
                                        </>
                                }
                                                   
                               </Link>
                                <Dropdown className={style.dropdown}>
                                <Dropdown.Toggle className={style.user} >
                                {user?.image ? 
                                <img src={"http://localhost:4005/uploads/"+user?.image} alt={user?.image} height="30" className={style.imgs} />
                                :  
                               <BsPeopleCircle className={style.tog} />
                                    
                                }
                                    
                                    
                                    
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={style.dropmenu}>
                                    <Dropdown.Item ><Link to="/client/profile" className={style.prof}> <HiOutlineUser className={style.icons} /> Profile</Link></Dropdown.Item>
                                    <Dropdown.Item ><button onClick={logout} className={style.log}> <HiOutlineExternalLink className={style.icons} /> Logout</button></Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </div>

                    </Container>
                </Navbar>
        </>
    )
}

export default Navuser

