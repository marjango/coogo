import {Routes, Route} from 'react-router-dom'
import About from '../pages/about/about'
import Blog from '../pages/blog/blog'
import Contacts from '../pages/contacts/contacts'
import Delivery from '../pages/delivery/delivery'
import Discounts from '../pages/discounts/discounts'
import Test from '../pages/test-drive/testDrive'
export default function AppRoutes(){
    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/delivery' element={<Delivery/>} />
        <Route path='/discounts' element={<Discounts/>} />
        <Route path='/testDrive' element={<Test/>} />  
    </Routes>
}