import {Routes, Route} from 'react-router-dom'
import About from '../pages/about/About.jsx'
import Blog from '../pages/blog/Blog.jsx'
import Contacts from '../pages/contacts/Contacts'
import Delivery from '../pages/delivery/Delivery'
import Discounts from '../pages/discount/Discount'
import Test from '../pages/test-drive/Test-drive'
import Homepage from '../pages/Homepage/Homepage.jsx' 
export default function AppRoutes(){
    return (
        <Routes>
        <Route path='*' element={<Homepage/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/delivery' element={<Delivery/>} />
        <Route path='/discounts' element={<Discounts/>} />
        <Route path='/testDrive' element={<Test/>} />  
        </Routes>
    )
    
}