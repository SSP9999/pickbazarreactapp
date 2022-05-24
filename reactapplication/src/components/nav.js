import "../styles/nav.scss";
import { Select } from "antd";
import {MoneyCollectFilled, ShoppingCartOutlined} from "@ant-design/icons" 




export default function Nav() {
  return (
    <div className="nav-header">
        <div className="imageDiv">
        <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75" alt="logo"/>
        </div>
                
            <div className="selectDiv">
            <select className="groceries">
                    <option>Shopping</option>
                    <option>Grocery</option>
                    <option>Bakery</option>
                    <option>Makeup</option>
                    <option>Bags</option>
                    <option>Clothing</option>
                    <option>Furniture</option>
                    <option>Dailyneeds</option>
                </select>

            </div>
            <div className="navlistDiv">
            <ul className="nav-list">
                    <li><ShoppingCartOutlined/> Shops</li>
                    <li><MoneyCollectFilled/>Offers</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
   
            <div className="buttonsDiv">
                <button className="nav-button">Become a Seller</button>
                <button className="nav-button">Join</button>
            </div>
   
        

    </div>
  )
}
