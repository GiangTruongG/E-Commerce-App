
const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subcribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eligendi sint ad vitae asperiores praesentium ut magnam repellendus atque perferendis.</p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" placeholder="Enter your email here" required className="w-full sm:flex-1 outline-none" />
        <button className="bg-black text-white py-4 px-10 text-xs">SUBCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox