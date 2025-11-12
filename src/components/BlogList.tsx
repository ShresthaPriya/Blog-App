import Card from "../components/Card"
import  { cards } from "../data/blogData"



const BlogList = ()=> {
  return (
    // <div className="flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-1">
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      {/* </div> */}
          <button className='justify-self-center col-span-3 border-[0.2rem] border-[#696A75] text-[#696A75] mt-[0.5rem] p-2 rounded-md block'>Load More</button>
    </div>
  )
}

export default BlogList

