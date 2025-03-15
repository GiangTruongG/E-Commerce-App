import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img}  alt=""/>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit commodi optio suscipit ipsum accusamus quam nisi dignissimos accusantium, consequatur asperiores sunt ut distinctio fugiat libero odio a adipisci. Maiores sapiente aliquam tempora quod officia, nisi placeat totam minus, autem explicabo iure repudiandae vero quasi tenetur enim cum perferendis. Ut.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi omnis ipsum eos, delectus dolores pariatur accusamus neque unde possimus. Corrupti ad explicabo voluptates! Vero deserunt repellat repellendus aperiam nemo, quo illum sequi veritatis adipisci!</p>
          <b className="text-gray-500">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam neque ea harum nulla voluptates fuga itaque voluptatum eum mollitia? Veritatis atque dicta nisi ipsum nihil minus, assumenda officia sequi.</p>
        </div>
      </div>

      <div className="text-4xl py-6">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-8">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officiis possimus nesciunt error perferendis aut consequuntur, mollitia sunt esse sequi!</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officiis possimus nesciunt error perferendis aut consequuntur, mollitia sunt esse sequi!</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officiis possimus nesciunt error perferendis aut consequuntur, mollitia sunt esse sequi!</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About