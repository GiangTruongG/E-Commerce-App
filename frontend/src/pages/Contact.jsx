import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      
      <div className="text-center text-2xl pt-8 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">Building 284 Bourke St, Melbourne VIC 3000</p>
          <p className="text-gray-500">Tel: +61 (473) 856-387 <br/>Email:forever.suit@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at ForeverSuit</p>
          <p>Learn more about our teams and job opportunity</p>
          <button className="border border-black px-8 py-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-500">Explore</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact