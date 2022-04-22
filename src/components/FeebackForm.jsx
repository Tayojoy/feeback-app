import Card from './Shared/Card'

function FeebackForm() {
  return (
    <Card>
      <form>
        <h2>How would you rate your experience with this App</h2>
        {/* radio - radio select component */}
        <div className="input-group">
          <input type="text" placeholder='Write a review' />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeebackForm


