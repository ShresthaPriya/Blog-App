import Card from "../components/Card"
import { cards } from "../data/blogData"



const BlogList = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 ">
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}

      </div>
      <button className='border border-[#696A75] text-[#696A75] p-2 rounded-md block mx-auto'>Load More</button>
    </>
  )
}

export default BlogList

