import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubcategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let copiedProducts = products.slice()

    if (search && showSearch) {
      copiedProducts = copiedProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      copiedProducts = copiedProducts.filter(item => category.includes(item.category))
    } 

    if (subCategory.length > 0) {
      copiedProducts = copiedProducts.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(copiedProducts)
  }

  const sortProducts = () => {
    let copiedFilterProducts = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(copiedFilterProducts.sort((a, b) => a.price - b.price))
        break;
      case 'high-low':
        setFilterProducts(copiedFilterProducts.sort((a, b) => b.price - a.price))
        break;
      default:
        applyFilter()
        break;
    }
  }

  useEffect(() => {
    applyFilter()
  },[category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts()
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left side - Filter */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90 transition' : ''}`} src={assets.dropdown_icon} />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 sm:block pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2 items-center'>
              <input type="checkbox" className="w-3" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2 items-center'>
              <input type="checkbox" className="w-3" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2 items-center'>
              <input type="checkbox" className="w-3" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* Subcategory filter */}
        <div className={`border border-gray-300 sm:block pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2 items-center'>
              <input type="checkbox" className="w-3" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2 items-center'>
              <input type="checkbox" className="w-3" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2 items-center'>
              <input type="checkbox" className="w-3" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

    {/*  Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* All products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.images} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection