import React from 'react'

const FeedbackForm = () => {
  return (
    <form action="">
        <div>
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
                How would you rate the overall experience?
            </h3>

            <div>
                {[...Array(5).keys()].}
            </div>
        </div>
    </form>
  )
}

export default FeedbackForm