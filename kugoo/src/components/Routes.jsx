import {Routes, Route} from 'react-router-dom'
import About from './../pages/about/about.jsx'
import Blog from './../pages/blog/blog.jsx'
import Contacts from './../pages/contacts/contacts.jsx'
import Delivery from './../pages/delivery/delivery.jsx'
import Discounts from './../pages/discount/Discount'
import Test from './../pages/test-drive/Test-drive'
import Homepage from './../pages/Homepage/Homepage.jsx' 
import Cart from '../pages/cart/Cart.jsx'
import Catalog from './../pages/Homepage/Catalog.jsx' 

export default function AppRoutes(){
    return (
        <Routes>
            <Route path='*' element={<Homepage/>}/>
            <Route path='/About' element={<About/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/Contacts' element={<Contacts/>} />
            <Route path='/Delivery' element={<Delivery/>} />
            <Route path='/Discounts' element={<Discounts/>} />
            <Route path='/TestDrive' element={<Test/>} />  
            <Route path='/Cart' element={<Cart/>} />  
            <Route path='/catalog' element={<Catalog/>} />  
        </Routes>
    )
    
}