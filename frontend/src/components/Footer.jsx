import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi alias asperiores accusantium fuga, minima iusto consequuntur sint eius iste nihil amet corporis fugiat vel rerum maiores dolorum excepturi molestias.</p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+61-473-658-925</li>
            <li>contact@foreversuit.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center py-5 text-sm">Copyright 2025@foreversuit.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer