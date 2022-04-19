import PropTypes from 'prop-types'
import FeedbackItems from './feedbackitems'

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }
  return (
    <div className="feedback-List">
      {feedback.map((item) => (
          <FeedbackItems key={item.id}
           item={item} 
           handleDelete = {handleDelete}
           />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array
}

export default FeedbackList
