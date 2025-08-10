/** @format */

type Review = {
  _id: string
  name: string
  bewertung: string
  sterne: number
  quelle?: string
  bildUrl?: string
}

export default function Reviews({reviews}: {reviews: Review[]}) {
  return (
    <div className='space-y-6 m-6'>
      {reviews.map((review: Review) => (
        <div
          key={review._id}
          className='p-4 border rounded-lg shadow-sm bg-white max-w-80'>
          <div className='flex items-center mb-2'>
            {review.bildUrl && (
              <img
                src={
                  review.bildUrl ||
                  "https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1"
                }
                alt={review.name}
                width={40}
                height={40}
                className='rounded-full mr-3'
              />
            )}
            <div>
              <p className='font-semibold'>{review.name}</p>
              <p className='text-sm text-gray-500'>{review.quelle}</p>
            </div>
          </div>

          <div className='flex mb-2'>
            {"★".repeat(review.sterne)}
            {"☆".repeat(5 - review.sterne)}
          </div>

          <p className='text-gray-700'>{review.bewertung}</p>
        </div>
      ))}
    </div>
  )
}
