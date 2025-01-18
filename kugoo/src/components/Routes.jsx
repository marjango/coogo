import {Routes, Route} from 'react-router-dom'

import Service from '../pages/service/Service.jsx'

import About from './../pages/about/about.jsx'
import TestDrive from '../pages/test-drive/testDrive.jsx'
import Blog from './../pages/blog/blog.jsx'
import Contacts from './../pages/contacts/contacts.jsx'
import Delivery from './../pages/delivery/delivery.jsx'
import Discount from '../pages/discount/discount.jsx'

import Homepage from './../components/Homepage/Homepage.jsx' 
import Cart from '../pages/cart/Cart.jsx'
import Catalog from './../components/Homepage/Catalog.jsx' 

export default function AppRoutes(){
    return (
        <Routes>
            <Route path='*' element={<Homepage/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/About' element={<About/>} />
            <Route path='/Delivery' element={<Delivery/>} />
            <Route path='/TestDrive' element={<TestDrive/>} />  
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/Contacts' element={<Contacts/>} />
            <Route path='/Discount' element={<Discount/>} />

            <Route path='/Cart' element={<Cart/>} />  
            <Route path='/catalog' element={<Catalog/>} />  
        </Routes>
    )
    
}